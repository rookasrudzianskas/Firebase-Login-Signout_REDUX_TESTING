import React from 'react';
import './App.css';
import {auth, provider} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, selectUserName, setActiveUser, setUserLogOutState} from "./features/userSlice";
import Button from '@material-ui/core/Button';


function App() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const handleSignOut = () => {
        // this is sign out
        auth.signOut().then(() => {
            dispatch(setUserLogOutState())
        }).catch((err) => alert(err.message));
    }

    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setActiveUser({
                username: result.user.displayName,
                userEmail: result.user.email,
            }))
        })
    }

  return (
    <div className="app">
      <h1>Hello world! ๐, Let's build the firebase login ๐ค</h1>

        {
            userName ? (
                <Button onClick={handleSignOut}>Sign Out ๐คน</Button>
            ) : (
                <Button onClick={handleSignIn}>Sign In ๐ณโ</Button>
            )
        }
    </div>
  );
}

export default App;
