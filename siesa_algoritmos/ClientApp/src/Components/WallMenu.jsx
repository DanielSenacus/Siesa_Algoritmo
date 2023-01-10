import React from "react";
import "./WallMenu.css";

const WallMenu = () => {
  return (
    <div className='wall-poster'>
      {/* <h1>game</h1>
      <i className='mr-akabei'>
        <div className='mr-akabei-content'>
          <span className='mr-akabei-eye-first'></span>
          <span className='mr-akabei-eye-second'></span>
          <span className='mr-akabei-bottom-1'></span>
          <span className='mr-akabei-bottom-2'></span>
          <span className='mr-akabei-bottom-3'></span>
          <span className='mr-akabei-bottom-4'></span>
          <span className='mr-akabei-bottom-5'></span>
          <span className='mr-akabei-bottom-6'></span>
          <span className='mr-akabei-bottom-7'></span>
        </div>
        <i className='point-first'></i>
        <i className='point-second'></i>
        <i className='point-third'></i>
        <i className='point-four'></i>
        <i className='point-last'></i>
      </i>
      <i className='mr-pacman'>
        <i className='point-first'></i>
        <i className='point-second'></i>
        <i className='point-third'></i>
        <i className='point-four'></i>
      </i>
      <span>1980</span> */}
      <div className='content'>
        <div className='content-title'>
          <h2>Select Algorithm</h2>
        </div>
        <div className='menu'>
          <div className='code-1'>
            <h3>1.Cambio de Base</h3>
            <button>Play</button>
          </div>
          <div className='code-2'>
            <h3>2.Arboles de Peso</h3>
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallMenu;
