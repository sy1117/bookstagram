import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import { isLoggedInVar } from "../apollo/auth";
import { Header } from '@bookstagram/components';
import MainPage from '../pages/MainPage';
import { useReactiveVar } from '@apollo/client';
import React from 'react';
import NewPostPage from '../pages/NewPostPage';
import ProfilePage from '../pages/ProfilePage';

const Router = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    if (!isLoggedIn) {
        return <LoginPage />
    }
    return (
        <BrowserRouter>
            <Header />
            <div id="main_container">
                <Switch>
                    <Route path="/new-post" >
                        <NewPostPage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/" >
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter >
    )
}

export default Router
