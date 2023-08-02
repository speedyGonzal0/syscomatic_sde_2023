import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const CustomerStats = () => {
    return (
        <div className='container bg-white  min-h-[150px] w-full min-w-[375px] p-5 rounded-xl flex flex-col gap-1'>
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
                            <Td className='text-primary font-bold'> New </Td>
                            <Td > 143 </Td>
                            <Td >25.4</Td>
                            <Td  > 12</Td>
                            <Td >25.4</Td>
                            <Td >1231</Td>
                            <Td >25.4</Td>
                            <Td > 1231</Td>
                        </Tr>
                        <Tr>
                            <Td className='text-primary font-bold'> Returning </Td>
                            <Td > 143 </Td>
                            <Td >25.4</Td>
                            <Td  > 12</Td>
                            <Td >25.4</Td>
                            <Td >1231</Td>
                            <Td >25.4</Td>
                            <Td > 1231</Td>
                        </Tr>
                        <Tr>
                            <Td className='text-primary font-bold'> Total </Td>
                            <Td > 143 </Td>
                            <Td >25.4</Td>
                            <Td  > 12</Td>
                            <Td >25.4</Td>
                            <Td >1231</Td>
                            <Td >25.4</Td>
                            <Td > 1231</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default CustomerStats