/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

const Thumbnail = forwardRef(({ result }, ref) => {
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
        layout="responsive"
        height={80}
        width={80}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transiton-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}&nbsp;
          {result.release_date || result.first_air_date}•&nbsp;
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
