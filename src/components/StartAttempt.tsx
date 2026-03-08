import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function StartQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <p>Attempts: {attempts}</p>

            <Button onClick={StartQuiz} disabled={attempts === 0 || progress}>
                Start Quiz
            </Button>

            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
