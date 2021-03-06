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
            const data = state.dataShoppingCart
            return {...state, dataShoppingCart:data};
        default:
            return state;
    }
}