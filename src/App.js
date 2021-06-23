import React from 'react';
import './App.css';
import {auth, provider} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, selectUserName} from "./features/userSlice";


function App() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);

    const handleSignOut = () => {

    }

    const handleSignIn = () => {

    }

  return (
    <div className="app">
      <h1>Hello world! 🚀, Let's build the firebase login 🤟</h1>

        {
            userName ? (
                <button onClick={handleSignOut}>Sign Out 🤹</button>
            ) : (
                <button onClick={handleSignIn}>Sign In 👳‍</button>
            )
        }
    </div>
  );
}

export default App;
