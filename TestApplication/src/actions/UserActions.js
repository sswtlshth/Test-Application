import { TEST_SELECTED, USER_CHANGED } from "../constants/ActionTypes";

export function testSelected(test){
    return {
        type: TEST_SELECTED,
        test: test,
    }
}

export function changeUser(username){
    return {
        type: USER_CHANGED,
        username:username
    }
}
