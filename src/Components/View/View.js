import React,{useEffect,useState,useContext, useTransition} from 'react';
import app, { storage } from "../../firebase/config";
import { getFirestore, collection, getDocs,query,where } from "firebase/firestore"; 
import './View.css';
import { PostContext } from '../../store/PostContext';


function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext);
  const db = getFirestore(app);

  useEffect(()=>{
    const {userId} = postDetails
    const eventsCollection = collection(db, "users");
    const q = query(eventsCollection, where('id', '==', userId));
    getDocs(q).then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
        
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span> {postDetails.name} </span>
          <p> {postDetails.category} </p>
          <span> {postDetails.createdAt} </span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p> {userDetails.phone} </p>
        </div> }
      </div>
    </div>
  );
}
export default View;
