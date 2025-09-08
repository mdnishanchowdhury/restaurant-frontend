import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure';

function useAdmin() {
    const { users } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: [users?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${users.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin];
}

export default useAdmin