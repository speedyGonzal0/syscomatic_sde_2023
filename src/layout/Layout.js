import { Drawer, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import Logo from '../assets/Logo.svg'
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardSummary from '../components/DashboardSummary/DashboardSummary';
import CustomerStats from '../components/CustomerStats/CustomerStats';
import OrderByOutlet from '../components/OrderByOutlet/OrderByOutlet';


const Layout = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <div className='flex flex-col h-screen'>
            <div className='sticky bg-primary h-16 min-h-[64px] flex items-center justify-start pl-2 gap-3 lg:hidden'>
                <button className='flex items-center justify-center' onClick={onOpen}>
                    <i className="material-symbols-outlined text-secondary">
                        menu
                    </i>
                </button>

                <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <Sidebar />
                    </DrawerContent>
                </Drawer>


                <img src={Logo} alt="Onnow.io" className='w-36 cursor-pointer' />
            </div>

            <div className='hidden lg:contents'>
                <Sidebar />
            </div>

            <main className='mainContent flex flex-col gap-5 items-center h-full p-2 lg:p-5 overflow-auto bg-background lg:ml-80 lg:py-14'>
                <DashboardSummary />
                <div className="flex flex-col items-center w-full gap-5 ">
                    <OrderByOutlet />

                </div>
                <CustomerStats />
            </main>
        </div>
    )
}

export default Layout