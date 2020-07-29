import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

export default () => {
    const [state] = useContext(Context);
    return (
        <>
            <div>{state.currentQuiz.noOfCorrectAnswers}</div>
            <Link to="/home">Try Again</Link>
        </>
    );
};
