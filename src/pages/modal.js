import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalList(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Show Detail
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflow: 'hidden'}}>
          <img src={props.img} alt="" className="w-100 h-100" />
          <p>
            {props.description}
          </p>
          <p>
            {props.content}
          </p>
          <p>Source: {props.source}</p>
          <Button variant="outline-primary" href={props.url} target="_blank" >Go to original site</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalList;