import React from "react";

function About() {
    return (
        <div className="">
            <div className="flex text-center items-center justify-center">
                <img src={'src/assets/background1.jpg'} className="w-full h-96 pt-10"/>
                <div className="flex flex-col absolute">
                <h2 className="text-white m-1 text-center text-2xl">About</h2>
                <h1 className="text-black m-1 font-bold text-4xl text-center mb-10">Our Story</h1>
                <a href="https://www.youtube.com/watch?v=YKY-_8MuCfE" target="_blank">
                    <button className="bg-gray-200 text-black text-s mt-3 px-6 font-light rounded-md justify-center">WATCH VIDEO</button>
                </a>
                </div>
            </div>
            <div className="pt-52 ml-48 mr-48 flex-col pt-8 items-center justify-center">
                <h3 className="font-bold">Innovative and sustainable resource recovery and management</h3>
                    <br/><br/>
                <p className="text-black">We all want our future generations to enjoy this incredibly beautiful country. So we need to work together to protect and preserve the one environment we al share, and this is at the very heart of what we do.
                    <br/><br/>
                    Whether it's turning landfill gas to power, organic waste to compost or returning our beaches to pristine condition, we believe in rolling our sleeves up and doing what it takes to keep New Zealand beautiful.
                    <br/><br/>
                    We have a comprehensive range of proven solutions available to assist with optimising sustainability and are constantly innovating to develop new solutions to meet the individual needs of our customers. Good old kiwi ingenuity, a great team culture and a relentless commitment to preserve New Zealand’s natural beauty and resources, produces the best possible outcomes for our customers and the environment.
                </p>
            </div>
        </div>
    )
}

export default About;