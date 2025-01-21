import React from 'react'
import { PageLogo, SearchIcon } from '../utils/icons'

const Header = () => {

    function handleSearch(e) {
        e.preventDefault()
    }

    return (
        <div className='max-w-[1128px] mt-2.5 max-md:flex-col gap-4 w-full shadow-[0px_10px_10px_0px_#31374D1A] pl-[38.48px] rounded-[20px] items-center py-2.5 pr-3 max-md:p-2 flex justify-between mx-auto'>
            <a className='max-w-svg max-md:hidden' href="/"><PageLogo /> </a>
            <div className="flex gap-4 md:hidden items-center justify-center">
                <a className=' md:hidden' href="/"><PageLogo /> </a>
                <button className='border-none outline-none hover:scale-110 transition-all text-sm duration-300'>Login</button>
                <button className='py-2 px-3 whitespace-nowrap bg-black hover:scale-110 transition-all duration-300 text-white rounded-[9px]'>Sign Up</button>
            </div>
            <div className='max-w-[650px] max-sm:max-w-[300px] max-md:max-w-[400px] max-xl:mx-2 w-full p-[6px_7px_6px_30px] max-md:pl-2.5 border border-solid border-sky-blue rounded-[144px]'>
                <form onSubmit={handleSearch} className='flex w-full justify-between'>
                    <input required placeholder="What do you feel like listening to right now ?" type="text" className='border-none bg-transparent outline-none w-[85%] max-xl:w-[75%] max-md:text-xs ' />
                    <button className='p-[11.94px_12.08px_11.08px_10.95px] bg-black rounded-full hover:scale-110 transition-all duration-300 '><SearchIcon /> </button>
                </form>
            </div>
            <div className="flex gap-5 max-md:hidden">
                <button className='border-none outline-none hover:scale-110 transition-all duration-300'>Login</button>
                <button className='pt-[9px] px-6 pb-2.5 whitespace-nowrap bg-black hover:scale-110 transition-all duration-300 text-white rounded-[9px]'>Sign Up</button>
            </div>
        </div>
    )
}

export default Header