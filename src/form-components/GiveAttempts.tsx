import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function inputToGain() {
        const toInt = parseInt(attemptsRequested);

        if (!isNaN(toInt)) {
            setAttemptsLeft((prev) => prev + toInt);
        }
    }

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
            />
            <Button onClick={inputToGain}>gain</Button>
            <Button
                onClick={() => {
                    attemptsLeft > 0 ?
                        setAttemptsLeft((prev) => prev - 1)
                    :   setAttemptsLeft(attemptsLeft);
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </Button>
        </div>
    );
}
