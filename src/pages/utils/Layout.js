const Layout = ({children, className = ""}) => {
    return <div className={`px-[10%]  sm:mx-4 ${className}`}>
        {children}
    </div>
};

export default Layout;