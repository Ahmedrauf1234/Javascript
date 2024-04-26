import React, { useEffect, useRef, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase/Firebaseconfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs } from "firebase/firestore";

const Home = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const age = useRef();
  const city = useRef();
  const [data , setData] = useState(null)
  //=========================firebase calling data to rendering====================>>
  useEffect(()=>{
    let Arr = []
    const  getData = async ()=>{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      Arr.push(doc.data())
    });
    setData(Arr)
    console.log(Arr)
    }
    getData();
  },[])
  //===========================End=========================>>
//================Auth state change==================>>
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
   navigate('./Login')
  }
});
//===================================End===================>>
//======================storing data firebase=======================>>
const addData = async(event)=>{
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: username.current.value,
      email: email.current.value,
      age: age.current.value,
      city: city.current.value,
      uid: auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}
//==========================End========================>>
const logoutBtn = ()=>{
signOut(auth).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log('internet problem',error);
});

}

  return (
    <>
    <h1>User data</h1>
    <form onSubmit={addData}>
      <input type="text" placeholder='Enter Username' ref={username}/> <br /> <br />
      <input type="email" placeholder='Enter email' ref={email}/> <br /> <br />
      <input type="text" placeholder='Enter age' ref={age}/> <br /> <br />
      <input type="text" placeholder='Enter city' ref={city}/> <br /> <br />
      <button typeof='submit'>Submit</button> <br /> <br />
      </form>
      <button onClick={logoutBtn}>Logout</button>

    <div>
      {data ? data.map((items , index)=>{
        return <div key={index}>
          {console.log(items)}
          <h1>Username : {items.username}</h1>
          <h1>Email : {items.email}</h1>
          <h1>Age  : {items.age}</h1>
          <h1>City : {items.city}</h1>

        </div>

      }): <h1>Loading...</h1>}
    </div>
    </>
  )
}

export default Home