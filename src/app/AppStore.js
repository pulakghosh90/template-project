import { createStore } from 'redux';
import { update } from '../poll/Poll';

export default function create() {
    const store = createStore(update, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};


