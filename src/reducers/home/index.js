import {ACTION_HOME} from '../actions';

const stateInitial = {
    // my state
    home: "home"
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case ACTION_HOME: 
                return "Home reducer"    
            default :
                return state
        }
}

export { HomeReducer };