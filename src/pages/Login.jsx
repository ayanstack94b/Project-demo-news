import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handlelLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location.state : "/"}`)
            }).catch(err => {
                const errorMsg = err.message;
                setError(errorMsg)
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handlelLogin} className="card-body">
                    <fieldset className="fieldset">

                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>
{error && <p className='text-red text-sm'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className="font-semibold text-center pt-4">Don't Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>
                    </fieldset>
                </form>
            </div>

        </div >
    );
};

export default Login;