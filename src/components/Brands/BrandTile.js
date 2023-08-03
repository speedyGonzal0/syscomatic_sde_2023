import React from 'react'

const BrandTile = ( {name} ) => {
  return (
    <div className='container bg-primaryLight outline outline-primary shrink-0 h-[10px] min-h-[10px]  w-fit min-w-fit max-w-[200px] p-5 m-2 rounded-xl flex justify-center items-center cursor-pointer'>
        <p className='text-lg font-bold'>
            {name}
        </p>
    </div>
  )
}

export default BrandTile