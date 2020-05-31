import React from 'react'
import './FoodAvailable.css'
import FoodCard from './Widgets/FoodCard'

const FoodAvailable = () => {
    return (
        <div>
            <h1>Comida para ser donada:</h1>
            <FoodCard
            title='Papas a granel'
            qty='2 Kg'
            exp='11/07/2020'
            name= 'María Pérez'
            contact='+56 9 5882 5528' 
            isYours={true}
            category='Frutas y Vegetales' />
        </div>
    )
}

export default FoodAvailable
