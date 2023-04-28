import React, {useEffect, useState} from 'react'

// Import useParams

import { useParams } from 'react-router-dom';

// Import Componentes

import ItemList from '../ItemList/ItemList'


// Import Style

import './itemDetail.css';

// Import Firebase

import { db } from '../../firebaseConfig/firebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";




//DOM

const ItemDetail = () => {

  const [ItemDetail, setItemDetail] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      const q = query(collection(db, "items"), where(documentId, "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setItemDetail(docs);
    };
    getCategories();
  }, []);



  return (
    <div>
      <h1 className='tittlestyle'>{id.price}</h1>
      <div className='componentStyle'>
        {ItemDetail.map((data) => {
          return <ItemList data={ItemDetail} key={ItemDetail.id} />;    
        })} 
      </div>


      <button onClick={{}} style={{marginLeft:'5px',marginTop:'10px', marginRight:'10px', height:'30px', width:'125px',background:'black',color:'white'}}>Agregar al carrito</button>
      <button onClick={{}} style={{marginLeft:'5px',marginTop:'10px', marginRight:'10px', height:'30px', width:'125px',background:'black',color:'white'}}>Quitar al carrito</button>

    </div>
  )
}

export default ItemDetail;
