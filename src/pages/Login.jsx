import { useState, useEffect } from "react";

function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

  useEffect(() => {
    setEmail("");
    setUserPassword("");
    setUserPasswordConfirm("");
  }, [login]);

  const loginUser = async () => {
    console.log("login")
  };

  return (
    <div className="main">
      <section className="login">
        <div className="boxLogin">
          <>
            {login ? <h2>Login</h2> : <h2>Register</h2>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
            {login ? (
              <button onClick={() => loginUser()}>Login</button>
            ) : (
              <button>Register</button>
            )}
            {login ? (
              <p onClick={() => setLogin(false)}>Register</p>
            ) : (
              <p onClick={() => setLogin(true)}>Login</p>
            )}
          </>
        </div>
      </section>
    </div>
  );
}

export default Login;
