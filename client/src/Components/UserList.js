import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getContacts } from '../JS/Actions/contact'
import UserCard from './UserCard'
const UserList = () => {
    const listContacts = useSelector(state => state.contactReducer.listContacts)
    const load = useSelector(state => state.contactReducer.load)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getContacts())
    }, [dispatch])
    

    return (
        <div>
            {load ? <h2>Loading .!.</h2> : listContacts.map((el) => <UserCard contact={el} key={el._id}/>)}
        </div>
    )
}

export default UserList