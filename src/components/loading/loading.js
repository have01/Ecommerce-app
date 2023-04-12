import React from 'react'
import { BarLoader } from 'react-spinner-animated';
const loading = () => {
    return (
        <div className='container mx-auto flex justify-center items-center h-[600px]'>
            <BarLoader text={"Loading..."}
                center={false} width={"150px"} height={"150px"} />
        </div >
    )
}

export default loading