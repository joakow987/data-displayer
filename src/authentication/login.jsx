import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RiLockPasswordLine } from 'react-icons/ri';
import Input from '../components/input';
import Button from '../components/button';
import './login.css';

const Login = ({ setIsUserLogged, setIsLoginFailed }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userStore = {
    'a': { password: 'passa' },
    'b': { password: 'passb' }
  };

  const authenticate = (username, password) => {
    if (password === userStore[username]?.password) {
      setIsLoginFailed(false);
      setIsUserLogged(true);
    } else {
      setIsLoginFailed(true);
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    authenticate(username, password);
  };

  useEffect(() => {
    setIsLoginFailed(false);
  }, [setIsLoginFailed]);

  return (
    <div className="login-container">
      <section>
        <RiLockPasswordLine className="icon" />
        <span>Log in</span>
      </section>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <Input title="Username" type="text" value={username} handleChange={setUsername}
        />
        <Input title="Password" type="password" value={password} handleChange={setPassword}
        />
        <Button type="submit" title="Log in" className="full-width" />
      </form>
    </div>
  );
};

Login.propTypes = {
  setIsUserLogged: PropTypes.func,
  set: PropTypes.func,
};

Login.defaultProps = {
  setIsUserLogged: () => { },
  setIsLoginFailed: () => { },
};

export default Login;
