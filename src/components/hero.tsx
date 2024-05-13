'use client'
import Image from 'next/image';
import React, { useState } from 'react';

let Hero = () => {
  const [showOneWayHeadings, setShowOneWayHeadings] = useState(false);
  const [showRightHeadings, setShowRightHeadings] = useState(false);

  const handleOneWayClick = () => {
    setShowOneWayHeadings(!showOneWayHeadings); // Toggle the state for One-way headings
    setShowRightHeadings(false); // Hide Right headings when One-way is clicked
  };

  const handleRightClick = () => {
    setShowRightHeadings(!showRightHeadings); // Toggle the state for Right headings
    setShowOneWayHeadings(false); // Hide One-way headings when Right is clicked
  };

  return (
    <div className='border-b'>
      <div className=" pl-3">
        <div>
          <h1 className="text-[#0071BC] mt-8 text-[24px] font-bold">Let’s Book your next trip!</h1>
          <p className="text-[15px] mt-3 font-semibold text-[#10294D]">choose best deals over 1.5 million travel services</p>
        </div>

        <div className="flex gap-6 mt-8 border-b">
          {/* One-way component */}
          <p
            onClick={handleOneWayClick}
            className={`cursor-pointer ${showOneWayHeadings ? 'underline text-[#0071BC]' : ''} pb-3`}
            style={{ marginBottom: showOneWayHeadings ? '10px' : '0' }} // Add margin-bottom when headings are shown
          >
            One-way
          </p>

          {/* Right component */}
          <p
            onClick={handleRightClick}
            className={`cursor-pointer ${showRightHeadings ? 'underline text-[#0071BC]' : ''} mb-3`}
            style={{ marginBottom: showRightHeadings ? '10px' : '0' }} // Add margin-bottom when headings are shown
          >
            Round-trip
          </p>
        </div>

        {/* Render One-way headings if showOneWayHeadings is true */}
        {showOneWayHeadings && (
          <div>
            <div className="mt-4  mr-4 ">
              <div className="border-2 pl-3 rounded-md py-3 flex gap-4">
                <Image src={"/Vector2.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Flying from"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/departure.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Destination to"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/departuredate.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Departure Date"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/Person Icon.png"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="3"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/Person Icon.png"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Economy"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Render Right headings if showRightHeadings is true */}
        {showRightHeadings && (
          <div>
            <div className="mt-4  mr-4 ">
              <div className="border-2 pl-3 rounded-md py-3 flex gap-4">
                <Image src={"/Vector2.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Flying from"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/departure.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Destination to"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/departuredate.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Departure Date"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/departuredate.svg"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Return Date"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/Person Icon.png"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="3"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-4 mr-4 ">
              <div className=" pl-3 border-2 rounded-md py-3 flex gap-4">
                <Image src={"/Person Icon.png"} alt="flight" height={200} width={200} className="w-[30px]" />
                {/* Apply custom styles to input */}
                <input
                  type="text"
                  placeholder="Economy"
                  className="focus:outline-none border-none focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
        <div>

        </div>

      </div>
      <button className='w-[90%] bg-[#0071BC] rounded-lg mt-12 py-3 ml-5 text-white'>Search Flights</button>
    </div>
  );
};

export default Hero;
