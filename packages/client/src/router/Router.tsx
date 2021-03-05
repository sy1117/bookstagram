import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import { isLoggedInVar } from "../apollo/auth";
import { Header } from '@bookstagram/components';
import MainPage from '../pages/MainPage';
import { useReactiveVar } from '@apollo/client';

const Router = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    if (!isLoggedIn) {
        return <LoginPage />
    }
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="*" >
                    <MainPage />
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Router
