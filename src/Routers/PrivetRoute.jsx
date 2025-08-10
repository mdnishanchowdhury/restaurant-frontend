import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function PrivetRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center py-[400px]">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivetRoute