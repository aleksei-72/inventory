import store from "./store";
import {Redirect} from "react-router-dom";
import React from "react";
import {U_ADMIN} from "./userRoleList";

const route = (middlewares = [], routeToVisit, directedFrom = '', extra = {}) => {
    const mware = {
        isAuth: (routeToVisit, directedFrom) => isAuth(routeToVisit, ),
        isAdmin: (routeToVisit, directedFrom) => isAdmin(routeToVisit, ),
    }
    let mwareResult = null
    try {
        for (let i = 0; i < middlewares.length; i++) {
            mwareResult = mware[middlewares[i]](routeToVisit, directedFrom, extra)
            if (mwareResult.status === false) {
                break
            }
        }
        return mwareResult.routeObject
    } catch(e){
        //only for dev
        alert("Undefined name of middleware")
    }
    return true
}

const isAuth = (component, pathname = '/') => {

    return (store.getState().authReducer.isAuth === true
        ? _getRouteReturn(true, component)
        : _getRouteReturn(false,
            <Redirect to={{
                pathname: '/login'
            }} />))
}

const isAdmin = (component, pathname = '/') => {

    return (store.getState().authReducer.currentUser.role === U_ADMIN
        ? _getRouteReturn(true, component)
        : _getRouteReturn(false,
            <Redirect to={{
                pathname: '/'
            }} />))
}


function _getRouteReturn (status, routeObject) {
    return {'status': status, 'routeObject': routeObject}
}

export default route