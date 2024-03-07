// NewsPage.js

import React from "react";
import { newsData } from '../Data/NewsData';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  return (
    <div className="py-10">
      <div className='text-gray-500 py-5 mx-auto text-center'>
        <div className="text-5xl font-bold text-gray-500 underline decoration-green-500">News From Handball Club</div>
      </div>

      <div className="flex justify-between flex-wrap">
        {newsData.map((newsItem) => (
          <div key={newsItem.id} className="w-96 bg-white border border-gray-200 my-5">
            <div className="relative max-w-96 overflow-hidden bg-cover bg-no-repeat">
              <Link to={`/news/${newsItem.id}`}>
                <img
                  src={newsItem.img}
                  alt={newsItem.title}
                  className="w-96 max-w-96 h-52 transition duration-500 ease-in-out hover:transform hover:scale-110"
                />
              </Link>
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-500 underline decoration-green-500">
                <Link to={`/news/${newsItem.id}`} className="text-gray-500 hover:underline">
                  {newsItem.title}
                </Link>
              </h2>
              <p className="mb-3 font-normal text-gray-500">{newsItem.description}</p>
              <Link to={`/news/${newsItem.id}`} className="button text-lg py-2 px-4 border border-green-300 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
                <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold font-extrabold">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
