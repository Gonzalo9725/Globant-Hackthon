import React from 'react'
import './MyDonations.css'
import { firebase } from '../firebase-config'
import FoodCard from './Widgets/FoodCard'

const MyDonations = () => {
        
    return (
        <div>
            <FoodCard/>
        </div>
    )
}

export default MyDonations
