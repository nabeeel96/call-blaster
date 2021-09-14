import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Login from "../Pages/Login";
import {Layout, Menu, PageHeader} from "antd";

import {useEffect, useState} from "react";
import { capitalize } from "lodash"
import { useSelector } from "react-redux";
import Dashboard from "../Pages/Dashboard";
import LaunchCampaign from "../Campaign/LaunchCampaign";
import RejectDeliveryCampaignList from "../Pages/RejectDeliveryCampaignList";


const { Content } = Layout

const ContentComponent = () => {

    const location = useLocation()
    const [pathname, setPathname] = useState('Dashboard')

    useEffect(() => {
        setPathname(capitalize(location.pathname.replace("/", '')))
    }, [location])
 
    return(
        <Content style={{  background: 'transparent' }}>
            <Switch>
                <Route exact path="/sign-in" component={Login} />
                <PrivateRoute exact path="/">
                    <Dashboard /> 
                </PrivateRoute>
                <PrivateRoute exact path="/launch-campaign">
                    <LaunchCampaign /> 
                </PrivateRoute>
                <PrivateRoute exact path="/reject-delivery-campaign">
                    <RejectDeliveryCampaignList /> 
                </PrivateRoute>
            </Switch>
        </Content>
    )
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {

    const user = useSelector(state => state.User)
    const [path] = useState("/sign-in")
    return (
        <Route
            {...rest}
            render={({location}) =>
                user.loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: path,
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default ContentComponent