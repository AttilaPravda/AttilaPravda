import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";
import noImage from "../../assets/no-image.jpg"

import {getRandomInt} from '../../api/api'

function ResultSlider({ stateList, stateGenre, stateYear }) {
  const [random] = useState(getRandomInt(stateList.length))

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="wrapper">
      <div className="recomended">
        <div className="description-wrapper">
          <div className="description">
            <img
              src={
                stateList[random].poster_path
                  ? `https://image.tmdb.org/t/p/w200${stateList[state].poster_path}`
                  : noImage
              }
              alt={stateList[random].title}
              onError={e => (e.target.src = noImage)}
            />
            <div className="text">
              <h2>
                Recomended movie for you is from year
                <span className="green-text"> {stateYear}</span>, and Genre of
                movie is <span className="green-text">{stateGenre}</span>
              </h2>
              <h4>{stateList[random].title}</h4>
              <p>{stateList[random].overview}</p>
            </div>
          </div>
        </div>
      </div>

      {stateList && (
        <Slider {...settings}>
          {stateList.map((item, key) => {
            return (
              <div key={key}>
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                      : noImage
                  }
                  onError={e => (e.target.src = noImage)}
                  alt={item.title}
                />
                <div className="title-in">
                  <div className="cate">
                    <span className="green">
                      <span className="title">{stateGenre}</span>
                    </span>
                  </div>
                  <h6 className="main-title">{item.original_title}</h6>
                  <p>
                    <i className="ion-android-star"></i>
                    <span>{item.vote_average}</span> /10
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

export default ResultSlider;
