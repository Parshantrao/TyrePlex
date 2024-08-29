import React from 'react';

const TyreCard = ({ brand, model, size, price, rating, reviews, imageUrl, warranty, offer, tyreType }) => {
    return (
        <div className="border overflow-hidden rounded-lg shadow-sm bg-white">
            <div className='flex relative'>
                <div className='col w-8/12 pl-3 pt-3'>
                    <div>
                        <div className='mb-2'>
                            {brand}
                            <span className='text-[14px] tracking-wide font-[400] text-black '>{model}</span>
                        </div>


                        <p className="text-gray-400 text-sm py-4">{size}</p>

                        <div className="flex items-center text-green-600">
                            <span className="bg-green-600 text-white px-1.5 py-0.5 rounded text-sm mr-2 flex gap-1">
                                <i className='bi bi-star-fill'></i> {rating}
                            </span>
                            <span className="text-gray-400 text-[12px]">{reviews} Reviews</span>
                        </div>
                        <p className="font-[500] text-lg text-gray-800 mt-2">{price}</p>
                        <div className='text-green-600 text-xs my-3'>{offer}</div>
                        <span className='text-gray-400 text-xs'>{tyreType}</span>
                    </div>
                </div>
                <div className='col w-4/12'>
                    <span className="warranty-tag">
                        {warranty}
                    </span>
                    <img src={imageUrl} alt='icon' className='absolute w-44 bottom-[-35px] right-[-70px] z-10' />

                </div>
            </div>
        </div>
    );
};

export default TyreCard;
