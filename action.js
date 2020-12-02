import SHOW_DATA from './type'



const showdata =(name)=> {

console.log('action', name)
    return {
        type:SHOW_DATA, 
        
        payload:name  
        
    }
}
export default showdata 


