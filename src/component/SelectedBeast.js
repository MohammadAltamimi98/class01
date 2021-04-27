import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
    render() {

        return (
          <Modal show={this.props.show}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
    
            <Modal.Body style={{ display: "grid", placeItems: "center"}}>
              <img src={this.props.imageUrl} alt="" style={{ width: "100%", height: "auto" }} />
              <p>{this.props.description}</p>
            </Modal.Body>

            <Modal.Footer>
          <Button onClick={this.props.onClose} variant="info">Close</Button>
           </Modal.Footer>
          </Modal.Dialog>
      </Modal>
      );
      }
}

export default SelectedBeast;