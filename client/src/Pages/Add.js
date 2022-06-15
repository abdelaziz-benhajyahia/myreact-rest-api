import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../JS/Actions/contact'
import { Link } from 'react-router-dom'

const Add = () => {
    const [newContact, setNewContact] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }
    const add = () => {
        dispatch(addContact(newContact))
    }
    return (
        <div>
            <div className='add'>
                <h1>Add new contact</h1>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" value={newContact.name} onChange={handleChange}/>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={newContact.eamil} onChange={handleChange}/>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" name="phone" placeholder="Enter phone number" value={newContact.phone} onChange={handleChange}/>
                <Link to='/users'><Button className='bouton' variant="primary" type="submit" onClick={() => add()}>Add contact</Button></Link>
            </div>
        </div>
    )
}

export default Add