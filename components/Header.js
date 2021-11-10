import { SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' >
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                {/* using imge from next js which optimize the image, we need to config a file to configurate the image(cf:next.config) */}
                <Image src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt="" />
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder='start your search' className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' />
                <SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            {/* <div>right</div> */}
        </header>
    )
}

export default Header

