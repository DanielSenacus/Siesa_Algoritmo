import React from "react";
import "./Screen.css";
import WallMenu from "./WallMenu";
import ConsoleText from "./ConsoleText";

const Screen = () => {
  return (
    <div className='page'>
      <div className='wall-bg'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='floor-bg'>
        <div className='floor-hr'>
          <i></i>
        </div>
      </div>

      <div className='tv-content'>
        <div className='tv'>
          <ConsoleText></ConsoleText>
          <div className='tv-top'>
            <i className='item-left'></i>
            <i className='item-right'></i>
          </div>
          <div className='tv-shadow'></div>
          <div className='tv-right'></div>
          <div className='tv-bottom'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <i></i>
          </div>
          <div className='tv-screen'>
            <a href='' className='pw-btn'></a>
            <div className='tv-hr'>
              <div className='tv-hr-2'>
                <div className='tv-hr-3'>
                  <div className='tv-glass'>
                    <canvas></canvas>
                    <div className='tv-glass-vintage'>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>

                      <i className='tv-noise'></i>
                      <i className='tv-noise-second'></i>
                      <i className='tv-glow'></i>
                    </div>
                  </div>
                  <div className='tv-flashing'>
                    <i className='tv-flashing-left'></i>
                    <i className='tv-flashing-bottom'></i>
                    <i className='tv-flashing-bottom-placeholder'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tv-desk'>
          <i className='tv-desk-shadow'></i>
          <i className='tv-desk-item-left-shadow'></i>
          <i className='tv-desk-item-left'></i>
          <i className='tv-desk-item-right-shadow'></i>
          <i className='tv-desk-item-right'></i>
          <i className='tv-desk-item-rear-shadow'></i>
          <i className='tv-desk-item-rear'></i>
          <i className='tv-desk-top'></i>
          <i className='tv-desk-front'></i>
          <i className='tv-desk-right'></i>
        </div>
      </div>

      <div className='console'>
        <i className='console-shadow'></i>
        <div className='console-top'>
          <i className='console-game-top'></i>
          <div className='console-top-panel'>
            <i className='console-top-panel-item-1'></i>
            <i className='console-top-panel-item-2'></i>
            <i className='console-top-panel-item-3'></i>
            <i className='console-top-panel-item-4'></i>
            <i className='console-top-panel-item-5'></i>
            <i className='console-top-panel-item-6'></i>
            <i className='console-top-panel-item-7'></i>
            <i className='console-top-panel-item-8'></i>
          </div>
        </div>
        <i className='console-right-top'></i>
        <i className='console-right-bottom'></i>
        <div className='console-front-panel'>
          <div className='front-panel-top'>
            <i className='console-game'></i>
            <i className='console-power-dark'></i>
          </div>
          <div className='front-panel-bottom'>
            <i className='console-power-indicator'></i>
            <i className='console-btn-first'></i>
            <i className='console-btn-second'></i>
            <div className='console-power'>
              <div className='console-power-plug'>
                <i></i>
              </div>
              <i className='console-power-cable'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
