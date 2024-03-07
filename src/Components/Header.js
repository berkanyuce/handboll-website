import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import sfc from '../img/sfc.png'
const NavItem = ({ to, text }) => (
  <a className="relative group">
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
      onClick={scroll.scrollToTop}
      className="cursor-pointer hover:text-gray-600 transition"
    >
      {text}
    </Link>
    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
  </a>
);

const Header = () => {
  const location = useLocation();

  return (
    <header className="p-4 flex justify-between items-center z-20 ">
      <div className="logo">
        <a href='/'>
          <img src={sfc} alt="Logo" className="w-24 h-24" />
        </a>
      </div>
      <nav className="space-x-4 text-gray-500 font-semibold">
        {[
          { to: '/', text: 'HOME' },
          { to: 'team', text: 'TEAM' },
          { to: 'leaderboard', text: 'FIXTURES & RESULTS' },
          { to: 'news', text: 'NEWS' },
          { to: 'vision', text: 'OUR VISION' },
          { to: 'sponsor', text: 'SPONSORS' },
        ].map((item) => (
          <>
          {item.to === "leaderboard" ? 
            (location.pathname !== '/' ? 
              <a href="/" className="relative group">
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
              </a> 
              :
              <NavItem key={item.to} to={item.to} text={item.text} />
            ) 
          : 
          
            <a href={item.to} className="relative group">
              {item.text}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          }
          
          
          </>
        ))}
      </nav>
    </header>
  );
};

export default Header;
