import React, { useState } from "react";
import Header from "../common/Header";
import { ArrowIcon } from "../utils/icons";
import { ALPHABET_LIST } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [musicCategory, setMusicCategory] = useState("All");
    const [alphabetText, setAlphabet] = useState()
    const navigate = useNavigate();

    const handleAlphabetChange = (newText) => (
        
        setAlphabet(`${newText}`)
    )

    const handleCategoryClick = (category) => setMusicCategory(category);

    const getHeading = () =>
    ({
        Pop: "Trending Pop Playlists",
        Rock: "Trending Rock Playlists",
        All: "Hit Me Hard and Soft",
        More: "No songs available at the moment.",
    }[musicCategory]);

    return (
        <div className="max-xl:pb-10">
            <div className="container mx-auto max-w-[1140px] max-xl:px-5">
                <Header />
                <div className="flex items-center mt-[17px] max-xl:overflow-x-scroll max-xl:pb-5">
                    <div className="flex items-center gap-[5px] me-[15px]">
                        <button className="min-w-[43px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-200 hover:bg-black hover:text-white font-normal text-[#14191C]" onClick={() => handleCategoryClick("All")}> All</button>
                        <button className="min-w-[47px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-200 hover:bg-black hover:text-white font-normal text-[#14191C]" onClick={() => handleCategoryClick("Pop")}> Pop</button>
                        <button className="h-[29px] min-w-[54px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-200 hover:bg-black hover:text-white font-normal text-[#14191C]" onClick={() => handleCategoryClick("Rock")}> Rock</button>
                        <button className="flex items-center gap-[5px] justify-center h-[29px] min-w-[64px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-200 font-normal text-[#14191C]" onClick={() => handleCategoryClick("More")}> More <ArrowIcon /></button>
                    </div>
                    {ALPHABET_LIST.map((obj, i) => (
                        <p className="size-[29px] max-xl:overflow-x-scroll min-w-[29px] text-xs hover:text-[#FAFAFF] cursor-pointer font-medium leading-[18px] rounded-full flex items-center justify-center bg-transparent transition-all ease-linear duration-200 hover:bg-black text-[#14191C]" key={i} onClick={() => handleAlphabetChange(obj)}> {obj}</p>
                    ))}
                </div>
                <div className="w-full max-w-[1141px] mx-auto rounded-[20px] bg-[#14191C] h-[347px] relative mt-[43px] max-lg:h-full max-lg:mt-7">
                    <div className="flex justify-between max-lg:flex-wrap">
                        <div className="flex flex-col lg:ps-[48px] pt-[38px] max-sm:px-3 max-xl:pt-8 max-md:pt-5 max-xl:w-full max-lg:items-center max-lg:justify-center">
                            <h1 className="text-5xl font-montserrat max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold leading-[58.51px] max-md:text-center text-[#FAFAFF] uppercase">{getHeading()}</h1>
                            <div className="flex items-center gap-6 absolute xl:bottom-[-58px] bottom-[-44px] max-lg:bottom-0 max-lg:hidden">
                                <img src="./assets/images/album-dp.webp" alt="user-img" className="cursor-pointer max-xl:size-40" />
                                <div className="flex flex-col">
                                    <h3 className="text-white text-[32px] font-semibold leading-[42px]"> Billie Eilish {alphabetText} </h3>
                                    <p className="text-base font-montserrat text-[#CECECE] font-medium leading-[19.5px]">Released May 17, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 lg:hidden mt-5">
                                <img src="./assets/images/album-dp.webp" alt="user-img" className="cursor-pointer max-xl:size-40 max-lg:size-20 max-md:size-16" />
                                <div className="flex flex-col">
                                    <h3 className="text-white text-[32px] font-semibold leading-[42px] max-lg:text-2xl max-md:text-xl">Billie Eilish {alphabetText}</h3>
                                    <p className="text-base font-montserrat text-[#CECECE] font-medium leading-[19.5px]"> Released May 17, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-[43px] pe-[43px] max-lg:p-10 max-md:p-6 max-sm:p-4 max-lg:w-full">
                            <img src="./assets/images/singer-img.webp" alt="billie-eillish" className=" max-md:mx-auto w-full lg:min-w-[261px] max-lg:max-w-[261px] max-lg:mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
