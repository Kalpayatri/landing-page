export const startGetProperty=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/property')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(setProperty(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }
}

const setProperty=(data)=>{
    return{
        type:'SET_PROPERTY',
        payload:data
    }

}

export const startCreateProperty=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/property')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(addProperty(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const addProperty=(data)=>{
    return{
        type:'ADD_PROPERTY',
        payload:data
    }
}

export const startDeleteProperty=(_id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:3055/api/property/${_id}`,{
            method: 'DELETE'

        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(deleteProperty(data._id))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

}

const deleteProperty=(_id)=>{
    return{
        type:'DELETE_PROPERTY',
        payload:_id
    }

}