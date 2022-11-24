import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal/BookModal';
import CategoryDetail from './CategoryDetail';

const CategoryDetails = () => {
    const { bookItem, setBookItem } = useState(null);
    const { category_id } = useLoaderData();

    return (
        <section>
            <div>
                {/* {
                    categoryDetails.map(categoryDetail => <CategoryDetail
                        key={categoryDetail._id}
                        categoryDetail={categoryDetail}
                        setBookItem={setBookItem}
                    ></CategoryDetail>)
                } */}
            </div>
            {
                <BookModal
                    bookItem={bookItem}
                ></BookModal>
            }
        </section >
    );
};

export default CategoryDetails;