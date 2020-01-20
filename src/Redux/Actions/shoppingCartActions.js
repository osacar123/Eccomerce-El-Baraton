export  const addAction = (key,value) => (dispatch) => {
    dispatch({
        type: 'add',
        payload: {
            key:key,
            value:value
            
        }
    })
}

export  const popAction = (key) => (dispatch) => {
    dispatch({
        type: 'pop',
        payload: {
            key:key,                        
        }
    })
}