import React, {useEffect} from 'react'
import '../css/spinner.css'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import CalendarScreen from "../components/calendar/CalendarScreen"
import {LoginScreen} from "../components/auth/LoginScreen"
import {useDispatch, useSelector} from "react-redux"
import {startChecking} from "../actions/auth"
import {PublicRoute} from "./PublicRoute"
import {PrivateRoute} from "./PrivateRoute"

const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking, uid } = useSelector(state =>state.auth)

    useEffect(() =>{
        dispatch( startChecking() )
    },[dispatch])

    if( checking){
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="spinner"> </div>
            </div>
        )
    }
    return (
        <Router>
            <Switch>


                <PublicRoute
                    exact
                    path="/login"
                    component={LoginScreen}
                    isAuthenticated={ !!uid }
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={CalendarScreen}
                    isAuthenticated={ !!uid }
                />
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
