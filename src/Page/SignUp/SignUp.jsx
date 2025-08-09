import { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import img from '../../assets/icon/RegImage.png'
import { Link } from 'react-router-dom';
function SignUp() {
    const { createUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-16 md:gap-[204px]">

                {/* Login Card */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-4xl font-bold text-center'>SignUp</h2>
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">Email</label>
                            <input name="name" type="text" className="input input-bordered w-full" placeholder="Email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>

                        <div className="form-control">
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />
                        </div>

                        <div className="form-control">
                            <input className="btn btn-neutral w-full mt-4" type="submit" value="Login" />
                        </div>
                    </form>
                      <p className='text-center pb-4 text-xs font-medium'><samp>Already registered?<Link to='/login'>Go to log in</Link></samp></p>
                </div>

                {/* Text Section */}
                <div className="text-center lg:text-left max-w-md">
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    )
}

export default SignUp;