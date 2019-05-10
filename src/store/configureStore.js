import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import {mySaga} from "../reducers/saga"

const sagaMiddleWare = createSagaMiddleware();





  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)),);


  sagaMiddleWare.run(mySaga)


export  default  store;