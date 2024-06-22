import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const placeholderImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_MbDA9bwqnUbtlloUNdlnLz7mw07xCgB3HBepS2ryDL8UsMjpKA862fVz4jF_r8ikrg&usqp=CAU';

const Home = ({ selects }) => {
  const [news, setNews] = useState([]);
  const APIKEY = '0edce586aa1e451a8911a71ca5514da8';
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${selects}&apiKey=${APIKEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selects]);

  const handleReadMore = (article) => {
    navigate(`/news/${encodeURIComponent(article.title)}`, { state: { article } });
  };

  return (
    <div className="container">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div className="card" key={index} onClick={() => handleReadMore(article)}>
            <div className="image">
              <img src={article.urlToImage || placeholderImageUrl} alt="" />
            </div>
            <div className="title">{article.title}</div>
            <div className="des">{article.description}</div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
