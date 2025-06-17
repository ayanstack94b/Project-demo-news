import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { creatUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");

    const navigate= useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        if (name.length <= 5) {
            setNameError("Name should be more then 5 characters")
            return;
        }
        else {
            setNameError('')
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, password, email });

        creatUser(email, password)
            .then((res) => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({...user, displayName: name, photoURL: photo})
                     navigate('/')   
                }).catch((error) => {
                    console.log(error);
                    setUser(user)
                })
            }).catch(error => {
                const errorMsg = error.message;
                alert(errorMsg)
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>

                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text"
                            name='name'
                            className="input"
                            placeholder="Name"
                            required />
                        {nameError && <p className='text-xs text-error'>{nameError}</p>}

                        {/* Photo URL */}

                        <label className="label">Photo URL</label>
                        <input type="text"
                            name='photo'
                            className="input"
                            placeholder="Photo URL"
                        />

                        {/* Email */}

                        <label className="label">Email</label>
                        <input type="text"
                            name='email'
                            className="input"
                            placeholder="Name"
                            required />

                        {/* Password */}

                        <label className="label">Password</label>
                        <input type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required />

                        <div>
                            <a className="link link-hover"></a>
                        </div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className="font-semibold text-center pt-4">Already Have An Account ?
                            <Link to="/auth/login" className="text-secondary">Login</Link></p>

                    </fieldset>
                </form>
            </div>

        </div >
    );
};

export default Register;