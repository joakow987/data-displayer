import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/button';
import './header.css';
import { RiVirusFill } from 'react-icons/ri';
import Avatar from '../img/avatar.png';

const BrowserHeader = ({ user }) => {
  const history = useHistory();
  const [isUserLogout, setIsUserLogout] = useState(false);

  useEffect(() => {
    if (isUserLogout) history.push('/');
  }, [history, isUserLogout]);

  return (
    <>
      <header className="data-view-header">
        <div className="title-section">
          <RiVirusFill />
          <span>COVID data</span>
        </div>
        <div className="action-section">
          <div className="avatar-section">
            <img src={Avatar} alt="Avatar icon" className="avatar-icon" />
            <span>{user}</span>
          </div>
          <Button
            title={'Log out'}
            action={() => setIsUserLogout(true)}
          />
        </div>
      </header>
      <hr className="bottom-line" />
    </>
  );
};

BrowserHeader.propTypes = { user: PropTypes.string };

BrowserHeader.defaultProps = { user: 'No user' };

export default BrowserHeader;
