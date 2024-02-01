import React from 'react';
import AdminSignup from './AdminSignup';
import AdminLogin from './AdminLogin';
import VendorLogin from './VendorLogin';
import React, { useState } from 'react';
import UserSignup from './UserSignup';
import VendorPage from './VendorPage';

const App = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminSignup />
    </div>
  );
};

export default App;