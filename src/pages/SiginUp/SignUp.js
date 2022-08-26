import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './SignUp.scss';
import { useState, useEffect } from 'react';

function SignUp({ user, setUser }) {
  const history = useHistory();
  const [userSignUpInput, setUserSignUpInput] = useState({
    user: '',
    email: '',
    password: '',
  });
  const [userSignInInput, setUserSignInInput] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  function signInHandle(event) {
    event.preventDefault();
    let signInInformation = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post('http://localhost:8080/signin', signInInformation)
      .then((response) => {
        if (response.status === 200)
          sessionStorage.authToken = response.data.token;

        setUser(response.data.user);
        history.push('/');
      });
  }
  const signUpHandle = (event) => {
    event.preventDefault();
    let signUpInformation = {
      userName: event.target.user.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post('http://localhost:8080/register', signUpInformation)
      .then((response) => {
        if (response.status === 200)
          sessionStorage.authToken = response.data.token;
        setUser(response.data.user);
        history.push('/');
      });
  };

  const signUpChangeHandle = (event) => {
    setUserSignUpInput({
      ...userSignUpInput,
      [event.target.name]: event.target.value,
    });
  };
  const signInChangeHandle = (event) => {
    setUserSignInInput({
      ...userSignInInput,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="sign-up">
      <input
        className="sigin-up__input "
        type="checkbox"
        id="chk"
        aria-hidden="true"
      />

      <div className="signup">
        <form onSubmit={signUpHandle} onChange={signUpChangeHandle}>
          <label className="sign-up__lable" htmlFor="chk" aria-hidden="true">
            Sign Up
          </label>
          <div className="sigin-up__input-container">
            <input
              // className={
              //   userSignUpInput.user
              //     ? 'sigin-up__input'
              //     : 'sigin-up__input sigin-up__input--error'
              // }
              className="sigin-up__input"
              type="user-name"
              name="user"
              placeholder="User name"
              required=""
            />
          </div>
          <input
            className="sigin-up__input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="sigin-up__input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button type="submit" className="sign-up__button">
            Sign Up
          </button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={signInHandle} onChange={signInChangeHandle}>
          <label
            className="sign-up__lable login__label"
            htmlFor="chk"
            aria-hidden="true"
          >
            Sign In
          </label>
          <input
            className="sigin-up__input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="sigin-up__input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button type="submit" className="sign-up__button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
