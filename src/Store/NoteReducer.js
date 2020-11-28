
const  initialState ={

    cardDetails : [
        {
            header: 'Project Report - April',
            description:
              'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
            meta: 'ROI: 30%',
          },
          {
            header: 'Project Report - May',
            description:
              'Bring to the table win-win survival strategies to ensure proactive domination.',
            meta: 'ROI: 34%',
          },
          {
            header: 'Project Report - June',
            description:
              'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
            meta: 'ROI: 27%',
          },
]
}




const NoteReducer = (state=initialState,action) => {

    switch(action.type) {
        case 'ADD_NOTE': 
            const note = {
                header: action.payload.header,
                meta: action.payload.meta,
                description: action.payload.description
            }
            return {...state, cardDetails: [...state.cardDetails, note]}

        case 'DELETE_NOTE':
            const newList = state.cardDetails.filter(item => item.meta !== action.payload)
            return {...state, cardDetails: newList }
        
        case 'EDIT_NOTE':
            const updateList = state.cardDetails.map(update =>{if (update.header === action.header){ return action.updateNote} else return update })
            return {...state, cardDetails: updateList}
        
        default:
            return state 


    }

}

export default NoteReducer;