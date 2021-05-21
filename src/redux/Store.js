import laptopreducer from "./reducers/laptopreducer";
import {combineReducers,createStore,applyMiddleware,compose} from "redux";
import mobilereducer from "./reducers/mobilereducer";
import usersReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  laptops: laptopreducer,
  mobiles: mobilereducer,
  users: usersReducer,
})


const store = createStore(rootReducer,compose(applyMiddleware(thunk,logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;