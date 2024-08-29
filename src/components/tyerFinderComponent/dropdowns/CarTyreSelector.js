import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';

import { popularBrand, otherBrand, modelsData, variantsData } from "../../../constant/brand_model_variantofcars"

function CarTyreSelector() {

  const [searchTermModel, setSearchTermModel] = useState('');
  const [searchTermVariant, setSearchTermVariant] = useState('');

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  const [searchTerm, setSearchTerm] = useState('');


  const filteredPopularBrands = popularBrand.filter(brand =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOtherBrands = otherBrand.filter(brand =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModels = selectedBrand
    ? modelsData[selectedBrand].filter(model =>
      model.toLowerCase().includes(searchTermModel.toLowerCase())
    )
    : [];

  const filteredVariants = selectedModel
    ? variantsData[selectedModel].filter(variant =>
      variant.toLowerCase().includes(searchTermVariant.toLowerCase())
    )
    : [];

  return (
    <div className='flex flex-col gap-y-6 px-2 relative'>
      <div className=''>
        <Dropdown className='w-full' onToggle={() => setSearchTerm("")}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='w-full flex justify-between items-center bg-white text-black rounded-none'>
            {selectedBrand ? selectedBrand : 'Choose Brand'}
          </Dropdown.Toggle>

          <Dropdown.Menu className='w-full border-1 border-black mt-2'>
            <div className="p-2">
              <input
                type="text"
                placeholder="Search brand..."
                className="form-control focus:ring-0 focus:outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className='h-[200px] overflow-y-auto no-scrollbar'>
              <div className='bg-white max-h-[100px] overflow-scroll no-scrollbar'>
                <div className='text-red-500 text-base font-semibold block'>
                  <div className='border-1 border-gray-500 px-2'>
                    <span>Popular</span>
                  </div>
                  <div className='h-[100px] overflow-scroll no-scrollbar px-2'>
                    {filteredPopularBrands.map((brand, index) => (
                      <Dropdown.Item className='p-0 py-0.5'
                        onClick={() => {
                          setSelectedBrand(brand);
                          setSelectedModel('');
                          setSearchTermModel('');
                          setSearchTermVariant('');
                          setSelectedVariant("");
                        }}
                        key={index}>{brand}</Dropdown.Item>
                    ))}
                  </div>
                </div>
              </div>
              <div className='bg-white h-[100px] overflow-scroll no-scrollbar'>
                <span className='text-red-500 text-base font-semibold block'>
                  {filteredOtherBrands.length !== 0 && <div className='border-1 border-gray-500 px-2'>
                    <span>Others</span>
                  </div>}
                  <div className='max-h-[100px] overflow-scroll no-scrollbar px-2'>
                    {filteredOtherBrands.map((brand, index) => (
                      <Dropdown.Item className='p-0 py-0.5' onClick={() => {
                        setSelectedBrand(brand);
                        setSelectedModel('');
                        setSearchTermModel('');
                        setSearchTermVariant('');
                        setSelectedVariant("");
                      }}
                        key={index}>{brand}</Dropdown.Item>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <Dropdown className='w-full' onToggle={() => setSearchTermModel("")}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='w-full flex justify-between items-center bg-white text-black rounded-none'>
            {selectedModel ? selectedModel : 'Choose Model'}
          </Dropdown.Toggle>

          <Dropdown.Menu className='w-full border-1 border-black'>
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter model..."
                className="form-control focus:ring-0 focus:outline-none w-full"
                value={searchTermModel}
                onChange={(e) => setSearchTermModel(e.target.value)}
              />
            </div>
            <div className='max-h-[200px] overflow-y-scroll no-scrollbar'>
              {filteredModels.map((model, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setSelectedModel(model)
                    setSelectedVariant("")
                  }}
                >
                  {model}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <Dropdown className='w-full' onToggle={() => setSearchTermVariant("")}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className='w-full flex justify-between items-center bg-white text-black rounded-none'>
            {selectedVariant ? selectedVariant : 'Choose Variant'}
          </Dropdown.Toggle>

          <Dropdown.Menu className='w-full border-1 border-black'>
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter Variant..."
                className="form-control focus:ring-0 focus:outline-none w-full"
                value={searchTermVariant}
                onChange={(e) => setSearchTermVariant(e.target.value)}
              />
            </div>
            <div className='max-h-[200px] overflow-y-auto'>
              {filteredVariants.map((variant, index) => (
                <Dropdown.Item key={index} onClick={() => setSelectedVariant(variant)}>
                  {variant}
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>

      </div>

      <div>
        <button className='w-full bg-red-600 text-white rounded py-3'>Search</button>
      </div>
    </div>
  )
}

export default CarTyreSelector