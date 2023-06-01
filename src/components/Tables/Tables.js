import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Loader from '../Spinner/Spinner';

const DynamicTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover className='my-3'>
        <thead>
            <tr>
            {columns.map((column, index) => (
                <th key={index}>{column}</th>
            ))}
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                data.length > 0 ?
                (data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((value, columnIndex) => (
                        <td key={columnIndex}>{value}</td>
                        ))}
                        <td>
                        <Button variant="primary" onClick={() => onEdit(row.id)}>
                            Edit
                        </Button>
                        <Button variant="danger" onClick={() => onDelete(row.id)}>
                            Delete
                        </Button>
                        </td>
                    </tr>
                ))) : 
                <tr>
                    <Loader />
                </tr>
            }
        </tbody>
        </Table>
    );
};

export default DynamicTable;
