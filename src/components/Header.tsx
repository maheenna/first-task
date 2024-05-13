import Image from 'next/image'
import React from 'react'
import { IoMdMenu } from 'react-icons/io'


const Header = () => {
    return (
        <div className='px-3 py-3 '>
            <div className='flex items-center justify-between'>
                <Image src={'/logo.png'} alt='logo' width={171.43} height={24} />
                <IoMdMenu size={24} className='text-[24px]' />
            </div>

        </div>
    )
}

export default Header
