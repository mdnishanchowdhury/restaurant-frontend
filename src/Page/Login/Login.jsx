import { useContext } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/icon/RegImage.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

function Login() {
    const { userSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        userSignIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    icon: "success",
                    draggable: true
                });
            })
    };
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    useEffect(() => {
        document.title = 'Restaurant | Login Form';
    }, []);

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-16 md:gap-[204px]">

                {/* Login Card */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-4xl font-bold text-center'>Login</h2>
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        <div className="form-control">
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type='text' name="captcha" className="input input-bordered w-full" placeholder="type here" required />
                        </div>

                        <div className="form-control">
                            <input className="btn btn-neutral bg-[#D1A054] w-full mt-4" type="submit" value="Login" />
                        </div>
                    </form>
                    <h2 className='font-semibold text-center mb-2 text-[#D1A054]'><span className='font-normal'>New here? </span> <Link to='/signUp'>Create a New Account</Link></h2>
                    <SocialLogin></SocialLogin>
                </div>

                {/* Text Section */}
                <div className="text-center lg:text-left max-w-md">
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Login;
