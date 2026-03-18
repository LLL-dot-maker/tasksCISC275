import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function UpdateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function AnswerCheck(): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control value={answer} onChange={UpdateAnswer} />
            <Button onClick={AnswerCheck}>Check Answer </Button>
            {AnswerCheck()}
        </div>
    );
}
