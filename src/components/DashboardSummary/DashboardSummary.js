import React from 'react'
import { Divider } from '@chakra-ui/react'


const DashboardSummary = () => {
    return (
        <div className='container bg-white h-1/5 min-h-[150px] shrink-0 w-full min-w-[375px] p-5 rounded-xl flex items-center justify-evenly'>


            <div className='flex flex-col h-full gap-2 w-full items-center lg:flex-row lg:justify-evenly'>
                <div className='flex flex-col justify-start'>
                    <p className='text-ash lg:text-2xl'>
                        Total orders
                    </p>
                    <p className='text-primary text-2xl lg:text-4xl font-bold'>
                        136
                    </p>
                </div>
                
                <Divider className='lg:hidden' borderWidth='thin' borderColor='blackAlpha.500' />
                <Divider className='hidden lg:block' orientation='vertical' borderWidth='thin' borderColor='blackAlpha.500' />

                <div className='flex flex-col justify-start'>
                    <p className='text-ash lg:text-2xl'>
                        Total sales
                    </p>
                    <p className='text-primary text-2xl lg:text-4xl font-bold'>
                        32652৳
                    </p>
                </div>

            </div>


            <Divider orientation='vertical' borderWidth='thin' borderColor='blackAlpha.500' />

            <div className='flex flex-col h-full gap-2 w-full items-center lg:flex-row lg:justify-evenly'>
                <div className='flex flex-col justify-start'>
                    <p className='text-ash lg:text-2xl'>
                        Dispatched orders
                    </p>
                    <p className='text-primary text-2xl lg:text-4xl font-bold'>
                        32652৳
                    </p>
                </div>

                <Divider className='lg:hidden' borderWidth='thin' borderColor='blackAlpha.500' />
                <Divider className='hidden lg:block' orientation='vertical' borderWidth='thin' borderColor='blackAlpha.500' />

                <div className='flex flex-col justify-start'>
                    <p className='text-ash lg:text-2xl'>
                        Avg. basket value
                    </p>
                    <p className='text-primary text-2xl lg:text-4xl font-bold'>
                        370৳
                    </p>
                </div>

            </div>






        </div>
    )
}

export default DashboardSummary