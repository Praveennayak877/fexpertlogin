import { Redirect } from "react-router-dom";
import SHOW_DATA from './type'
import Login from '../component/login'
import Saved from '../component/saved'

import React from 'react'


        const iState = {
            name: 'User name',
        
        }


const proceedToSaved=()=>{
   return (<Redirect to='/Saved'></Redirect>);
}

const reducer = (state=iState,action) => {
   switch (action.type) {
       case SHOW_DATA:
           return[state, action.payload];
           
   
       default:
           return state;
   }

    
   
        
    
}

export default reducer