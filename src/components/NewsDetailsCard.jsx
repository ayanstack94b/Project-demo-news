import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[500px] object-cover' src={news.image_url} alt="" srcset="" />
            <h2 className="text-2xl">{news.title}</h2>
            <p className="">
                {news.details}
            </p>

            {/* button route */}

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;