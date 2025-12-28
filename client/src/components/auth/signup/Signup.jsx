import './signup.css';

export function Signup() {
  return (
    <div className="signup">
      <h1 className="signup-title">Signup</h1>
      <form className="signup-form" action="post">
        <div className="signup-field">
          <input
            className="signup-input"
            type="text"
            name="firstName"
            placeholder="First name"
          />
        </div>
        <div className="signup-field">
          <input
            className="signup-input"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="signup-field">
          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="signup-field">
          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="signup-field">
          <input
            className="signup-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
}
