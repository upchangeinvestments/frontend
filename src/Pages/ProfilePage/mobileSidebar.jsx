import React from 'react';
import {
    Drawer,
} from "@material-tailwind/react";
import Sidebar from './Sidebar';


function MobileSidebar({ open, handleIncomingData }) {
    return (
        <Drawer open={open} className="fixed left-0 top-0 z-50" >
            <Sidebar sendDataToProfile={handleIncomingData} />
        </Drawer>
    )
}

export default MobileSidebar