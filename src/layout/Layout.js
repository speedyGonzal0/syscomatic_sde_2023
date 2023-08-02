import { useState } from 'react'
import { Drawer, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import Logo from './Logo.svg'
import Sidebar from '../components/Sidebar/Sidebar';


function Layout() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = useState('left');


    return (
        <div className='flex flex-col h-screen'>
            <div className='sticky bg-primary h-16 flex items-center justify-start pl-2 gap-3 lg:hidden'>
                <button className='flex items-center justify-center' onClick={onOpen}>
                    <i class="material-symbols-outlined text-secondary">
                        menu
                    </i>
                </button>

                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <Sidebar/>                        
                    </DrawerContent>
                </Drawer>


                <img src={Logo} alt="Onnow.io" className='w-36 cursor-pointer' />
            </div>

            <div className='hidden lg:contents'>
                <Sidebar/>
            </div>

            <main className='mainContent h-full p-5 overflow-y-auto bg-background lg:ml-80'>

                Main
            </main>
        </div>
    )
}

export default Layout