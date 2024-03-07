import React from "react";
import sfc from '../img/sfc.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  

  return (
    <>
    <div className="py-10 border-t-4 w-full">
        <div className="flex flex-col">
            <div className="logo flex justify-around items-center pt-10">
                <img src={sfc} alt="Logo" className="w-36 h-36 " />
                <div className="w-1/2 text-gray-500">
                    <div className="text-2xl font-bold underline decoration-green-500 py-2">
                        About Us
                    </div>
                    <div className="">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                     a type specimen book. It has survived not only five centuries,
                    </div>
                </div>
            </div>
            <div className="flex space-x-10 justify-center pt-10 pb-5">
                <FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#6b7280",}}/>
                <FontAwesomeIcon icon={faFacebook} size='2xl' style={{color: "#6b7280",}}/>
             </div>
        </div>
        
    </div>
    
    

    </>
  );
}

export default Footer;
