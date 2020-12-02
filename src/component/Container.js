import React from 'react'
import {useSelector, useDispatch, connect } from 'react-redux'
import showdata from '../redux/action'
import LoggedIn from '../redux/action'



function Container(props){
    console.log('container',props.name)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()
return(
    <div>
    
{/*<button onClick={()=> dispatch(showdata())}></button>*/}
        
    </div>
)
}


const mapStateToProps = state => {
    return{
        name: state,
        //UserName: state.name

    }
}

const mapDispatchToProps = dispatch => {
    return{
        
        ChangeName:(name)=>{dispatch({type:"SHOW_DATA", payload:name})}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Container)