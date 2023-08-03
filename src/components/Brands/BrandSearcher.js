import React, { useState } from 'react'
import BrandTile from './BrandTile'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const BrandSearcher = () => {

    const brandData = useSelector(state => state.obo.orderByOutletData);

    // let toRenderData = brandData;

    const [toRenderData, setToRenderData] = useState(brandData);

    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)

        if (value === '') {
            setToRenderData(brandData)
        }
        else {
            setToRenderData(toRenderData.filter((brand) => brand.outletName.toLowerCase().includes(value.toLowerCase())));
        }

    }

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
                <Input
                    value={value}
                    onChange={handleChange}
                    type='text' placeholder='Brand name' />
            </InputGroup>



            <div className="flex flex-wrap mt-5 justify-start">
                {!value && brandData.map((brand) => (
                    <BrandTile key={brand._id} name={brand.outletName} />
                ))}

                {value && toRenderData.map((brand) => (
                    <BrandTile key={brand._id} name={brand.outletName} />
                ))}

            </div>
        </div>
    )
}

export default BrandSearcher