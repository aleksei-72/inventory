import * as userRoleList from "./userRoleList";
import store from "./store";


const isGranted = (role) => {
    let currentPrivilegeLevel = userRoleList.privilegeLevel[store.getState().authReducer.currentUser.role],
        requiredPrivilegeLevel = userRoleList.privilegeLevel[role]

        return currentPrivilegeLevel >= requiredPrivilegeLevel
}

export default isGranted