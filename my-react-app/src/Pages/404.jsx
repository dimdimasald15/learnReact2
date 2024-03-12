import { useRouteError } from "react-router-dom";

function PageNotFound() {
    const error = useRouteError();
    return (
        <div className="flex justify-center bg-blue-300 min-h-screen items-center flex-col">
            <h1 className="font-bold text-3xl">Oops!</h1>
            <p className="text-xl my-5">Sorry, an unexpected error has occured</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    );
}

// export default PageNotFound;
export default PageNotFound;