import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { ArrowIcon } from "../utils/icons";
import { ALPHABET_LIST } from "../utils/helper";
import { Link, useNavigate, useSearchParams, useParams } from "react-router-dom";

const Hero = () => {
    const [alpha, setAlpha] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [domain, setDomain] = useState();
    const navigate = useNavigate();
    const { value = "all" } = useParams();

    const changeDomainHandler = (value) => {
        setDomain(value);
        navigate(`/${value}`);
    };
    useEffect(() => {
        const initialAlpha = searchParams.get("alpha");
        if (initialAlpha) {
            setAlpha(initialAlpha);
        }
        setDomain(value);
    }, [searchParams, value]);
    const handleAlphabetChange = (letter) => {
        setAlpha(letter.toLowerCase());
        setSearchParams({ alpha: letter.toLowerCase() });
    };

    return (
        <div className="max-xl:pb-10">
            <div className="container mx-auto max-w-[1140px] max-xl:px-5">
                <Header />
                <div className="flex items-center mt-[17px] max-xl:overflow-x-scroll max-xl:pb-5">
                    <div className="flex items-center gap-[5px] me-[15px]">
                        <button className={`min-w-[43px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] transition-all ease-linear duration-200 font-normal text-[#14191C] ${domain === "all" ? "bg-[#14191C] !text-white" : ""}`} onClick={() => changeDomainHandler("all")}> All</button>
                        <button className={`min-w-[47px] h-[29px] text-xs leading-6 border border-solid border-black rounded-[9px] transition-all ease-linear duration-200 font-normal text-[#14191C] ${domain === "pop" ? "bg-[#14191C] !text-white" : ""}`} onClick={() => changeDomainHandler("pop")}> Pop</button>
                        <button className={`h-[29px] min-w-[54px] text-xs leading-6 border border-solid border-black rounded-[9px] transition-all ease-linear duration-200 font-normal text-[#14191C] ${domain === "rock" ? "bg-[#14191C] !text-white" : ""}`} onClick={() => changeDomainHandler("rock")}>Rock</button>
                        {/* <button className={`flex items-center gap-1 justify-center h-[29px] min-w-[64px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 font-normal text-black ${domain === "more" ? "!bg-black !text-white button-svg" : "bg-black"}`}
                            onClick={() => changeDomainHandler("more")}> More <ArrowIcon />
                        </button> */}
                        <div className="relative inline-block">
                            <select className={`flex items-center gap-1 justify-center h-[29px] min-w-[64px] text-xs px-1 leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 font-normal outline-none text-black ${domain === "more" ? "!bg-black !text-white" : "bg-white"}`}
                                value={domain} onChange={(e) => changeDomainHandler(e.target.value)}>
                                <option value="soft" className={`bg-white text-black ${domain === "soft" ? "bg-[#14191C] !text-white" : ""}`}>SOFT</option>
                                <option value="more" className={`bg-white text-black ${domain === "more" ? "bg-[#14191C] !text-white" : ""}`}>More</option>
                                <option value="music" className={`bg-white text-black ${domain === "music" ? "bg-[#14191C] !text-white" : ""}`}>MUSIC</option>
                            </select>
                        </div>
                    </div>
                    {ALPHABET_LIST.map((item, index) => {
                        return (
                            <Link key={index} onClick={(e) => { e.preventDefault(); handleAlphabetChange(item); }} to="#" className="flex items-center hover:bg-[#14191C] size-7 justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl max-md:size-5">{item}</Link>
                        );
                    })}
                </div>
                <div className="w-full max-w-[1141px] mx-auto rounded-[20px] bg-[#14191C] h-[347px] relative mt-[43px] max-lg:h-full max-lg:mt-7">
                    <div className="flex justify-between max-lg:flex-wrap">
                        <div className="flex flex-col lg:ps-[48px] pt-[38px] max-sm:px-4 max-xl:pt-8 max-md:pt-5 max-xl:w-full max-lg:items-center max-lg:justify-center">
                            <h1 className="text-5xl font-montserrat max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold leading-[58.51px] max-md:text-center text-[#FAFAFF] uppercase">
                                Hit Me Hard and{" "}{domain === "all" ? "All" : domain === "pop" ? "Pop" : domain === "rock" ? "Rock" : domain === "more" ? "More" : "Soft"}
                            </h1>
                            <div className="flex items-center gap-6 absolute xl:bottom-[-58px] bottom-[-44px] max-lg:bottom-0 max-lg:hidden">
                                <img src="./assets/images/album-dp.webp" alt="user-img" className="cursor-pointer max-xl:size-40" />
                                <div className="flex flex-col">
                                    <h3 className="text-white text-[32px] font-semibold leading-[42px]"> Billie Eilish{" "} <span className="uppercase">{alpha ? `${alpha}` : ""}</span>
                                    </h3>
                                    <p className="text-base font-montserrat text-[#CECECE] font-medium leading-[19.5px]"> Released May 17, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 lg:hidden mt-5">
                                <img src="./assets/images/album-dp.webp" alt="user-img" className="cursor-pointer max-xl:size-40 max-lg:size-20 max-md:size-16" />
                                <div className="flex flex-col">
                                    <h3 className="text-white text-[32px] font-semibold leading-[42px] max-lg:text-2xl max-md:text-xl">
                                        Billie Eilish{" "} <span className="uppercase">{alpha ? `${alpha}` : ""}</span>
                                    </h3>
                                    <p className="text-base font-montserrat text-[#CECECE] font-medium leading-[19.5px]">
                                        Released May 17, 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-[43px] pe-[43px] max-lg:p-8 max-md:p-6 max-sm:p-5 max-lg:w-full">
                            <img src="./assets/images/singer-img.webp" alt="billie-eillish" className=" max-md:mx-auto w-full lg:min-w-[261px] max-lg:max-w-[261px] max-lg:mx-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <button onClick={() => changeDomainHandler('music')} className={`${domain === "music" ? 'bg-[#14191C] text-white button-svg' : ''} 
                            !text-xs text-[#14191C] py-[5.84px] px-[9.2px] flex items-center gap-[5px] border border-black text-nowrap font-medium max-sm:text-xs leading-6 max-sm:px-3 max-sm:py-2 rounded-[9px] transition-all duration-300`}>
                            More <ArrowIcon className={`${domain === 'music' ? 'stroke-white' : ''} transition-all duration-300`} />
                        </button>

            <button className={`flex items-center gap-1 justify-center h-[29px] min-w-[64px] text-xs leading-6 border border-solid border-black rounded-[9px] bg-transparent transition-all ease-linear duration-300 font-normal text-black ${domain === "more" ? "!bg-black !text-white button-svg" : "bg-black"}`}
                onClick={() => changeDomainHandler("more")}> More <ArrowIcon />
            </button> */}
        </div>
    );
};

export default Hero;
