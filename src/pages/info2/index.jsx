import React from 'react'
import { UseGetData } from "../../utils/hooks/getData";
import Info from '../../components/info/info';
function Info2() {
    const {data: information, isLoading, isError} = UseGetData(["information"], '/information');
  console.log(information, 1111111);
  const item = information?.data?.[information?.data?.length - 1]
  return (
    
    <div>

        <div>
        
        <Info phone={item?.phone}
        address={item?.address}
        addressMap={item?.addressMap}
        email={item?.email}/>
       
         
        
        </div>
    </div>
  )
}

export default Info2
