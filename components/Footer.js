import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsromm</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airnbnb Luxe</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>become a host</p>
                <p>project with nextjs</p>
                <p>TAilwind css</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>bcome a member</p>
                <p>News</p>
                <p>Investors</p>
                <p>What else ?</p>
                <p>Rate Airbnb</p>
            </div>

            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMENTS</h5>
                <p>let's check my linkedin</p>
                <p>my github</p>
                <p>Stay in touch ?</p>
                <p>full stack JS</p>
                <p>let's have a call</p>
            </div>
        </div>
    )
}

export default Footer
