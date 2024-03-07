import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../Data/NewsData'; 

const News = () => {
    const latestNews = newsData.slice(-3);

  return (
    <div id='news' className='py-10 border-t-4'>
      <div className='flex justify-between items-center'>
        <div className='text-5xl text-gray-500 font-semibold underline decoration-green-500'>News</div>
        <Link to='/news' className="button text-3xl p-4 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
          <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold">
            All News
          </span>
        </Link>
      </div>

      <div className='flex justify-between pt-5'>
        {latestNews.map((newsItem) => (
          <div key={newsItem.id} className="w-96 bg-white border border-gray-200">
            <div className="relative max-w-96 overflow-hidden bg-cover bg-no-repeat">
              <img
                src={newsItem.img}
                alt={newsItem.title}
                className="w-96 max-w-96 h-52 transition duration-500 ease-in-out hover:transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-500 underline decoration-green-500">{newsItem.title}</h2>
              <p className="mb-3 font-normal text-gray-500">{newsItem.description}</p>
                
              <button className="button text-lg py-2 px-4 border border-green-300 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
                <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <Link to={`/news/${newsItem.id}`} className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold font-extrabold">
                    Read More
                </Link>
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
