import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                value={givenAnswer}
                onChange={(event) => {
                    setGivenAnswer(event.target.value);
                }}
            ></input>
            <span>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
