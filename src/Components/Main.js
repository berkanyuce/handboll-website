
import React from 'react';
import player from '../img/klipartz.com.png';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
const Main = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
const handleImageLoad = () => {
  setIsImageLoaded(true);
};

const [isTextVisible, setIsTextVisible] = useState(false);

useEffect(() => {
  setIsTextVisible(true);
}, []); 

  return (
    <div className="relative py-12 ">
      <CSSTransition
        in={isTextVisible}
        timeout={500} 
        classNames="slide-from-right"
      >
        {/* Yazı */}
        <div
          className="absolute top-1/3 left-1/3 text-black text-9xl font-bold slide-element"
        >
          HANDBALL TEAM
        </div>
      </CSSTransition>

      <CSSTransition
        in={isImageLoaded}
        timeout={750} 
        classNames="slide-bottom-left"
      >
        <img
          src={player}
          alt="Player"
          onLoad={handleImageLoad}
          className="object-cover py-10 slide-element"
        />
      </CSSTransition>
     
    </div>
  );
};

export default Main;
