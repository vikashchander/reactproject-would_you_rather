import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import store from '../store/store';



function PrivateRoute({ children, ...rest }) {
    let authData = store.getState().setAuthedUser;
    let isAuthenticated = authData;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}



export default PrivateRoute;