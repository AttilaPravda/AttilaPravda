import React from 'react'
import './Header.scss'

function Header({ getData }) {
  return (
    <header className="wrapper">
      <h2>
        Hi, Due to the new situation <span className="green-text">(COVID-19)</span>, the demand for
        films is increasing, as is the hesitancy to choose them. We are here for
        you to choose the best movie by randomly selecting the genre as the year
        of release.
      </h2>
      <div>
        <button onClick={() => getData()}>Choose Again</button>
      </div>
    </header>
  );
}

export default Header
