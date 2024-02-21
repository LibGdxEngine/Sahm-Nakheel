const Layout = ({children, className = ""}) => {
    return <div className={`mx-28 ${className}`}>
        {children}
    </div>
};

export default Layout;