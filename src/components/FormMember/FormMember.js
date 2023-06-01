import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddMemberModal = ({ show, handleClose, handleAddMember, selectedMember }) => {
    const [name, setName] = useState(selectedMember ? selectedMember.name : '');
    const [phone_number, setPhone_number] = useState(selectedMember ? selectedMember.phone_number : '');
    const [gender, setGender] = useState(selectedMember ? selectedMember.gender : '');

    // console.log(selectedMember.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        const member = { name, phone_number, gender };
        handleAddMember(member);
        setName('');
        setPhone_number('');
        setGender('');
    };

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{selectedMember ? 'Edit Member' : 'Add Member'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="phone_number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                />
            </Form.Group>
            <Button variant="success" type="submit" className='my-3'>
                {selectedMember ? 'Save Changes' : 'Add Member'}
            </Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
};

export default AddMemberModal;
