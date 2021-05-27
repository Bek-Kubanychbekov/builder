
import classes from "./Auth.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth, start } from "../store/actions/auth";
const Auth = () => {
  
  const dispatch = useDispatch();
  const { token, error, loading } = useSelector(state => state.auth);
  const [method, setMethod] = useState("signin");

  const submitCallback = (event) => {
    event.preventDefault();

    dispatch(start());

    const data = new FormData(event.target);

    dispatch(auth(method, data.get('email'), data.get('password')));
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 style={{ color: "red" }}>{error}</h4>;
  }

  let redirectOutput = null;
  if (token) {
    redirectOutput = <Redirect to="/" />
  }

  return (
    <div className={classes.Auth}>
      <h1>Welcome</h1>
      {errorOutput}
      <form onSubmit={submitCallback} className={classes.input}>
        <div className={classes.heloo}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required /></div>
     

        <div className={classes.color}>
        <button onClick={() => setMethod("signin")} disabled={loading}>sign in</button>
        <button onClick={() => setMethod("signup")} disabled={loading}>sign up</button>
      </div></form>
      {redirectOutput}
    </div>
  );
}
 
export default Auth;