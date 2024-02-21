const Layout = ({children, className = ""}) => {
    return <div className={`mx-28 sm:mx-4 ${className}`}>
        {children}
    </div>
};

export default Layout;