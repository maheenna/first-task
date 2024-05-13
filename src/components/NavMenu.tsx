import Image from 'next/image'
import React from 'react'

const NavMenu = () => {
  return (
    <div className=' mt-8 relative border-b border-[#EEEEEE] py-2'>
      <div className='flex justify-around'>
        <span className='items-center flex flex-col'>
          <Image src={"/flight.png"} alt='flight' width={52.8} height={52.8} />
          <p className='text-[#0071BC] text-[12px] font-bold text-center pt-1'>Flights</p>
          <div className="absolute bottom-0 transform h-0.5 w-12 bg-[#0071BC]"></div>
        </span>
        <span >
          <Image src={"/hotel.png"} alt='hotel' width={52.8} height={52.8} />
          <p className='text-[#7BA2E9] text-[12px] font-bold text-center pt-1'>Hotels</p>
        </span>
        <span  className='items-center flex flex-col'>

          <Image src={"/cars.png"} alt='cars' width={52.8} height={52.8} />
          <p className='text-[#7BA2E9] text-[12px] font-bold text-center pt-1'>Cars</p>
        </span>
        <span className='items-center flex flex-col'>
          <Image src={"/accessories.png"} alt='accessories' width={52.8} height={52.8} />
          <p className='text-[#7BA2E9] text-[12px] font-bold  pt-1'>Accessories</p>
        </span>
      </div>
    </div>
  )
}

export default NavMenu
