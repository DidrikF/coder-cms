import { createStore, bindActionCreators } from 'redux';


import { rootReducer } from './reducers';
import { setPageState } from './actions';


export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const boundPageActions = bindActionCreators({
    setPageState,
}, store.dispatch)