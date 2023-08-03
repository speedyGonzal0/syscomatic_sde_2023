import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const CustomerStats = () => {

    const customerData = useSelector(state => state.customerStats.customerData);

    return (
        <div className='container bg-white shrink-0 min-h-[150px] w-full min-w-[375px] p-5 rounded-xl flex flex-col gap-1'>
            <p className='text-lg font-bold'>
                New customers X Returning customers
            </p>
            <hr className='border-[1px] border-primary w-36 max-w-[144px]' />

            <TableContainer className='mt-5'>
                <Table variant='simple' size='md'>
                    <Thead className='bg-secondary'>
                        <Tr>
                            <Th>Category</Th>
                            <Th ># of orders</Th>
                            <Th ># of customers</Th>
                            <Th >% of customers</Th>
                            <Th >Avg. basket</Th>
                            <Th >Total sales</Th>
                            <Th ># of Total order</Th>
                            <Th >ACV</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td className='text-primary font-bold'> {customerData[0].category} </Td>
                            <Td > {customerData[0].orders} </Td>
                            <Td >{customerData[0].customers}</Td>
                            <Td > {customerData[0].customerPercentage}</Td>
                            <Td > 12312 </Td>
                            <Td >{customerData[0].totalOrderAmount}</Td>
                            <Td >1312</Td>
                            <Td > {customerData[0].acv.toFixed(2)}</Td>
                        </Tr>
                        <Tr>
                            <Td className='text-primary font-bold'> {customerData[1].category} </Td>
                            <Td > {customerData[1].orders} </Td>
                            <Td >{customerData[1].customers}</Td>
                            <Td > {customerData[1].customerPercentage}</Td>
                            <Td > 12312 </Td>
                            <Td >{customerData[1].totalOrderAmount}</Td>
                            <Td >1312</Td>
                            <Td > {customerData[1].acv.toFixed(2)}</Td>
                        </Tr>
                        <Tr>
                            <Td className='text-primary font-bold'> Total </Td>
                            <Td > {customerData[0].orders + customerData[1].orders} </Td>
                            <Td >{customerData[0].customers + customerData[1].customers}</Td>
                            <Td > {(Number(customerData[0].customerPercentage) + Number(customerData[1].customerPercentage))}</Td>
                            <Td > 12312 </Td>
                            <Td >{customerData[0].totalOrderAmount + customerData[1].totalOrderAmount}</Td>
                            <Td >1312</Td>
                            <Td > {(customerData[0].acv + customerData[1].acv).toFixed(2)}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default CustomerStats