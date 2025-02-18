import React from 'react'
import { PageLogo, SearchIcon } from '../utils/icons'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className='max-w-[1128px] mt-2.5 max-md:flex-col gap-4 w-full shadow-[0px_10px_10px_0px_#31374D1A] lg:pl-[38.48px] rounded-[20px] items-center py-2.5 px-3 max-md:p-2 flex justify-between mx-auto'>
            <Link to="/" className='max-w-[135px] max-md:hidden'><PageLogo /></Link>
            <div className="flex md:hidden justify-between w-full">
                <Link to="/" className='md:hidden'><PageLogo /></Link>
                <div className="flex gap-4 items- justify-center">
                    <button className='border-none outline-none hover:scale-110 transition-all text-sm duration-300'>Login</button>
                    <button className='py-2 px-3 text-sm whitespace-nowrap bg-black hover:scale-110 transition-all duration-300 text-white rounded-[9px]'>Sign Up</button>
                </div>
            </div>
            <div className='max-w-[650px] max-xl:mx-2 w-full p-[6px_7px_6px_30px] max-md:pl-2.5 border border-solid border-[#DBDBF3] rounded-[144px]'>
                <form className='flex w-full justify-between'>
                    <input required placeholder="What do you feel like listening to right now ?" type="text" className='border-none bg-transparent outline-none w-[85%] max-xl:w-[75%] text-[#333333] placeholder:text-[#333333] max-md:text-xs ' />
                    <button type='submit' className='p-[11px_12px_12px_12px] bg-black rounded-full hover:scale-110 transition-all duration-300 '><SearchIcon /> </button>
                </form>
            </div>
            <div className="flex gap-5 max-md:hidden">
                <button className='border-none outline-none hover:scale-110 text-sm transition-all duration-300'>Login</button>
                <button className='pt-[9px] px-6 pb-2.5 whitespace-nowrap bg-black text-sm hover:scale-110 transition-all duration-300 text-white rounded-[9px]'>Sign Up</button>
            </div>
        </div>
    )
}

export default Header