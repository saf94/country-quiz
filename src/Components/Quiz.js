import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import Quiz from "../Questions/quiz.json";
import "./Quiz.css";

export default Hoc(() => {
    console.log("it rendered");
    const [
        { title, name, answers, answerSelected, isLastQuestion },
        dispatch
    ] = useQuizFormatter();

    // const[state, setState] = useState(0)

    useEffect(() => {
        dispatch({ type: "NEW_QUIZ", payload: Quiz });
    }, []);

    const answerResponse = (answerString, isCorrect) => {
        if (answerSelected && (answerSelected === answerString || isCorrect)) {
            if (isCorrect) return "correct";
            return "selectedFalse";
        }
    };

    return (
        <>
            <div>{title}</div>
            <div>{name}</div>
            <button onClick={() => dispatch({ type: "RANDOM_CHANGE" })}>
                Dispatch random change
            </button>

            <div>
                {answers.map((answer) => {
                    const { answerString, isCorrect } = answer;
                    return (
                        <div
                            onClick={() =>
                                !answerSelected &&
                                dispatch({
                                    type: "ANSWER_SELECTED",
                                    payload: {
                                        answer: answerString,
                                        isCorrect: isCorrect
                                    }
                                })
                            }
                            className={answerResponse(answerString, isCorrect)}
                            key={answerString}
                        >
                            {answerString}
                        </div>
                    );
                })}
            </div>
            {answerSelected &&
                (isLastQuestion ? (
                    <Link to="/results">Go to Results</Link>
                ) : (
                    <button
                        onClick={() =>
                            dispatch({ type: "GO_TO_NEXT_QUESTION" })
                        }
                    >
                        Next
                    </button>
                ))}
        </>
    );
};

const useQuizFormatter = () => {
    const [state, dispatch] = useContext(Context);
    const currQuestion =
        state.quiz.questions[state.currentQuiz.currentQuestion];
    const questionSet = {
        title: state.quiz.title,
        name: currQuestion.questionName,
        answers: currQuestion.questionAnswers,
        answerSelected: state.currentQuiz.answerSelected,
        isLastQuestion:
            state.currentQuiz.currentQuestion ===
            state.quiz.questions.length - 1
    };
    return [questionSet, dispatch];
});
