const ServerError = ({message}) => {
    console.log(message)
    return <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <h1 className="text-red-500">{message}</h1>
    </div>
};

export default ServerError;