import { useContext, useEffect } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/icon/RegImage.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

function SignUp() {
    const { createUser, updatedProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(() => {

                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('users', userInfo)
                    .then(res => {
                        console.log('resss', res.data)
                        if (res.data.insertedId) {
                            updatedProfile(data.name, data.PhotoURl)
                                .then(() => {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "successfully SignUp",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                })
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
    };



    useEffect(() => {
        document.title = 'Restaurant | SignUp Form';
    }, []);
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-16 md:gap-[204px]">

                {/* Login Card */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-4xl font-bold text-center'>SignUp</h2>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">Name</label>
                            <input name="name" {...register("name",)} type="text" className="input input-bordered w-full" placeholder="Name" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        {/* Photo URl */}
                        <div className="form-control">
                            <label className="label">Photo URl</label>
                            <input {...register("PhotoURl",)} type="text" className="input input-bordered w-full" placeholder="Photo URl" />
                            {errors.PhotoURl && <span className='text-red-600'>Name is required</span>}
                        </div>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">Email</label>
                            <input name="email" {...register("email", { required: true })} type="email" className="input input-bordered w-full" placeholder="Email" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/ })} name="password" className="input input-bordered w-full" placeholder="Password" />
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>password must be 6 characters </span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>password must be less then 20 characters </span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>password must have one upper case, one lower case & one number, </span>}
                        </div>
                        {/* btn */}
                        <div className="form-control">
                            <input className="btn btn-neutral bg-[#D1A054] w-full mt-4" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    
                     <h2 className='font-semibold text-center mb-2 text-[#D1A054]'><span className='font-normal'>Already registered? </span> <Link to='/login'> Go to log in</Link></h2>
                    <SocialLogin></SocialLogin>
                </div>

                {/* image */}
                <div className="text-center lg:text-left max-w-md">
                    <img src={img} alt="" />
                </div>


            </div>
        </div>
    )
}

export default SignUp;