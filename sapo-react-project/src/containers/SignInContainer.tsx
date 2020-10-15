import React, { useContext, useEffect } from 'react'
import SignIn from '../components/SignIn/SignIn'
import { actSignInRequest, actUpdateUser } from '../actions/index'
import history from '../history'
import { UserContext } from '../contexts/UserContext';

type Props = {

}

const SignInContainer = (props:Props) => {

    let { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        dispatch(actUpdateUser())
        console.log(users.username)
        if (users.username !== '' && users.username !== null && typeof users.username !== 'undefined') {
            history.push('/admin/categories')
        }
    }, [dispatch, users.username]);

    const onSignIn = (username:string, password:string) => {
        actSignInRequest(username, password)(dispatch);
        
    }

    return (
        <SignIn onSignIn={onSignIn} />
    );
}

export default SignInContainer;
