import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "New Year"
    | "St. Patricks"
    | "Thanksgiving";

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    "New Year": "🥳",
    "St. Patricks": "☘️",
    Thanksgiving: "🦃",
};
const alphabeticalOrder: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "New Year",
    "New Year": "St. Patricks",
    "St. Patricks": "Thanksgiving",
    Thanksgiving: "Christmas",
};

const dateOrder: Record<Holiday, Holiday> = {
    "New Year": "St. Patricks",
    "St. Patricks": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Year",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Year");

    return (
        <div>
            <div>Holiday: {holidayEmojis[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(alphabeticalOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(dateOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
