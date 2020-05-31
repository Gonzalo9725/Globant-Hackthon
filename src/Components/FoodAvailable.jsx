import React, { useEffect, useState } from 'react'
import './FoodAvailable.css'
import FoodCard from './Widgets/FoodCard'
import NavBar from './Widgets/NavBar'
import { db } from '../firebase-config'

const FoodAvailable = () => {

    const [foodAvailable, setFoodAvailable] = useState(null)

    useEffect(() => {
        const foodDonations = db.collection('food').orderBy('time', 'desc');
        foodDonations.onSnapshot((querySnapshot) => {
            const food = [];
    
            querySnapshot.forEach(doc => {
              const infoFood = 
                  { dataOrder: doc.data(),
                    id: doc.id }
              food.push(infoFood);
            });

            setFoodAvailable(food)
            console.log(food)
        });
    }, [])

    const convertDay = (date) => {
        const myDate = new Date( date *1000);
        return myDate.toLocaleString().slice(0, 10);
    }

    return (
        <div className='foodAvailable'>
            <NavBar />
            <h1 className='titleFoodSection'>Comida para ser donada:</h1>
            <div className='foodAvailableDiv'>
            { foodAvailable &&
            foodAvailable.map(food => {
                return(
                    <FoodCard
                    key={food.id}
                    title={food.dataOrder.title}
                    qty={food.dataOrder.quantity}
                    exp= {convertDay(food.dataOrder.expiration.seconds)}
                    name= {food.dataOrder.name}
                    contact= {food.dataOrder.phone}
                    isYours={false}
                    category={food.dataOrder.category} />
                )
            })
            }
            </div>
        </div>
    )
}

export default FoodAvailable
