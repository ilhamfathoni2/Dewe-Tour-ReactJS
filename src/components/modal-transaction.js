import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import searchIcon from '../srassets/search1.png'
import PayTransaction from './pay-transaction';

function ModalTransaction() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <div onClick={() => setLgShow(true)}>
                <img src={searchIcon} alt="icon" />
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
            </Modal.Header>
                <Modal.Body>
                    <PayTransaction />
                    <div className="d-flex justify-content-end">
                        <button className="btn-dangers">Cancel</button>
                        <button className="btn-successt">Aprove</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalTransaction;
