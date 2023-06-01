import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddBookModal = ({ show, handleClose, handleAddBook, selectedBook }) => {
    const [title, setTitle] = useState(selectedBook ? selectedBook.title : '');
    const [author, setAuthor] = useState(selectedBook ? selectedBook.author : '');
    const [page, setPage] = useState(selectedBook ? selectedBook.page : '');

    // console.log(selectedBook.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, author, page };
        handleAddBook(book);
        setTitle('');
        setAuthor('');
        setPage('');
    };

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{selectedBook ? 'Edit Book' : 'Add Book'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="page">
                <Form.Label>Page</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter page"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                required
                />
            </Form.Group>
            <Button variant="success" type="submit" className='my-3'>
                {selectedBook ? 'Save Changes' : 'Add Book'}
            </Button>
            </Form>
        </Modal.Body>
        </Modal>
    );
};

export default AddBookModal;
