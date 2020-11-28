
export const addNote = note =>{
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}

export const deleteNote = meta =>{
    return {
        type: 'DELETE_NOTE',
        payload: meta
    }
}

export const editNote = (header, updateNote) =>{
    return {
        type: 'EDIT_NOTE',
        header: header,
        updateNote: updateNote
    }
}