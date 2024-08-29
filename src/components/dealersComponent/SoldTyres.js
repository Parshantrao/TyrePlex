import React, { useEffect, useState } from 'react';
import TyreCard from './card/TyreCard';
import { Dropdown } from 'react-bootstrap';
import { tyreBrands } from '../../constant/tyre_brands_and_details';
import { popularBikeBrand, bikeModelsData, bikeVariantsData } from "../../constant/brand_model_variantofbikes"
import { popularBrand, otherBrand, modelsData, variantsData } from "../../constant/brand_model_variantofcars"
import { tyreData } from '../../constant/tyre_cards_data';

const initialTyreData = tyreData.splice(0, 4)


const SoldTyres = () => {
    const [cardCount, setCardCount] = useState(4)

    const [requiredTyreData, setRequiredTyreData] = useState(initialTyreData)
    const [selectedTyreBrand, setSelectedTyreBrand] = useState("")
    const [selectedSortBy, setSelectedSortBy] = useState("Most Popular")
    const [advancedFilterOption, setAdvancedFilterOption] = useState(false)
    const [selectedVehicleType, setSelectedVehicleType] = useState("")
    const [selectedVehicleBrand, setSelectedVehicleBrand] = useState("")
    const [selectedVehicleModel, setSelectedVehicleModel] = useState("")
    const [selectedVehicleVariant, setSelectedVehicleVariant] = useState("")

    const [searchTerm, setSearchTerm] = useState("")
    const [searchBrand, setSearchBrand] = useState("")
    const [searchModel, setSearchModel] = useState("")
    const [searchVariant, setSearchVariant] = useState("")


    const filteredPopularBrands = tyreBrands.filter(brand =>
        brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectFromBrand = selectedVehicleType === "Car" ? [...popularBrand, ...otherBrand] : selectedVehicleType === "Bike" ? popularBikeBrand : []

    const filteredBrand = selectFromBrand.filter(brand =>
        brand.toLowerCase().includes(searchBrand.toLowerCase())
    )

    const selectFromModel = modelsData[selectedVehicleBrand] || bikeModelsData[selectedVehicleBrand]

    const filteredModel = selectFromModel && selectFromModel.filter(brand =>
        brand.toLowerCase().includes(searchModel.toLowerCase())
    )

    const selectFromVariant = variantsData[selectedVehicleModel] || bikeVariantsData[selectedVehicleModel]

    const filteredVariant = selectFromVariant && selectFromVariant.filter(brand =>
        brand.toLowerCase().includes(searchVariant.toLowerCase())
    )

    useEffect(() => {
        const data = [...tyreData]
        setRequiredTyreData(data.splice(0, cardCount))
    }, [cardCount])

    return (
        <div className="container mx-auto py-3 mt-4" >
            <h2 className="font-bold mb-4">Tyres sold by this Dealer</h2>
            <div className='space-y-4 mb-4'>
                <div className='w-full flex justify-end ml-auto'>
                    <div className='row flex items-center gap-2 md:gap-5'>
                        <div className='col w-full sm:w-4/12 sm:ml-auto'>
                            <Dropdown className='border-gray-200 md:min-w-[150px]' onToggle={() => setSearchTerm("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedTyreBrand ? selectedTyreBrand : "Filter By"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 border-black'>
                                    <div className="p-2">
                                        <input
                                            type="text"
                                            placeholder="Search brand..."
                                            className="form-control focus:ring-0 focus:outline-none w-full"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>

                                    <div className='max-h-[200px] overflow-y-auto no-scrollbar'>
                                        {filteredPopularBrands.length > 0 ? (
                                            filteredPopularBrands.map((brand, index) => (
                                                <Dropdown.Item
                                                    className='p-2 text-base font-semibold'
                                                    onClick={() => {
                                                        setSelectedTyreBrand(brand);
                                                    }}
                                                    key={index}
                                                >
                                                    {brand}
                                                </Dropdown.Item>
                                            ))
                                        ) : (
                                            <div className='p-2 text-gray-500'>No brands found</div>
                                        )}
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='col w-full sm:w-5/12'>
                            <Dropdown className='border-gray-200' onToggle={() => setSearchTerm("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedSortBy}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 border-black'>
                                    <Dropdown.Item
                                        className='p-2 text-base font-semibold'
                                        onClick={() => {
                                            setSelectedSortBy("Most Popular");
                                        }}
                                    >
                                        Most Popular
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className='p-2 text-base font-semibold'
                                        onClick={() => {
                                            setSelectedSortBy("Price High to Low");
                                        }}
                                    >
                                        Price High to Low
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className='p-2 text-base font-semibold'
                                        onClick={() => {
                                            setSelectedSortBy("Prive Low to High");
                                        }}
                                    >
                                        Prive Low to High
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='col w-5/12 sm:w-auto'>

                            <button className=' whitespace-nowrap' onClick={() => setAdvancedFilterOption(!advancedFilterOption)}>
                                <span className='text-blue-500 underline mr-3'>Advanced</span>
                                <i className='bi bi-caret-down'></i>
                            </button>
                        </div>
                    </div>

                </div>
                {advancedFilterOption && <div className='w-full flex justify-end ml-auto'>
                    <div className='row flex items-center gap-1 md:gap-5'>
                        <div className='col w-full sm:w-3/12'>
                            <Dropdown className='border-gray-200 md:min-w-[80px]' onToggle={() => setSearchTerm("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedVehicleType ? selectedVehicleType : "Vehicle Type"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 border-black'>
                                    <Dropdown.Item
                                        className='p-2 text-base font-semibold'
                                        onClick={() => {
                                            setSelectedVehicleBrand("")
                                            setSelectedVehicleType("Car");
                                            setSelectedVehicleModel("")
                                            setSearchModel("")
                                            setSelectedVehicleVariant("")
                                            setSearchVariant("")
                                        }}
                                    >
                                        Car
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className='p-2 text-base font-semibold'
                                        onClick={() => {
                                            setSelectedVehicleBrand("")
                                            setSelectedVehicleType("Bike");
                                            setSelectedVehicleModel("")
                                            setSearchModel("")
                                            setSelectedVehicleVariant("")
                                            setSearchVariant("")
                                        }}
                                    >
                                        Bike
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='col w-full sm:w-3/12'>
                            <Dropdown className='border-gray-200 md:min-w-[150px]' onToggle={() => setSearchBrand("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedVehicleBrand ? selectedVehicleBrand : "Choose Brand"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 max-h-[250px] overflow-scroll no-scrollbar border-black'>
                                    <div className="p-2">
                                        <input
                                            type="text"
                                            placeholder="Search brand..."
                                            className="form-control focus:ring-0 focus:outline-none w-full"
                                            value={searchBrand}
                                            onChange={(e) => setSearchBrand(e.target.value)}
                                        />
                                    </div>
                                    {
                                        filteredBrand.map((brand, idx) => {
                                            return <Dropdown.Item key={idx}
                                                className='p-2 text-base font-semibold'
                                                onClick={() => {
                                                    setSelectedVehicleBrand(brand);
                                                    setSelectedVehicleModel("")
                                                    setSearchModel("")
                                                    setSelectedVehicleVariant("")
                                                    setSearchVariant("")
                                                }}
                                            >
                                                {brand}
                                            </Dropdown.Item>

                                        })
                                    }

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='col w-full sm:w-3/12'>
                            <Dropdown className='border-gray-200 md:min-w-[100px]' onToggle={() => setSearchModel("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedVehicleModel ? selectedVehicleModel : "Choose Model"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 max-h-[250px] overflow-scroll no-scrollbar border-black'>
                                    <div className="p-2">
                                        <input
                                            type="text"
                                            placeholder="Search model..."
                                            className="form-control focus:ring-0 focus:outline-none w-full"
                                            value={searchModel}
                                            onChange={(e) => setSearchModel(e.target.value)}
                                        />
                                    </div>
                                    {
                                        filteredModel && filteredModel.map((brand, idx) => {
                                            return <Dropdown.Item key={idx}
                                                className='p-2 text-base font-semibold'
                                                onClick={() => {
                                                    setSelectedVehicleModel(brand);
                                                    setSelectedVehicleVariant("")
                                                    setSearchVariant("")
                                                }}
                                            >
                                                {brand}
                                            </Dropdown.Item>

                                        })
                                    }

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='col w-full sm:w-3/12'>
                            <Dropdown className='border-gray-200 md:min-w-[120px]' onToggle={() => setSearchVariant("")}>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className='border-gray-300 w-full flex justify-between items-center bg-white text-black rounded-none'
                                >
                                    {selectedVehicleVariant ? selectedVehicleVariant : "Choose Variant"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='w-full border-1 max-h-[250px] overflow-scroll no-scrollbar border-black'>
                                    <div className="p-2">
                                        <input
                                            type="text"
                                            placeholder="Search variant..."
                                            className="form-control focus:ring-0 focus:outline-none w-full"
                                            value={searchVariant}
                                            onChange={(e) => setSearchVariant(e.target.value)}
                                        />
                                    </div>
                                    {
                                        filteredVariant && filteredVariant.map((brand, idx) => {
                                            return <Dropdown.Item key={idx}
                                                className='p-2 text-base font-semibold'
                                                onClick={() => {
                                                    setSelectedVehicleVariant(brand);
                                                }}
                                            >
                                                {brand}
                                            </Dropdown.Item>

                                        })
                                    }

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='col w-full sm:w-3/12'>
                            <button className='bg-red-500 py-2 px-4 rounded'> <i className="bi bi-search text-gray-300"></i> </button>
                        </div>
                    </div>

                </div>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {requiredTyreData.map((tyre, index) => (
                    <TyreCard key={index} {...tyre} />
                ))}
            </div>
            <div className="text-center mt-4">
                {cardCount < tyreData.length && (
                    <button className=" text-gray-400 px-4 py-2 text-sm rounded border border-gray-500 down-arrow" onClick={() => {
                        setCardCount(cardCount + 8)
                    }}>View more</button>
                )}
            </div>
        </div>
    );
};

export default SoldTyres;
