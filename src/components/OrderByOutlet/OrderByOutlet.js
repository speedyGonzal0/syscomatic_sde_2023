import React from 'react'
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const OrderByOutlet = () => {


    const data = useSelector(state => state.obo.orderByOutletData);

      
    return (
        <div className='container bg-white min-h-[400px] shrink-0 w-full min-w-[375px] p-5 rounded-xl flex flex-col gap-1'>
            <p className='text-lg font-bold'>
                Total orders by outlet
            </p>
            <hr className='border-[1px] border-primary w-36 max-w-[144px]' />

            <ResponsiveContainer width='100%' height='100%'> 
                <BarChart data={data} layout='vertical'>
                    <YAxis type="category" padding={{ left: 20 }} dataKey="outletName" hide/>
                    <XAxis type='number' dataKey="totalOrderAmount" />
                    <Tooltip />
                    <Bar dataKey="totalOrderAmount" fill="#F15B25" >
                        <LabelList fontSize={10} width={300} dataKey="outletName" position="right" style={{ fill: "black" }} />
                    </Bar>
                    
                </BarChart>

            </ResponsiveContainer>
        </div>
    )
}

export default OrderByOutlet