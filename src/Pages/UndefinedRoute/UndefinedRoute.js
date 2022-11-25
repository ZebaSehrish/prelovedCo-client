import React from 'react';
import { FaFrown } from 'react-icons/fa';
import { TbError404 } from 'react-icons/tb';
import { BsFileExcel } from 'react-icons/bs';

const UndefinedRoute = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <TbError404 size={70} />
                <BsFileExcel size={70} />
            </div>
            <p className='text-3xl font-bold uppercase'>page not found</p>
            <p className='text-3xl font-bold uppercase'>Page doesn't exist or an error occured</p>
        </div>
    );
};

export default UndefinedRoute;