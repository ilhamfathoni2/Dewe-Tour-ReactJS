import { useState, useContext } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';

function Register() {

    const { state, dispatch } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRegister = (e) => {
        e.preventDefault()
        
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const phone = document.getElementById('phone').value
  
        dispatch({
            type: "REGISTER",
            payload: {
                email,
                password,
                name,
                phone,
            },
        });
        setShow(false)
    }

    return (
        <>
        {state.isLogin ? (
            <Button className="btn-regis" hidden>
                Register
            </Button>
        ) : (
            <Button className="btn-regis" onClick={handleShow}>
                Register
            </Button>
        )}


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><b>Register</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" id="name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" id="phone" />
                </Form.Group>
                
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg" type="submit">
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
