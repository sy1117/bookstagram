import React from 'react';
import Header from '../organisms/Header/Header';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <div id="main_container" style={{ marginTop: "78px" }}>
                {children}
            </div>
        </>
    )
}
export default Layout;