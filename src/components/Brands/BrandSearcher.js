import React from 'react'
import BrandTile from './BrandTile'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const BrandSearcher = () => {
    return (
        <div className='container bg-white shrink-0 min-h-[150px] w-full min-w-[375px] p-5 rounded-xl flex flex-col gap-1'>
            <p className='text-lg font-bold'>
                Available Brands
            </p>
            <hr className='border-[1px] border-primary w-36 max-w-[144px]' />

            <InputGroup className='mt-5'>
                <InputLeftElement pointerEvents='none'>
                    <i className="material-symbols-outlined">
                        search
                    </i>
                </InputLeftElement>
                <Input type='text' placeholder='Brand name' />
            </InputGroup>



            <div className="flex flex-wrap mt-5">
                <BrandTile />
            </div>
        </div>
    )
}

export default BrandSearcher