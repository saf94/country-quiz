export default (state, { type, payload }) => {
    switch (type) {
        case "NEW_QUIZ":
            return {
                ...state,
                quiz: payload,
                currentQuiz: {
                    currentQuestion: 0,
                    answerSelected: null,
                    noOfCorrectAnswers: 0
                }
            };
        case "ANSWER_SELECTED":
            const { noOfCorrectAnswers } = state.currentQuiz;
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    answerSelected: payload.answer,
                    noOfCorrectAnswers:
                        payload.isCorrect === true
                            ? noOfCorrectAnswers + 1
                            : noOfCorrectAnswers
                }
            };
        case "GO_TO_NEXT_QUESTION":
            const { currentQuestion } = state.currentQuiz;
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    currentQuestion: currentQuestion + 1,
                    answerSelected: null
                }
            };
        case "RANDOM_CHANGE":
            const { randomThing } = state;
            return {
                ...state,
                randomThing: randomThing + 1
            };

        // case "INCREMENT_QUESTION":
        //     const { currentQuestion } = state.currentQuiz;
        //     return {
        //         ...state,
        //         currentQuiz: {
        //             ...state.currentQuiz,
        //             currentQuestion: currentQuestion + 1
        //         }
        //     };
        // case "INCREMENT_CORRECT_ANSWERS":
        //     const { noOfCorrectAnswers } = state.currentQuiz;
        //     return {
        //         ...state,
        //         currentQuiz: {
        //             ...state.currentQuiz,
        //             noOfCorrectAnswers: noOfCorrectAnswers + 1
        //         }
        //     };
        default:
            return state;
    }
};
