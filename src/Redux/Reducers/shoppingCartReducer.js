const INITIAL_STATE = {
    dataShoppingCart:{}, 
}

export default (state = INITIAL_STATE, action )=>{ 
    switch (action.type){
        case 'add':
            state.dataShoppingCart[action.payload.key] = action.payload.value;
            return {...state};
        case 'pop':
            delete state.dataShoppingCart[action.payload.key]
            return {...state};
        default:
            return state;
    }
}