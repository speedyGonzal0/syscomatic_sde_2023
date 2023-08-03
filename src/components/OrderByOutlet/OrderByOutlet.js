import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const OrderByOutlet = () => {

    const data = [
        {
            "_id": "644eb4adde4acae9ffddb809",
            "outletName": "Onnow-Tejgaon",
            "totalOrderAmount": 82261
        },
        {
            "_id": "6482e605963129aabc111202",
            "outletName": "Wrappo-(BYLC-Career-Expo)",
            "totalOrderAmount": 81765
        },
        {
            "_id": "644eb612848356fddbcfe4a5",
            "outletName": "Friggy's-Tejgaon",
            "totalOrderAmount": 15000
        },
        {
            "_id": "644eb612848356fddbcfe499",
            "outletName": "Wrappo-Tejgaon",
            "totalOrderAmount": 10079
        },
        {
            "_id": "644eb612848356fddbcfe477",
            "outletName": "Friggy's-Moghbazar",
            "totalOrderAmount": 7020
        },
        {
            "_id": "644eb612848356fddbcfe4c9",
            "outletName": "Onnow-Moghbazar",
            "totalOrderAmount": 5083
        },
        {
            "_id": "644eb612848356fddbcfe4b0",
            "outletName": "Wrappo-Moghbazar",
            "totalOrderAmount": 3829
        },
        {
            "_id": "644eb612848356fddbcfe46d",
            "outletName": "Party Pizza (Tejgaon)",
            "totalOrderAmount": 3422
        },
        {
            "_id": "6464b5d3d12ff393e3530be5",
            "outletName": "Fuiyoh (Tejgaon)",
            "totalOrderAmount": 952
        },
        {
            "_id": "644eb4adde4acae9ffddb7f5",
            "outletName": "Snackmate-Tejgaon",
            "totalOrderAmount": 940
        },
        {
            "_id": "644eb2f74a7c1a885937ffff",
            "outletName": "Snackmate (Moghbazar)",
            "totalOrderAmount": 750
        },
        {
            "_id": "6465c44fd12ff393e3537252",
            "outletName": "Fuiyoh (Moghbazar)",
            "totalOrderAmount": 680
        },
        {
            "_id": "6465bf0ad12ff393e3535f6b",
            "outletName": "Hangrry (Tejgaon)",
            "totalOrderAmount": 620
        },
        {
            "_id": "644eb612848356fddbcfe481",
            "outletName": "Party Pizza (Moghbazar)",
            "totalOrderAmount": 570
        },
        {
            "_id": "6465c0d9d12ff393e353676b",
            "outletName": "Hangrry (Moghbazar)",
            "totalOrderAmount": 540
        },
        {
            "_id": "64649c80d12ff393e352ff7b",
            "outletName": "Burger Oppa (Tejgaon)",
            "totalOrderAmount": 270
        },
        {
            "_id": "6481be89b4fbe6b69adf8bed",
            "outletName": "Wrappo (BYLC Career Expo)",
            "totalOrderAmount": 0
        }
    ]

      
    return (
        <div className='container bg-white min-h-[400px] shrink-0 w-full min-w-[375px] p-5 rounded-xl flex flex-col gap-1'>
            <p className='text-lg font-bold'>
                Total orders by outlet
            </p>
            <hr className='border-[1px] border-primary w-36 max-w-[144px]' />

            <ResponsiveContainer width='100%' height='100%'> 
                <BarChart data={data} layout='vertical' barCategoryGap={1}>
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