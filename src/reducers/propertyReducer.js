const propertyInitialState=[]

const propertyReducer=(state=propertyInitialState,action)=>{
    switch(action.type){
        case 'SET_PROPERTY': {
            return [...action.payload]
        }
        case 'ADD_PROPERTY':{
            return [...state,{...action.payload}]
        }
        case 'EDIT_PROPERTY': {
            return state.map()
        }
        case 'DELETE_PROPERTY':{
            return state.filter(ele=>ele.id !== action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default propertyReducer