const initialState = [];
function reducer(state, action) {
    switch(action.type) {
        case 'ADD_NAME':
            return [...state, action.payload];
        case 'REMOVE_NAME':
            return state.filter(name => name !== action.payload);
        case 'RESET':
            return [];
        default:
            return state;
    }


    // if(action.type === 'ADD_NAME') {
    //     return [...state, action.payload];
    // }
    // if(action.type === 'REMOVE_NAME') {
    //     return state.filter(name => name !== action.payload);
    // }
    // if(action.type === 'RESET') {
    //     return [];
    // }
    // return state;
}
let newState = reducer(initialState, {type: 'ADD_NAME', payload: 'Bob'});
console.log(newState);
newState = reducer(newState, {type: 'ADD_NAME', payload: 'Sue'});
console.log(newState);
newState = reducer(newState, {type: 'REMOVE_NAME', payload: 'Bob'});
console.log(newState);
newState = reducer(newState, {type: 'RESET'});
console.log(newState);
newState = reducer(newState, {type: 'ADD_NAME', payload: 'Nick'});
console.log(newState);
