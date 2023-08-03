import { Drawer, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react';
import Logo from '../assets/Logo.svg'
import Sidebar from '../components/Sidebar/Sidebar';
import DashboardSummary from '../components/DashboardSummary/DashboardSummary';
import CustomerStats from '../components/CustomerStats/CustomerStats';
import OrderByOutlet from '../components/OrderByOutlet/OrderByOutlet';
import BrandSearcher from '../components/Brands/BrandSearcher';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useCallback, useEffect, useMemo } from 'react';
import { summaryActions } from '../store/dashboardSummary';
import { ordersByOutletActions } from '../store/orderByOutlet';
import { customerStatsActions } from '../store/customerStats';


const Layout = () => {

    const BASE_URL = 'https://staging.syscomatic.com/api/v1';
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDRlNzRmNzkwMjJmMTA1M2IyNTQyMWUiLCJyb2xlIjoiU0EiLCJpYXQiOjE2OTA4ODg2NjgsImV4cCI6MTY5MTE0Nzg2OH0.aNjdjv9D-FxWi-Ji3uPXXl0p42cgBm34mF7TA7FnDsY";
    
    const config = useMemo(() => ({
        headers: { Authorization: `Bearer ${token}` }
    }) , [])

    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const getSummary = useCallback(        
      () => {
        axios.get(BASE_URL + '/dashboard/tta', config)
            .then(response => {
                dispatch( summaryActions.setState(response.data));
            })
            .catch(err => console.log(err))
      },
      [config, dispatch],
    )

    const getOrdersByOutlet = useCallback(
      () => {
        axios.get(BASE_URL + '/dashboard/total-orders-by-outlet', config)
        .then(response => {
            dispatch( ordersByOutletActions.setState(response.data) )
        })
        .catch(err => console.log(err))
      },
      [config, dispatch],
    )


    const getCustomerStats = useCallback(        
        () => {
          axios.get(BASE_URL + '/dashboard/returning-x-new-customer', config)
              .then(response => {
                  dispatch(customerStatsActions.setState(response.data));
              })
              .catch(err => console.log(err))
        },
        [config, dispatch],
      )

    


    useEffect(() => {
      getSummary();   
      getOrdersByOutlet();
      getCustomerStats();
    }, [getCustomerStats, getOrdersByOutlet, getSummary])
    


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

            <main className='mainContent flex flex-col gap-5 items-center h-full p-2 lg:p-5 overflow-y-auto bg-background lg:ml-80 lg:py-14'>
                <DashboardSummary />
                <div className="flex flex-col items-center w-full gap-5 ">
                    <OrderByOutlet />

                </div>
                <CustomerStats />
                <BrandSearcher />
            </main>
        </div>
    )
}

export default Layout