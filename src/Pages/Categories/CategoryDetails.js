import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {details.length}

        </div>
    );
};

export default CategoryDetails;