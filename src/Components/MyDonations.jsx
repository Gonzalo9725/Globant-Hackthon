import React, { useEffect, useState } from 'react'
import './MyDonations.css'
import { db,auth } from '../firebase-config'
import FoodCard from './Widgets/FoodCard'
import NavBar from './Widgets/NavBar'

const MyDonations = () => {

    const [firebaseUser, setFirebaseUser] = useState(false)
    const uiUser = firebaseUser.uid
    const ownDonations= db.collectionGroup('food').where('userID.uid', '==', uiUser).orderBy('time', 'desc');
    
    
useEffect(() => {
    
    console.log('1. Entrando al UseEffect')
    const fetchUser = () => {  // Consigue el currentUser
      auth.onAuthStateChanged(user => {
          if(user){
            console.log('2. Entrando al IF del UseEffect')
              setFirebaseUser({ // La guarda en un estado
                displayName : user.displayName, 
                email: 
                user.email,
                uid: user.uid,
                emailVerified: user.emailVerified,
                photoURL: user.photoURL})
          }else{
              setFirebaseUser({})
          }
      })
    }
    fetchUser()
  }, [])
  

    const convertDay = (date) => {
        const myDate = new Date( date *1000);
        return myDate.toLocaleString().slice(0, 10);
    }

    return (
        <div className='myDonations'>
            <NavBar />
            <h1 className='titleFoodSection'>Mis Donaciones:</h1>
            <div className='myDonationsDiv'>
            { ownDonations &&
            ownDonations.map(food => {
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
export default MyDonations


