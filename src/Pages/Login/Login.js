import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);

            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });

    }

    return (
        <div className='m-10 flex justify-center text-gray-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="flex items-center justify-center">
                    <div className='grid grid-cols-1'>
                        <div>
                            <Link to='/signup'><button className='btn btn-primary w-full text-white'>Create an Account</button></Link>
                        </div>
                        <div>
                            <h2 className='font-thin'>...get 15% off on your first order!*</h2>
                        </div>
                    </div>
                    <div className="divider sm:divider-vertical lg:divider-horizontal"></div>
                </div>
                <div className='h-[800px] flex justify-center items-center'>
                    <div className=' p-3'>
                        <h2 className='text-3xl text-center'>Already have an account?</h2>
                        <p className='text-secondary font-thin'>Login</p>
                        <form onSubmit={handleSubmit(handleLogin)}>

                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="text" {...register("email", { required: 'email is required' })} placeholder="email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: 'password is required',
                                    minLength: { value: 6, message: 'Password must be 6 characters or long' }
                                })} placeholder="password" className="input input-bordered w-full" />
                                {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                            </div>
                            <Link to='/' className='text-xs'>Forget Password?</Link>
                            <p></p>
                            <input type="submit" value='LOGIN' className='btn w-full mt-5 btn-primary ' />
                            <div>
                                {loginError && <p>{loginError}</p>}
                            </div>
                            <p className='text-xs'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create a new Account</Link></p>
                            <div className="divider">OR</div>
                            <input type="submit" value='Continue With Google' className='btn btn-outline w-full mt-3 ' />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;