import './login.css';

export function Login() {
  return (
    <div className="login">
      <h1 className="login-title">LOGIN</h1>
      <form className="login-form" action="">
        <div className="login-field">
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="login-field">
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
      </form>
      <button className="login-button">Login</button>
    </div>
  );
}
