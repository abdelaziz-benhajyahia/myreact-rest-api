// importation
import {FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS} from '../ActionsTypes/contact'

// initial State
const initialState = {
    listContacts: [],
    errors: null,
    load: false,
    contactToGet: {}
}

// Pure function
const contactReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_CONTACTS:     return {...state, load: true}
        case GET_CONTACTS:      return {...state, load: false, listContacts: payload.listContacts}
        case GET_CONTACT:       return {...state, load: false, contactToGet: payload.contactToGet}
        case FAIL_CONTACTS:     return {...state, load: false, errors: payload}
        default:
            return state;
    }
}

// export
export default contactReducer