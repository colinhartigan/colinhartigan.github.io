import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <p className="text-lg">
                looks like you've strayed a little too far off the beaten path  :(
            </p>
            <Link to="/home" className="w-32 h-auto border-2 border-black mt-4 p-2 text-center text-lg">
                home
            </Link>
        </div>
    )
}

export default NotFound;