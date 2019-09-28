
import reducer from "./counter";
import compo1reducer from "./compo1Reducer";
import { combineReducers } from 'redux';

export default combineReducers({
    count: reducer,
    compo1reducer: compo1reducer

});
