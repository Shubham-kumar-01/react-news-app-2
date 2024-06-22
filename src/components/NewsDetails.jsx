import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsDetails.css';

const placeholderImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_MbDA9bwqnUbtlloUNdlnLz7mw07xCgB3HBepS2ryDL8UsMjpKA862fVz4jF_r8ikrg&usqp=CAU';

const NewsDetails = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="cont">
      <div className="titlee">{article.title}</div>
      <div className="imageee">
        <img src={article.urlToImage || placeholderImageUrl} alt="" />
      </div>
      <div className="description">{article.content || article.description}</div>
    </div>
  );
};

export default NewsDetails;
