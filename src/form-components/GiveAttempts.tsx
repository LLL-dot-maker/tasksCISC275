import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type={"number"}
                value={attemptsRequested}
                onChange={(event) => {
                    setAttemptsRequested(event.target.value);
                }}
            ></input>
        </div>
    );
}
