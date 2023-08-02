import React from 'react'
import Logo from '../../layout/Logo.svg'
import { Divider } from '@chakra-ui/react'

function Sidebar() {

    return (
        <nav className='flex flex-col w-80 min-h-full fixed items-center'>
            <div className='navHeader h-24 min-h-full w-full bg-primary flex items-center justify-center'>
                <img src={Logo} alt="Onnow.io" className='w-48 cursor-pointer' />
            </div>

            <div className='navBody h-screen w-full overflow-auto flex flex-col items-center'>
                <ul className='flex flex-col gap-8 items-start mt-14'>
                    <li className='cursor-pointer w-full flex gap-1 text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            dashboard
                        </i>
                        <p className='text-2xl font-bold'> Dashboard </p>
                    </li>

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            lunch_dining
                        </i>
                        <p className='text-2xl'>Live orders</p>
                    </li>

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            deployed_code
                        </i>
                        <p className='text-2xl'> Inventory </p>
                    </li>

                    <Divider borderWidth='thin' borderColor='blackAlpha.500' />


                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            category
                        </i>
                        <p className='text-2xl'> Brands </p>
                        <i className="material-symbols-outlined text-2xl ml-5">
                            chevron_right
                        </i>
                    </li>

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            restaurant_menu
                        </i>
                        <p className='text-2xl'> Menu </p>
                    </li>

                    <Divider borderWidth='thin' borderColor='blackAlpha.500' />

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            switch_account
                        </i>
                        <p className='text-2xl'> Customers </p>
                    </li>

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            history
                        </i>
                        <p className='text-2xl'> Order History</p>
                    </li>

                    <Divider borderWidth='thin' borderColor='blackAlpha.500' />


                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl">
                            person
                        </i>
                        <p className='text-2xl'> Edit profile </p>
                    </li>

                    <li className='cursor-pointer w-full flex gap-1 text-ash hover:text-primary'>
                        <i className="material-symbols-outlined text-2xl rotate-180">
                            logout
                        </i>
                        <p className='text-2xl'> Logout </p>
                    </li>


                </ul>
                
            </div>



        </nav>
    )
}

export default Sidebar