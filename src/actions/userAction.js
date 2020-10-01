export const USER_UPDATE='USER_UPDATE';

export function userUpdate(newUser){
    return{
        type:'USER_UPDATE',
        payload:{
            user:newUser
        }
    }
}