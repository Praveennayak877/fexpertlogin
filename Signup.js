import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, TextField } from '@material-ui/core'
//import Main from './main';







class Signup extends Component {

    constructor(props){
        super(props)

        this.state = {
            Name: '',
            LastName:'',
            Email: '',
            Mobile:'',
            password: '',
           //Gender: 'Male',
            NameError: '',
            EmailError: '',
            PasswordError: '',
            confirmpassword: '',
            toggleDrawer1:true
        }
    }
    handleNameChange = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    handleMobileChange = (event) => {
        this.setState({
            Mobile: event.target.value
        })
    }
   // handleGenderChange = event => {
     //   this.setState({
       //     Gender: event.target.value
        //})
    //}
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleConfirmPasswordChange = event =>{
        this.setState({
            confirmpassword: event.target.value
        })
    }

    
   validation = () => {
    let NameError = "";
    let EmailError = "";
    let PasswordError = "";
    let confirmPasswordError = "";

if(!this.state.Name) {
    NameError = "Required"

}
if(NameError){
    this.setState({NameError});
    return false;
}

if(!this.state.Email.includes('@')) {
    EmailError = "Invalid Email"

}
if(EmailError){
    this.setState({EmailError});
    return false;
}
if(!this.state.password){
    PasswordError = "Required"
}
if(PasswordError){
    this.setState({PasswordError});
    return false;
}
if(!this.state.confirmpassword){
    confirmPasswordError = "Required"
}


if(confirmPasswordError){
    this.setState({confirmPasswordError});
    return false;
}
if(this.state.confirmpassword !==  this.state.password){
    confirmPasswordError = "Wrong password"
}


  return true;
};


handleSubmit = event => {
    
    const isValid = this.validation();
    if(isValid){

        this.newMethod()
    }
    event.preventDefault()
}


  
  

    newMethod() {
        // eslint-disable-next-line no-undef
        this.setState()
        console.log(`${this.state.Name}, ${this.state.LastName}, ${this.state.Mobile} ${this.state.Email}`)
    }

    render() {
        return (
            <Container maxWidth="sm" >
        <form onSubmit={this.handleSubmit}>
            <div >
                <h1>SignUp</h1>
                <div className="input">
                <label>First Name</label>
                <br />
{/*              <input type='text' placeholder='Name' value={this.state.Name} onChange={this.handleNameChange}/>
                
*/}  
             <TextField 
                //label="Name"
                //color="primary"
                variant="filled"
                size="small"
                required={true}
                fullWidth
                
                onChange={this.handleNameChange}
                value={this.state.Name}
                /> 
            </div>
            <div className="input">
                 <label>Last Name</label>
                    <TextField 
                    //label="Name"
                    //color="primary"
                    variant="filled"
                    size="small"
                    required={true}
                    fullWidth
                    
                    onChange={this.handleLastNameChange}
                    value={this.state.LastName}
                    /> 

            </div>

            <div className="input">
                 <label>Mobile</label>
                    <TextField 
                    //label="Name"
                    //color="primary"
                    variant="filled"
                    size="small"
                    required={true}
                    fullWidth
                    
                    onChange={this.handleMobileChange}
                    value={this.state.Mobile}
                    /> 
            </div>
          
          <div style={{ color: "red" }}>
                {this.state.NameError}
          </div> 
                <div>
                    <div className="input">
                    <label>Email</label>
{ /*                   <input type='email' placeholder='Email' value={this.state.Email} onChange={this.handleEmailChange}/>
*/}           <br/>
                <TextField 
                        //label="Name"
                        //color="primary"
                        variant="filled"
                        size="small"
                        required={true}
                        fullWidth
                        type="Email"
                        onChange={this.handleEmailChange}
                        value={this.state.Email}
                        /> 
            </div>
</div>
              </div>
                <div style={{ color: "red" }}>

                {this.state.EmailError}
</div>
                <div className="input">
                    <label>Password</label>
                    {/*<input type='password' placeholder='passowrd' value={this.state.password} onChange={this.handlePasswordChange}/>*/}

                            <TextField 
                        //label="Password"
                        type="password"
                        size="small"
                        //color="primary"
                        variant="filled"
                        required={true}
                        fullWidth
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        /> 


                </div>
                                    <div style={{ color: "red" }}>
                                    {this.state.PasswordError}
                    </div>
        <div className="input">
                        <label>Confirm</label>
                {/* <input type='confirm-password' placeholder='confirm-passowrd' value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange}/>*/}
                <TextField 
                        //label="Password"
                        type="ConfirmPassword"
                        size="small"
                        //color="primary"
                        variant="filled"
                        required={true}
                        fullWidth
                        onChange={this.handleConfirmPasswordChange}
                        value={this.state.confirmpassword}
                        /> 

        </div>
                        <div style={{ color: "red" }}>
                            {this.state.confirmPasswordError}
                        </div>
                            

                {/* <div>
                     <label>Gender</label>
                     <select value={this.state.Gender} onChange={this.handleGenderChange}>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                     </select>
                </div>*/}


            <Link 
              to={{
                pathname: `/`, 
                query: this.state.Name,
                query1: this.state.Email,
                query2: this.state.password,
                query3: this.state.Gender
                

                    }}>
                 
            </Link>

                        <button className="button" 
                        type="submit"
                        onSubmit={this.handleSubmit}
                        >Submit</button>
               
        </form>
         
        </Container>
        );
       
    }
}
export default Signup