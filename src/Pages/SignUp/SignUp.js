import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
//import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, providerLogin, updateUser } = useContext(AuthContext);

    const [signUpError, setSignUPError] = useState('');
    // const [createdUserEmail, setCreatedEmail] = useState('');
    //const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleSignUp = data => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        //saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                //  navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }

    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // setCreatedEmail(email);

    //         })
    // }


    return (
        <div className='m-10 flex justify-center text-gray-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className='h-[800px] flex items-center justify-center lg:justify-end  '>
                    <div className='w-96 p-3'>
                        <h2 className='text-4xl text-center text-secondary'>Register </h2>
                        <p className='text-center font-thin'>Please fill in the information below:</p>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text" {...register("name", { required: 'name is required' })} placeholder="name" className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-400'>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="text" {...register("email", { required: 'email is required' })} placeholder="email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: 'password is required',
                                    minLength: { value: 6, message: 'Password must be 6 characters or long' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} placeholder="password" className="input input-bordered w-full" />
                                {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                            </div>
                            <div className="form-control w-full">

                                <div className='flex items-center p-2 '>
                                    <label className="label"><span className="label-text mr-2">Signing as</span></label>
                                    <input type="radio" name="radio-1" className="radio" defaultChecked />Customer
                                    <input type="radio" name="radio-1" className="radio ml-2" />Seller
                                </div>
                            </div>
                            <input type="submit" value='SIGN UP' className='btn btn-primary w-full mt-5 ' />
                            {signUpError && <p className='text-red-500'>{signUpError}</p>}

                            <div className="divider">OR</div>
                            <input onClick={handleGoogleSignIn} type="submit" value='Sign in With Google' className='btn btn-outline w-full mt-3 ' />
                        </form>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="divider lg:divider-horizontal"></div>
                    <h2 className='text-2xl font-medium '>Already a member?</h2>
                    <Link to='/login'><button className='btn btn-link '>Login Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;