import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                name="Edit Mode"
                checked={editMode}
                onChange={(event) => {
                    setEditMode(event.target.checked);
                }}
            />

            {editMode ?
                <div>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        id="iStudentCheck"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => {
                            setIsStudent(!isStudent);
                        }}
                    ></Form.Check>
                </div>
            :   <span>
                    {isStudent ?
                        <p>{name} is a student</p>
                    :   <p>{name} is not a student</p>}
                </span>
            }
        </div>
    );
}
