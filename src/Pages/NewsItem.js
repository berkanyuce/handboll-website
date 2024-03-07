// NewsItem.js

import React from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../Data/NewsData";

const NewsItem = () => {
  const { id } = useParams();

  const selectedNews = newsData.find(news => news.id === parseInt(id));

  if (!selectedNews) {
    return <div>The new is not found.</div>;
  }

  const { title, article, img, author } = selectedNews;

  return (
    <>
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-500 underline decoration-green-500">{title}</h1>
      </div>

      <div
        className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8"
        style={{ backgroundImage: `url('${img}')`, height: '75vh' }}
      ></div>

      <div className="container max-w-5xl mx-auto -mt-64">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl text-gray-800 leading-normal">
            <p className="text-m mb-5">{article}</p>
            <p className="text-gray-600">{`Author: ${author}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
