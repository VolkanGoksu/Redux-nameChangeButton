import {USER_UPDATE} from '../actions/userAction';

export default function userReducer (state='',action){
    switch(action.type){
		case USER_UPDATE:
			return action.payload.user;
		default:
			return state;
	}
   
}
