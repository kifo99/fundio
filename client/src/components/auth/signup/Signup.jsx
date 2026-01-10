import './signup.scss';

export function Signup() {
  function handleSignup() {
    console.log('Submitted');
  }
  return (
    <div className="signup">
      <form className="signup-container" action="post" onSubmit={handleSignup}>
        <h1 className="signup-title">Signup</h1>
        <div className="input-group">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="Your name"
            onChange={(e) =>
              setUserInput({ ...userInput, firstName: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            onChange={(e) =>
              setUserInput({ ...userInput, lastName: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            onChange={(e) =>
              setUserInput({ ...userInput, confirmPassword: e.target.value })
            }
          />
        </div>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}
