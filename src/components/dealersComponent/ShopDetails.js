import React, { useEffect, useState } from 'react'
import Reviews from './reviews/Reviews'
import AliceCarousel from 'react-alice-carousel';


function ShopDetails() {
  const items = [
    <div className='h-full mr-3' key="1">
      <div className='flex flex-col justify-between h-full rounded-lg min-h-[140px]'>
        <img
          src='https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300'
          alt='img'
          className='max-h-[200px] w-fit min-h-[140px]'
        />
      </div>
    </div>,
    <div className='h-full mr-3' key="2">
      <div className='flex flex-col justify-between h-full rounded-lg min-h-[140px]'>
        <img
          src='https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300'
          alt='img'
          className='max-h-[200px] w-fit min-h-[140px]'
        />
      </div>
    </div>,
    <div className='h-full mr-3' key="3">
      <div className='flex flex-col justify-between h-full rounded-lg min-h-[140px]'>
        <img
          src='https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300'
          alt='img'
          className='max-h-[200px] w-fit min-h-[140px]'
        />
      </div>
    </div>,
    <div className='h-full mr-3' key="4">
      <div className='flex flex-col justify-between h-full rounded-lg min-h-[140px]'>
        <img
          src='https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300'
          alt='img'
          className='max-h-[200px] w-fit min-h-[140px]'
        />
      </div>
    </div>,
  ];

  const responsive = {
    0: {
      items: 2,
    },
    768: {
      items: 2
    },
    1440: {
      items: 3
    }
  };
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setKey(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);

    // Trigger initial recalculation after first render
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] p-3 mt-4 md:pb-10'>

      <div className='row mb-4 lg:mb-10 pr-0 space-y-5'>
        <div className='col w-full md:w-5/12 space-y-4'>
          <div className='flex items-center md:space-x-2'>
            <span className='text-xl font-bold'>SHREE HEMKUNT TYRES AND SERIVCES</span>
            <span className='text-green-600 font-semibold inline-flex items-center'>
              <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/newIconSprite.webp?v=2300&tr=q-60')] h-[18px] w-[18px]"
                alt=''
                style={{ backgroundPositionY: '-69px', backgroundSize: '122px', backgroundPosition: '-68px -98px' }}
              ></span> Verified</span>
          </div>
          <div>
            <div className='align-middle gap-2 flex items-center'>
              <span className='bg-green-600 px-1.5 py-0.5 rounded text-white text-center leading-none'>4.9</span>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, index) => (
                  <i key={index} className={`bi bi-star-fill ${index < 4.9 ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                ))}
              </div>
              <span>2278 Reviews</span>
              <button className='text-gray-500 px-2 py-0.5 rounded border-2'>Rate</button>
            </div>
            <div>

            </div>
            <div className='flex gap-3 px-2'>
              <div className=''>
                <i className="bi bi-geo-alt-fill text-gray-500"></i>
              </div>
              <span className='font-normal text-neutral-900 text-[14px]'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, GHAZIABAD, Uttar Pradesh, 201014</span>
            </div>
            <div className='flex px-2'>
              <div>
                <i className="bi bi-clock text-gray-500 mr-3"></i>
              </div>
              <span className='text-gray-500'>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
            </div>
          </div>
          <button className='lg:mt-7 border-1 rounded border-red-600 bg-white text-red-600 p-2 font-bold'>Get Directions</button>
        </div>
        <div className='col w-full md:w-7/12 pr-0 flex items-center justify-center'>
          <AliceCarousel touchMoveDefaultEvents disableButtonsControls={true} disableDotsControls={true} mouseTrackspan responsive={responsive} items={items}
          mouseTracking={true}
            paddingRight={0}
            autoWidth={false}
            infinite={false}
            swipeExtraPadding={0}
            disableSlideInfo={true}
          />
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default ShopDetails