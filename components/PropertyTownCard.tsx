import React from 'react'
import { Town } from '../typings';
import Info from './Info';

type Props = {
    towns: Town[];
}

const PropertyTownCard = ({ towns }: Props) => {
  return (
    
    
    <div>
    {towns?.map((town) =>(
        <Info key={town._id} town={town}/>
        
        
        
        ))}
    </div>
    
  )
}

export default PropertyTownCard

