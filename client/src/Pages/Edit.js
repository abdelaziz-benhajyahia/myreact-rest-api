import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { editContact, getContact } from '../JS/Actions/contact'

const Edit = () => {
    const dispatch = useDispatch()
    const [newContact, setNewContact] = useState({})
    const contactToGet = useSelector(state => state.contactReducer.contactToGet)
    const match = useMatch('/edit/:id')
    const navigate = useNavigate()
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        dispatch(getContact(match.params.id, newContact))
    })

    const handleEdit = () => {
        dispatch(editContact(match.params.id, newContact))
        navigate(-1)
    }

    return (
        <div>
            <div className='add'>
                <h1>Edit contact</h1>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder={`${contactToGet.name}`} value={newContact.name} onChange={handleChange}/>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder={`${contactToGet.email}`} value={newContact.eamil} onChange={handleChange}/>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" name="phone" placeholder={`${contactToGet.phone}`} value={newContact.phone} onChange={handleChange}/>
                <Button className='bouton' variant="primary" type="submit" onClick={handleEdit}>Edit Contact</Button>
            </div>
        </div>
    )
}

export default Edit