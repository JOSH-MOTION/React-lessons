import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






function UserItem({newPeople}) {
  return (
    <div>
      <h1>{newPeople.name}</h1>
      <h1>{newPeople.email}</h1>


<button variant="primary">edit</button>
<button variant="danger">delete</button>


<Modal >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default UserItem