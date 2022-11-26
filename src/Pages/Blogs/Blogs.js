import React from 'react';
import bg from '../../assets/home-images/bg.jpg';

const Blogs = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${bg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content" >
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold" style={{ 'font-family': 'cursive' }}>Our Blog</h1>
                    <p className="mb-5">Catch Our Latest Blogs on technology and Libraries</p>
                    <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 '>
                        <div className="card bg-base-100 rounded-sm shadow-xl">
                            <div className="card-body">
                                <h2 className='text-xl font-serif text-gray-600'>What are the different ways to manage a state in a react application?</h2>
                                <p className='text-md text-gray-600 font-thin' >There are four main types of state needed to properly manage in the React apps:

                                    <br /> Local state
                                    <br /> Global state
                                    <br /> Server state
                                    URL state</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 rounded-sm shadow-xl">
                            <div className="card-body">
                                <h2 className='text-xl font-serif text-gray-600'>How does prototypical inheritance work?</h2>
                                <p className='text-md text-gray-600 font-thin' >The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 rounded-sm shadow-xl">
                            <div className="card-body">
                                <h2 className='text-xl font-serif text-gray-600'>What is a unit test? why should write unit tests?</h2>
                                <p className='text-md text-gray-600 font-thin' >Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 rounded-sm shadow-xl">
                            <div className="card-body">
                                <h2 className='text-xl font-serif text-gray-600'>State react vs angular vs vue?</h2>
                                <p className='text-md text-gray-600 font-thin' ></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;