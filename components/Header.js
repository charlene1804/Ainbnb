import Image from 'next/image'
import React from 'react'
const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-col-3 bg-white shadow-md py-5 px-5 md:px-10' >
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                {/* using imge from next js which optimize the image, we need to config a file to configurate the image(cf:next.config) */}
                <Image src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt="" />
            </div>
            <div>middle</div>
            <div>right</div>
        </header>
    )
}

export default Header

