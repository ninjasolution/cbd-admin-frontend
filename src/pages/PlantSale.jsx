import React from 'react'
import {CartIcon} from '../icons';
import ContentTitle from './../components/common/ContentTitle/ContentTitle';
import PreSale from './../components/common/PreSale/PreSale';
import BuyingPlants from './../components/PlantSale/BuyingPlants';
import platIcon from "../images/planet.PNG"

function PlantSale() {
    return (<div>
        <ContentTitle text="PLANT SALE" imgSrc={platIcon}/>
        <PreSale />
        <BuyingPlants />
    </div>)
}

export default PlantSale