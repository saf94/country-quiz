import React from "react";
import "./App.css";
import ContextStore from "./Context/Context";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <ContextStore>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Quiz />
                    </Route>
                    <Route path="/results">
                        <Results />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ContextStore>
    );
}

export default App;
