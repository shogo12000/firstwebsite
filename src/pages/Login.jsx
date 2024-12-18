import { useState, useEffect } from "react";

function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [emailExist, setEmailExist] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [loadingPage, setLoadingPage] = useState(null);

  useEffect(() => {
    setEmail("");
    setUserPassword("");
    setUserPasswordConfirm("");
    setLoginError(false);
    setEmailExist(true);
    setLoadingPage(null);

    console.log(loadingPage);
  }, [login]);

  const loginUser = async () => {
    setLoadingPage("Checking User...");
    try {
      const response = await fetch(
        "https://firstwebsitebackendteste.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: userPassword }),
        }
      );

      if (!response.ok) {
        const errorMessage = `Error: ${response.status} - ${response.statusText}`;
        console.error(errorMessage);
        setLoginError(true);
        setLoadingPage(null);
        return;
      }

      const data = await response.json();
      setLoadingPage(null);
      console.log(data);
    } catch (error) {
      console.error("login Error: ", error.message);
    }
  };

  const registerUser = async () => {
    setLoadingPage("Register User...");
 

    try {
      const response = await fetch(
        "https://firstwebsitebackendteste.vercel.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: userPassword }),
        }
      );

      console.log(response);
      if (!response.ok) {
        setEmailExist(false);
        setLoadingPage(null);
        return
      }


    } catch (error) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
  };

  return (
    <div className="main">
      <section className="login">
        <div className="boxLogin"> 
            {loadingPage  && <div className="loading">{loadingPage}</div> }
            {login ? <h2>Login</h2> : <h2>Register</h2>}
            <div>
              {emailExist ? (
                <label htmlFor="email">Email</label>
              ) : (
                <label htmlFor="email" className="errorMessage">
                  Email already Exist
                </label>
              )}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                id="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            {!login && (
              <div>
                <label htmlFor="userPasswordConfirmation">Password</label>
                <input
                  type="password"
                  id="userPasswordConfirmation"
                  value={userPasswordConfirm}
                  onChange={(e) => setUserPasswordConfirm(e.target.value)}
                />
              </div>
            )}
            {loginError && (
              <p className="errorMessage">It is Invalid... try again!!!</p>
            )}
            {login ? (
              <button onClick={() => loginUser()}>Login</button>
            ) : (
              <button onClick={() => registerUser()}>Register</button>
            )}
            {login ? (
              <p onClick={() => setLogin(false)}>Register</p>
            ) : (
              <p onClick={() => setLogin(true)}>Login</p>
            )}
 
        </div>
      </section>
    </div>
  );
}

export default Login;
