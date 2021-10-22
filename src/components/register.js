import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function Register() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

        <Button variant="warning" onClick={handleShow}>
            Register
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><b>Register</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">
                        Register
                    </Button>
                </div>
            </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Register;
