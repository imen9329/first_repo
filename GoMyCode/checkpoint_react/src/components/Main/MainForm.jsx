import React from "react";
import { Form, Button, img } from "react-bootstrap";
import "./MainForm.css";

function MainForm() {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <img
                src="https://i.etsystatic.com/19543939/r/il/698b60/2636146308/il_570xN.2636146308_g7y8.jpg"
                alt="Aqua Tofana Liquid"
            />
        </div>
    );
}

export default MainForm;
