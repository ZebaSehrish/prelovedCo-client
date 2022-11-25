import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal/BookModal';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const { category_id } = useLoaderData();
    const [bookItem, setBookItem] = useState(null);
    const [categoryDetails, setCategoryDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categoryDetails?category_id=${category_id}`)
            .then(res => res.json())
            .then(data => setCategoryDetails(data))
    }, [category_id])


    return (
        <section>
            <div>
                {
                    categoryDetails.map(categoryDetail => <CategoryDetail
                        key={categoryDetail._id}
                        categoryDetail={categoryDetail}
                        setBookItem={setBookItem}
                    ></CategoryDetail>)
                }
            </div>
            {
                bookItem &&
                <BookModal
                    bookItem={bookItem}
                    setBookItem={setBookItem}
                ></BookModal>
            }
        </section >
    );
};

export default CategoryDetails;