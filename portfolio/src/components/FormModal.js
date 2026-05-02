import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function FormModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="form-modal-title"
            centered
        >
            <Modal.Body>
                <h4 id="form-modal-title">Message sent!</h4>
                <p>Thanks for reaching out — I'll get back to you as soon as I can.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
