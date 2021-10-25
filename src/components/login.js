import { useState, useContext } from 'react';
import { Form, Modal, Button} from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import DropdownProfile from './drop-profile';

function Login() {

    const { state, dispatch } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const loginHandle = (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        dispatch({
            type: "LOGIN",
            payload: {
                email,
                password,
            },
        });
        setShow(false)
    };


    return (
        <>
        {state.isLogin ? (
            <DropdownProfile />
        ) : (
            <Button  className="btn-login" onClick={handleShow}>
                Login
            </Button>
        )}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><b>Login</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={loginHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg" type="submit">
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
