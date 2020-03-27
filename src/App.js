import React, { useEffect, useState } from "react";
import './App.scss';
import { getListOfMovies, MovieGenres, getRandomInt } from "./api/api";
import ResultSlider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [stateList, setstateList] = useState(null)
  const [stateGenre, setstateGenre] = useState(null)
  const [stateYear, setstateYear] = useState(null)
  const yearNum = 35;
  

  const getData = async () => {
    let typeNo = getRandomInt(MovieGenres.length);
    let yearNo = getRandomInt(yearNum);
    setstateYear(2020 - yearNo);
    setstateGenre(MovieGenres[typeNo].name);
    getListOfMovies(MovieGenres[typeNo].id, 2020 - yearNo).then(res => {
      setstateList(res);
      console.log(res);
    });
  };

  useEffect(() => {
    getData()
  }, []);
  
  return (
    <>
      <div className="slider-container">
        {/* <Header /> */}
        {stateList && (
          <ResultSlider
            getData={getData}
            stateList={stateList}
            stateGenre={stateGenre}
            stateYear={stateYear}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
