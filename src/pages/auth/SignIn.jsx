
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);
        setLoginError("");

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful.');
                navigate(location?.state ? location.state : '/');

                const user = { email, lastLoggedAt: result.user?.metadata?.lastSignInTime };
                fetch(`https://coffee-shop-server-sm.vercel.app/users`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount) {
                            // Swal.fire(
                            //     'Good job!',
                            //     'User updated successfully.',
                            //     'success'
                            // )
                            e.target.reset();
                            navigate("/");
                        }
                    });
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        setLoginError("");
        googleSignIn()
            .then(result => {
                toast.success('Login Successful.')
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-full md:w-1/4 lg:shadow-md mx-auto mt-16 p-4 md:p-12 rounded'>
            <Toaster />
            <form onSubmit={handleLogin} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                {
                    loginError && <p className='mt-4 font-medium text-rose-500'>{loginError}</p>
                }
                <div className="form-control my-6">
                    <button className="btn btn-block bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 hover:border-[#331A15]">Sign In</button>
                </div>
            </form>
            <h3>Don’t have an account? <Link className='font-semibold text-rose-500' to="/sign-up">Sign Up</Link></h3>
            <div className='flex items-center my-4'>
                <hr className='w-full border' />
                <h3 className='mx-2'>Or</h3>
                <hr className='w-full border' />
            </div>
            <button onClick={handleGoogleSignIn} className="btn w-full normal-case">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Continue with Google
            </button>
        </div>
    );
};

export default SignIn;