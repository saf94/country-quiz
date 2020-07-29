import React, { createContext, useReducer } from "react";
import reducer from "../Reducers/reducer";

export const Context = createContext();

const initialState = {
    quiz: {
        title: "Default",
        questions: [
            {
                questionName: "",
                questionAnswers: [{ answerString: "", trueAnswer: false }]
            },
            {
                questionName: "",
                questionAnswers: [{ answerString: "", trueAnswer: false }]
            }
        ]
    },
    currentQuiz: {
        currentQuestion: 0,
        answerSelected: null,
        noOfCorrectAnswers: 0
    },
    randomThing: 0
};

export default ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};
