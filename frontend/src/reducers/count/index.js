import {SET_COUNT} from './actions';

const initialState =[1];
export default(state = initialState,action)=>{

    switch(action.type){
        case SET_COUNT:
            return action.count;
        default:
            return state;
    }

}