import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
//import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);

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
                // toast('User Created Successfully.')
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
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-4xl text-center'>Register </h2>
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
                        <input type="submit" value='SIGN UP' className='btn w-full mt-5 ' />
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                        <p className='text-xs'>Already Have an Account? <Link to='/login' className='text-secondary'>Please Log in</Link></p>
                        <div className="divider">OR</div>
                        <input type="submit" value='Continue With Google' className='btn btn-outline w-full mt-3 ' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;