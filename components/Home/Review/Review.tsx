import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt20 pb-20 items-center justify-center flex-col bg-[#13357b]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div>
          <h1 className='text-2xl font-semibold text-white'>What our customers are saying about us?</h1>
          <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis excepturi necessitatibus corrupti mollitia iusto odit quasi architecto quibusdam ipsum?</p>
          {/* Rating */}
          <div className='mt-6 flex items-center space-x-6'>
            <div>
              <p className='text-2xl font-bold text-white'>4.88</p>
              <p className='text-white mb-2'>Overall Rating</p>
              <div className='flex items-center'>
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className='mt-20 overflow-hidden'>
          <ReviewSlider />
        </div>
      </div>
    </div>
  )
}

export default Review
