import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "indigo",
        "purple",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        label={color}
                        name="colors"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                    ></Form.Check>
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
