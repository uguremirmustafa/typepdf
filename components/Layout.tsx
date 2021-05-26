import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="grid">
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
