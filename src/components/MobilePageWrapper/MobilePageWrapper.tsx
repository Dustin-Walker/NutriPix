import Header from "../Header/Header";
import "./MobilePageWrapper.scss"
import React from "react";
import Footer from "../Footer/Footer.tsx";

interface MobilePageWrapperProps {
    children: React.ReactNode,
    omitFooter?: boolean,
}

const MobilePageWrapper = (
    {children, omitFooter}: MobilePageWrapperProps
) => (
    <div className="mobile-page-wrapper">
        <Header />
        {children}
        {!omitFooter && <Footer />}
    </div>
);

export default MobilePageWrapper;
