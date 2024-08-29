import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';

import { vehicleTypes, tyreSpecification } from "../../constant/tyrespecifications"

function FindBySize() {
    const [searchTermWidth, setSearchTermWidth] = useState('');
    const [searchTermAspectRatio, setSearchTermAspectRatio] = useState('');
    const [searchTermRim, setSearchTermRim] = useState('');

    const [vehicleCategory, setVehicleCategory] = useState('');
    const [selectedWidth, setSelectedWidth] = useState('');
    const [selectedRim, setSelectedRim] = useState('');
    const [selectedAspectRatio, setSelectedAspectRatio] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const filteredVehicleCategory = vehicleTypes.filter(type =>
        type.toLowerCase().includes(searchTerm.toLowerCase()))

    const filteredWidths = vehicleCategory
        ? tyreSpecification[vehicleCategory].tyreWidths.filter(width =>
            width.toLowerCase().includes(searchTermWidth.toLowerCase())
        )
        : [];

    const filteredAspectRatios = selectedWidth
        ? tyreSpecification[vehicleCategory].aspectRatios.filter(aspectRatio =>
            aspectRatio.toLowerCase().includes(searchTermAspectRatio.toLowerCase())
        )
        : [];

    const filteredRims = selectedAspectRatio
        ? tyreSpecification[vehicleCategory].rimSizes[selectedAspectRatio]?.filter(rim =>
            rim.toLowerCase().includes(searchTermRim.toLowerCase())
        ) || []
        : [];


    return (
        <div className='flex flex-col gap-y-6 px-2 overflow-hidden'>
            <div>
                <img src='https://cdn.tyreplex.net/themes/moonlight/images/tyre-info.jpg?v=1500&tr=q-60' alt='icon' />
            </div>
            <div className='flex flex-col gap-y-3'>

                <div className='flex'>
                    <Dropdown className='w-full' onToggle={() => setSearchTerm("")}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-2  flex  justify-between items-center bg-white text-black w- rounded-none'>
                            <span className='w-[135px] text-start'>{vehicleCategory ? vehicleCategory : 'Vehicle Categories'}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-full border-1 mt-2 border-t-0 rounded-t-none border-black'>
                            <div className="p-2">
                                <input
                                    type="text"
                                    // placeholder="Search brand..."
                                    className="form-control focus:ring-0 focus:outline-none w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className='max-h-[200px] overflow-y-auto no-scrollbar'>
                                <div className='bg-white max-h-[100px] overflow-scroll no-scrollbar'>
                                    <div className='max-h-[100px] overflow-scroll no-scrollbar px-2'>
                                        <Dropdown.Item className='p-0 py-0.5'
                                            onClick={() => {
                                                setVehicleCategory("");
                                                setSelectedWidth('');
                                                setSearchTermWidth('');
                                                setSearchTermRim('');
                                                setSelectedRim("")
                                                setSearchTermAspectRatio("");
                                                setSelectedAspectRatio("")
                                            }}
                                        >Choose Vehicle</Dropdown.Item>
                                        {filteredVehicleCategory.map((brand, index) => (
                                            <Dropdown.Item className='p-0 py-0.5'
                                                onClick={() => {
                                                    setVehicleCategory(brand);
                                                    setSelectedWidth('');
                                                    setSearchTermWidth('');
                                                    setSearchTermRim('');
                                                    setSelectedRim("")
                                                    setSearchTermAspectRatio("");
                                                    setSelectedAspectRatio("")
                                                }}
                                                key={index}>{brand}</Dropdown.Item>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='w-full' onToggle={() => setSearchTermWidth("")}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-2 flex gap-0 justify-between items-center bg-white text-black w- rounded-none '>
                            <span className='w-[135px] text-start'> {vehicleCategory ? selectedWidth ? selectedWidth : "Choose Width" : "Width"}</span>

                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-full border-1 border-black'>
                            <div className="p-2">
                                <input
                                    type="text"
                                    // placeholder="Enter model..."
                                    className="form-control focus:ring-0 focus:outline-none w-full"
                                    value={searchTermWidth}
                                    onChange={(e) => setSearchTermWidth(e.target.value)}
                                />
                            </div>
                            <div className='max-h-[200px] overflow-y-auto'>
                                {filteredWidths.map((width, index) => (
                                    <Dropdown.Item
                                        key={index}
                                        onClick={() => {
                                            setSelectedWidth(width)
                                            setSelectedRim("")
                                            setSelectedAspectRatio("")
                                        }}
                                    >
                                        {width}
                                    </Dropdown.Item>
                                ))}
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className='flex'>
                    <Dropdown className='w-full' onToggle={() => setSearchTermAspectRatio("")}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-2 flex justify-between items-center bg-white text-black w- rounded-none'>
                            <span className='w-[135px] text-start'>{selectedAspectRatio ? selectedAspectRatio : 'Aspect Ratio'}</span>

                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-full border-1 border-black'>
                            <div className="p-2">
                                <input
                                    type="text"
                                    // placeholder="Enter Variant..."
                                    className="form-control focus:ring-0 focus:outline-none w-full"
                                    value={searchTermAspectRatio}
                                    onChange={(e) => setSearchTermAspectRatio(e.target.value)}
                                />
                            </div>
                            <div className='max-h-[200px] overflow-y-auto'>
                                {filteredAspectRatios.map((aspectRatio, index) => (
                                    <Dropdown.Item key={index} onClick={() => setSelectedAspectRatio(aspectRatio)}>
                                        {aspectRatio}
                                    </Dropdown.Item>
                                ))}
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='w-full' onToggle={() => setSearchTermRim("")}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='px-2  flex justify-between items-center bg-white text-black w- rounded-none'>
                            <span className='w-[135px] text-start'> {selectedRim ? selectedRim : 'Rim'}</span>

                        </Dropdown.Toggle>

                        <Dropdown.Menu className='w-full border-1 border-black'>
                            <div className="p-2">
                                <input
                                    type="text"
                                    // placeholder="Enter Variant..."
                                    className="form-control focus:ring-0 focus:outline-none w-full"
                                    value={searchTermRim}
                                    onChange={(e) => setSearchTermRim(e.target.value)}
                                />
                            </div>
                            <div className='max-h-[200px] overflow-y-auto'>
                                {filteredRims.map((rim, index) => (
                                    <Dropdown.Item key={index} onClick={() => setSelectedRim(rim)}>
                                        {rim}
                                    </Dropdown.Item>
                                ))}
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

            </div>

            <div>
                <button className='w-full bg-red-600 text-white rounded py-3'>Search</button>
            </div>
        </div>
    )
}

export default FindBySize