import React, { useEffect, useState } from 'react';
import BrowserHeader from '../browser/header';
import BrowserPage from '../browser/browser-page';

const BrowserLayout = () => {
  //TODO pass user
  const [user, setUser] = useState('');

  useEffect(() => {
    // TODO: checkSession
  });
  return (
    <>
      <BrowserHeader user={user} />
      <BrowserPage />
    </>
  );
};

export default BrowserLayout;
