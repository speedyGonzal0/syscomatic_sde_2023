import React from 'react'

const BrandTile = ( {name} ) => {
  return (
    <div className='container bg-primaryLight outline outline-primary shrink-0 h-[10px] min-h-[10px]  w-fit p-5 m-2 rounded-xl flex justify-center items-center cursor-pointer'>
        <p className='text-2xl font-bold'>
            {name}
        </p>
    </div>
  )
}

export default BrandTile