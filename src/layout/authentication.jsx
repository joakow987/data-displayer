import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../authentication/login';
import Error from '../components/error';

const AuthenticationLayout = () => {
  const history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  useEffect(() => {
    if (isUserLogged) {
      history.push('/browser');
    }
  }, [history, isUserLogged]);

  return (
    <>
      {
        (isLoginFailed &&
          <Error
            title={'Login failed'}
            className="login-error"
          />)
      }
      < Login
        setIsUserLogged={setIsUserLogged}
        isUserLogged={isUserLogged}
        setIsLoginFailed={setIsLoginFailed}
      />
    </>
  );
};

export default AuthenticationLayout;
