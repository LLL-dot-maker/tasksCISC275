import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            ></input>
            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
