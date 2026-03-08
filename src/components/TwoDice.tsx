import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setleftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const gameOver: boolean = leftDie === rightDie;
    const snakeEyes: boolean = leftDie === rightDie && leftDie === 1;
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <br></br>
            <Button
                onClick={() => {
                    setleftDie(d6);
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6);
                }}
            >
                Roll Right
            </Button>
            <div>{gameOver && <span>{snakeEyes ? "Lose" : "Win"}</span>}</div>
        </div>
    );
}
