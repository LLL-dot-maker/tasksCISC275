import React from "react";
import "./App.css";
import dog from "./images/dog.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Leo Acord
            </p>
            <h1>Task3</h1>
            <div className="App-column">
                <Container style={{ background: "red" }}>
                    <Row>
                        <Col>
                            {" "}
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                        <Col>
                            {" "}
                            <ul>
                                <li>Here is a list</li>
                                <li>Thing 2</li>
                                <li>
                                    <img
                                        src={dog}
                                        alt="A picture of a dog, woof"
                                    />
                                </li>
                                <li>Thing 4</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
