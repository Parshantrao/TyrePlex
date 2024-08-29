import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import CarTyreSelector from './dropdowns/CarTyreSelector';
import BikeTyreSelector from './dropdowns/BikeTyreSelector';
import FindBySize from './FindBySize';

function TyreFinderComponent() {
    const [searchCategory, setSearchCategory] = useState('by vehicle')
    const [vehicleType, setVehicleType] = useState("car")

    const [isOpen, setIsOpen] = useState(true); // State to manage the open/close status

    const toggleAccordion = () => {
        setIsOpen(!isOpen); // Toggle open/close status
    };

    return (
        <div
            className="relative mt-2"
        >
            <Carousel className='relative rounded hidden sm:flex' data-bs-theme="dark" controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-full h-[450px] rounded-md"
                        src="https://cdn.tyreplex.net/themes/moonlight/images/hm-banner-new.png?tr=q-50"
                        alt="First slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-full h-[450px] object-cover"
                        src="https://cdn.tyreplex.net/images/pixel.webp?tr=q-10"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full h-[450px] object-cover"
                        src="https://cdn.tyreplex.net/images/pixel.webp?tr=q-10"
                        alt="Third slide"
                    />
                </Carousel.Item> */}
            </Carousel>
            <div className="bg-white absolute rounded-md top-0 left-1/2 transform -translate-x-1/2 w-[90%] min-w-[300px] sm:w-max sm:top-[3%] sm:left-[45px] sm:transform-none shadow-lg py-3 px-4">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold leading-none">Find The Right Tyre</h1>
                        <i
                            className={`bi ${isOpen ? 'bi-caret-up text-blue-500' : 'bi-caret-down'} cursor-pointer text-xl transition-transform duration-300`}
                            onClick={toggleAccordion}
                        ></i>
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-visible ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? 1 : 0 }}
                    >
                        <div className="mt-4 flex flex-col gap-y-4 overflow-hidden">
                            <div className="flex space-x-3 md:mr-8">
                                <button
                                    className={`border-gray-300 text-sm border-1 px-4 py-2 rounded ${searchCategory === 'by vehicle' ? "text-white bg-black" : "text-gray-500 bg-white"
                                        }`}
                                    onClick={() => setSearchCategory('by vehicle')}
                                >
                                    By Vehicle
                                </button>
                                <button
                                    className={`border-gray-300 text-sm border-1 px-4 py-2 rounded ${searchCategory === 'by size' ? "text-white bg-black" : "text-gray-500 bg-white"
                                        }`}
                                    onClick={() => setSearchCategory('by size')}
                                >
                                    By Size
                                </button>
                                <button
                                    className={`border-gray-300 text-sm border-1 px-4 py-2 rounded ${searchCategory === 'by vehicle number' ? "text-white bg-black" : "text-gray-500 bg-white"
                                        }`}
                                    onClick={() => setSearchCategory('by vehicle number')}
                                >
                                    By Vehicle Number
                                </button>
                            </div>
                            {searchCategory === "by vehicle" ? <>
                                <div className='flex gap-4 border-b-2'>
                                    <button
                                        className={`font-semibold py-2 ${vehicleType === 'car' ? "border-b-2 border-red-500 text-red-500" : ""
                                            }`}
                                        onClick={() => setVehicleType('car')}
                                    >
                                        CAR
                                    </button>
                                    <button
                                        className={`font-semibold py-2 ${vehicleType === 'bike' ? "border-b-2 border-red-500 text-red-500" : ""
                                            }`}
                                        onClick={() => setVehicleType('bike')}
                                    >
                                        BIKE
                                    </button>
                                </div>
                                {vehicleType === "car" ? <CarTyreSelector /> : <BikeTyreSelector />}

                            </> : <FindBySize />}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TyreFinderComponent