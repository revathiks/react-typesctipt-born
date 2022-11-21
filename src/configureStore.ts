import rootReducer from './reducers';
import { createStore, applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;