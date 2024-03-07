import React from "react";
import handballteam from '../img/handbollteam.png'
import { useNavigate } from 'react-router-dom';

function Vision() {
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/vision');
  };
  return (
    <>
      <div id="vision" className="py-10 border-t-4">
        <div className="flex justify-between items-center text-gray-500 py-5">
        <div className=" text-5xl font-bold text-gray-500 underline decoration-green-500 ">Our Vision</div>
        <button onClick={handleButtonClick} className="button text-3xl p-4 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group">
            <span className="w-0 h-full bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-500 z-10 font-bold">
                Vision & Values
            </span>
           </button>
        </div>
        <div className="flex">
            <div className="py-5 pr-5 text-justify m-auto text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ipsum, aliquet non mauris ut, 
                venenatis auctor erat. Proin ac commodo nisl, vel dignissim dolor. Phasellus lorem magna, pellentesque 
                quis ullamcorper sollicitudin, convallis sed risus. In vitae nisl vel orci ultrices vehicula. 
                Cras euismod tortor vel leo aliquam, nec semper sapien ullamcorper. Mauris bibendum arcu id eros 
                mollis, et efficitur nunc interdum. Pellentesque magna eros, hendrerit id rhoncus facilisis, dapibus 
                eu magna. Quisque risus erat, dapibus quis purus et, dapibus euismod arcu. Nulla lorem nisl, faucibus at velit nec, 
                consequat scelerisque felis. Vestibulum ante ipsum primis in faucibus orci luctus.
            </div>
            <img src={handballteam} alt="HandBall team" className="w-1/2 py-4 pl-5"/>
        </div>
        
      </div>
    </>
  );
}

export default Vision;
