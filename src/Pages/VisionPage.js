import React from "react";
import handballteam from '../img/handbollteam.png'

const VisionPage = () => {
    return (
        <>
        <div className="py-10">
            <div className='flex justify-between items-center text-gray-500 py-5'>
                <div className=" text-5xl font-bold text-gray-500 underline decoration-green-500 ">Our Vision</div>
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

            <div className='flex justify-between items-center text-gray-500 py-5'>
                <div className=" text-5xl font-bold text-gray-500 underline decoration-green-500 ">Our Values</div>
            </div>

            <div className="flex flex-col  align-center py-5">
                <div className=" text-4xl text-center font-bold text-gray-500 underline decoration-green-500">Value 1</div> 

                <div className="w-2/3 p-5 text-justify m-auto text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ipsum, aliquet non mauris ut, 
                    venenatis auctor erat. Proin ac commodo nisl, vel dignissim dolor. Phasellus lorem magna, pellentesque 
                    quis ullamcorper sollicitudin, convallis sed risus.
                </div>
            </div>

            <div className="flex flex-col align-center py-5">
                <div className=" text-4xl my-auto text-center font-bold text-gray-500 underline decoration-green-500">Value 2</div> 

                <div className="w-2/3 p-5 text-justify m-auto text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ipsum, aliquet non mauris ut, 
                    venenatis auctor erat. Proin ac commodo nisl, vel dignissim dolor. Phasellus lorem magna, pellentesque 
                    quis ullamcorper sollicitudin, convallis sed risus.
                </div>
            </div>

            <div className="flex flex-col align-center py-5">
                <div className=" text-4xl my-auto text-center font-bold text-gray-500 underline decoration-green-500">Value 3</div> 

                <div className="w-2/3 p-5 text-justify m-auto text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ipsum, aliquet non mauris ut, 
                    venenatis auctor erat. Proin ac commodo nisl, vel dignissim dolor. Phasellus lorem magna, pellentesque 
                    quis ullamcorper sollicitudin, convallis sed risus.
                </div>
            </div>

            <div className="flex flex-col align-center py-5">
                <div className=" text-4xl my-auto text-center font-bold text-gray-500 underline decoration-green-500">Value 4</div> 

                <div className="w-2/3 p-5 text-justify m-auto text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ipsum, aliquet non mauris ut, 
                    venenatis auctor erat. Proin ac commodo nisl, vel dignissim dolor. Phasellus lorem magna, pellentesque 
                    quis ullamcorper sollicitudin, convallis sed risus.
                </div>
            </div>
        </div>
        </>
    );
};
 
export default VisionPage;