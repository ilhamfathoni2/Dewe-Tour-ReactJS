import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button  className="btn-login" onClick={handleShow}>
            Login
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><b>Login</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">
                        Login
                    </Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Login;
