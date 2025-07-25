import {v4 as uuid} from 'uuid';

export const notesReducer = (state, {type,payload}) => {
    switch(type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, {id: uuid(), title: state.title, text: state.text, isPinned: false, isArchived: false, isDeleted: false}]
            }
        case 'CLEAR':
            return {
                ...state,
                title: '',
                text: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload ? {...note, isPinned: !note.isPinned} : note)
            }
        case 'ARCHIVE':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload ? {...note, isArchived: !note.isArchived} : note)
            }
        case 'DELETE':
            const notesDeleted = state.notes.find(note => note.id === payload);
            
            return {
                ...state,    
                deletedNotes: [...state.deletedNotes, {...notesDeleted, isDeleted: true}],
                notes: state.notes.filter(note => note.id !== payload)
            }
        case 'REMOVE FROM BIN':
            return {
                ...state,
                deletedNotes: state.deletedNotes.filter(note => note.id !== payload)
            }
        default: 
           return state;

    }
}