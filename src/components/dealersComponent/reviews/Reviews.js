import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { reviews } from '../../../constant/reviews';

function Reviews() {
    const items = reviews.map((review, idx) => {
        return (
            <div className='h-full mr-2' key={idx}>
                <div className='flex flex-col justify-between h-full rounded-lg border-1 border-slate-300 p-3 min-h-[140px]'>
                    <div>
                        <div className="flex items-center mb-2 space-x-2">
                            <span className='flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-pink-600 text-white text-lg md:text-xl'>
                                {review.name[0]}
                            </span>
                            <span className="text-gray-800 font-bold text-sm">
                                {review.name}
                            </span>
                        </div>

                        <p className='text-slate-500 overflow-hidden max-h-[4.5em] line-clamp-3'>
                            {review.comment}
                        </p>
                    </div>
                </div>
            </div>
        );
    });


    const responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1024: {
            items: 3,
        },

    };
    return (
        <div className=''>
            <h1 className='font-bold mb-4'>
                <span className='mr-3'>2278</span>
                Google Reviews
            </h1>
            <div>
                <AliceCarousel touchMoveDefaultEvents disableButtonsControls={true} disableDotsControls={true} mouseTrackspan responsive={responsive} items={items}
                autoPlay={true} autoPlayInterval={5000} paddingRight={0}
                    autoWidth={false}
                    infinite={false}
                    swipeExtraPadding={0}
                    disableSlideInfo={true} />
            </div>
        </div>
    )
}

export default Reviews