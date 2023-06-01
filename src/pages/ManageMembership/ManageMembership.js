import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DynamicTable from '../../components/Tables/Tables';
import { Button } from 'react-bootstrap';
import AddMemberModal from '../../components/FormMember/FormMember';

const ManageMembership = () => {
    const columns = ['ID', 'Name', 'Phone Number', 'Gender', 'Create At', 'Update At'];
    const [members, setMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        getMembers();
    },[members])

    const getMembers = async () => {
        const response = await axios.get('http://localhost:8080/members');
        setMembers(response.data);
    }

    const handleEdit = (id) => {
        const member = members.find((member) => member.id === id);
        setSelectedMember(member);
        setShowModal(true);
    };
    
    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8080/members/${id}`);
            getMembers();
        } catch (e) {
            alert('Error deleting members');
        }
    };

    const handleSaveMember = async (member) => {
        try {
            if (selectedMember) {
              // Jika ada selectedMember, artinya kita sedang dalam mode edit
                await axios.patch(`http://localhost:8080/members/${selectedMember.id}`, member);
            } else {
              // Jika selectedMember tidak ada, artinya kita sedang dalam mode tambah buku baru
                await axios.post('http://localhost:8080/members', member);
            }
            setShowModal(false);
            setSelectedMember(null);
            getMembers();
        } catch (error) {
            console.log('Error saving member:', error);
        }
    }

    const handleAddMember = () => {
        setShowModal(true);
        setSelectedMember(null);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember(null);
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3 className="text-success">Manage Members</h3>
                <Button variant='success' onClick={handleAddMember}>
                    Add Member +
                </Button>
            </div>
            <DynamicTable
                columns={columns}
                data={members}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <AddMemberModal
                show={showModal}
                handleClose={handleCloseModal}
                handleAddMember={handleSaveMember}
                selectedMember={selectedMember}
            />
        </>
    )
}

export default ManageMembership;
