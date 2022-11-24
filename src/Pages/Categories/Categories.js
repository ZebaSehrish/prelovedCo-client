import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    // const [categories, setCategories] = useState([]);
    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className='m-10'>
                <p className='text-md text-center text-primary font-medium'> Buy from us</p>
                <h2 className="text-center text-4xl font-bold text-secondary">Categories We offer</h2>
            </div>
            <div className='grid gap-2 m-20 grid-cols-1 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                        key={category.category_id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;