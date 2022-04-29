
const initialState = {
    characters: [],
    detail: {}
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_ALL_CHARACTERS":
            return{
                ...state,
                characters: action.payload
            }
        case "CREATE_CHARACTER":
            return{
                ...state,
                characters: state.characters.concat(action.payload)
            }
        case "DELETE_CHARACTER":
            return{
                ...state,
                characters: state.characters.filter( c => c.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer