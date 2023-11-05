import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js';
import store from './redux/store.js';

const btn = document.getElementById('btn');
const timesList = document.getElementById('timesList');
const clearBtn = document.getElementById('clear');

btn.addEventListener('click', () => 
store.dispatch(addCurrentTime())
)

clearBtn.addEventListener('click', () => 
store.dispatch(clearAllTimes())
)

store.subscribe(() => {
    const state = store.getState();
    timesList.innerHTML = state.map(time => `<li>${time}</li>`).join('');
})
// store.dispatch({type: 'ADD_CURRENT_TIME', payload: '10:00'});
// store.dispatch({type: 'ADD_CURRENT_TIME', payload: '11:00'});
// store.dispatch({type: 'CLEAR_ALL_TIMES'});