import { CHANGE_ROUTE } from "../constants/ActionTypes";

export function routerChange(route){
    return{
        type: CHANGE_ROUTE,
        route
    }
 }