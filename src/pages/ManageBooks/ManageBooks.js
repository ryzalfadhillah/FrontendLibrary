import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DynamicTable from '../../components/Tables/Tables';
import { Button } from 'react-bootstrap';
import AddBookModal from '../../components/FormBook/FormBook';

const ManageBooks = () => {
    const columns = ['ID', 'Title', 'Author', 'Page', 'Create At', 'Update At'];
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        getBooks();
    },[books])

    const getBooks = async () => {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
    }

    const handleEdit = (id) => {
        const book = books.find((book) => book.id === id);
        setSelectedBook(book);
        setShowModal(true);
    };
    
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8080/books/${id}`);
            getBooks();
        } catch (e) {
            alert('Error deleting books');
        }
    };

    const handleSaveBook = async (book) => {
        try {
            if (selectedBook) {
              // Jika ada selectedBook, artinya kita sedang dalam mode edit
                await axios.patch(`http://localhost:8080/books/${selectedBook.id}`, book);
            } else {
              // Jika selectedBook tidak ada, artinya kita sedang dalam mode tambah buku baru
                await axios.post('http://localhost:8080/books', book);
            }
            setShowModal(false);
            setSelectedBook(null);
            getBooks();
        } catch (error) {
            console.log('Error saving book:', error);
        }
    }

    const handleAddBook = () => {
        setShowModal(true);
        setSelectedBook(null);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3 className="text-success">Manage Books</h3>
                <Button variant='success' onClick={handleAddBook}>
                    Add Book +
                </Button>
            </div>
            <DynamicTable
                columns={columns}
                data={books}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <AddBookModal
                show={showModal}
                handleClose={handleCloseModal}
                handleAddBook={handleSaveBook}
                selectedBook={selectedBook}
            />
        </>
    )
}

export default ManageBooks;
