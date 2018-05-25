import { createStore } from 'redux';
import { update } from '../poll/Poll';

export default function create() {
    const store = createStore(update, {});
    return store;
};


