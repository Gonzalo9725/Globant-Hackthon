// import React, { useEffect, useState } from 'react'
// import './MyDonations.css'
// import { db,auth } from '../firebase-config'
// import FoodCard from './Widgets/FoodCard'
// import NavBar from './Widgets/NavBar'

// const MyDonations = () => {

//     const [firebaseUser, setFirebaseUser] = useState(false)
//     const [foodAvailable, setFoodAvailable] = useState(null)
    
    
// useEffect(() => {
//     async function getUser () {
//         console.log(localStorage.getItem("user"))
//         const userString = localStorage.getItem("user")
//         let currentUser = await JSON.parse(localStorage.getItem(userString));
//         console.log('skjfd', currentUser)
//         setFirebaseUser(currentUser);
//         console.log(firebaseUser)
//         const uiUser = firebaseUser.uid
//         const ownDonations = db.collectionGroup('food').where('userID.uid', '==', uiUser).orderBy('time', 'desc');
//         ownDonations.onSnapshot((querySnapshot) => {
//             const food = [];
//             querySnapshot.forEach(doc => {
//               const infoFood = 
//                   { dataOrder: doc.data(),
//                     id: doc.id }
//               food.push(infoFood);
//             });
//             setFoodAvailable(food)
//         })
//     }
//     getUser()
//   }, [])
  

//     const convertDay = (date) => {
//         const myDate = new Date( date *1000);
//         return myDate.toLocaleString().slice(0, 10);
//     }

//     return (
//         <div className='myDonations'>
//             <NavBar />
//             <h1 className='titleFoodSection'>Mis Donaciones:</h1>
//             <div className='myDonationsDiv'>
//             { foodAvailable &&
//             foodAvailable.map(food => {
//                 return(
//                     <FoodCard
//                     key={food.id}
//                     title={food.dataOrder.title}
//                     qty={food.dataOrder.quantity}
//                     exp= {convertDay(food.dataOrder.expiration.seconds)}
//                     name= {food.dataOrder.name}
//                     contact= {food.dataOrder.phone}
//                     isYours={false}
//                     category={food.dataOrder.category} />
//                 )
//             })
//             }
//             </div>
//         </div>
//     )
// }
// export default MyDonations


