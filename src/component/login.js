
import React, { Component } from 'react'
import {  ButtonGroup } from  '@material-ui/core'
import { TextField } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { Container } from '@material-ui/core'
import FacebookLogin from 'react-facebook-login';
//import TwitterLogin from "react-twitter-login";
import { connect } from 'react-redux'
//import LoggedIn  from '../redux/action'
import Saved from './saved';
//import Main from './main'
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
//import Signup from './Signup'
//import  IconButton  from '@material-ui/core/IconButton';
//import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
//import { TrainOutlined } from '@material-ui/icons'
import showdata from '../redux/action'





   /* const authHandler = (err, data) => {
      console.log(err, data);
    };  */
 
  

class Login extends Component {
    
   
    constructor(props){
        super(props);
        console.log(props)
        const token = localStorage.getItem("token")
         let LoggedIn = true
         
        if(token == null){

            LoggedIn = false;
            
        }
        this.state = {
            name: '',
            password: '',
            NameError: '',
            passwordError: '',
            image : [],
            loggedIn:false,
            
        };

            this.handleSubmit = this.handleSubmit.bind(this);
            this.responseGoogle = this.responseGoogle.bind(this);
            this.responseFacebook = this.responseFacebook.bind(this);
            this.dispatch = this.dispatch.bind(this);
            this.logout = this.logout.bind(this);
        
    }
    
    
    handleNameChange = (event) => {
            this.setState({
                name: event.target.value
            })
        }
    handlePasswordChange = (event) => {
             this.setState({
                 password: event.target.value
             })
        }

  validation = () => {
        
        let NameError= "";
        let passwordError= "";
    

        if(!this.state.name) {
            NameError = "Required"
        
        }
        if(NameError){
            this.setState({NameError});
            return false;
        }

        if(!this.state.password){
            passwordError = "Required"
        }
        if(passwordError){
            this.setState({passwordError});
            return false;
        }
        
        return true;
    }

    handleSubmit = event => {
   
        const isValid = this.validation();
        if(isValid){
            
          this.newMethod();
          
       }
       event.preventDefault();
       const { name, pass } = this.state

       if(name === this.state.name && pass === this.state.pass){
        localStorage.setItem("token", "ajakdhcpwqieydbczcmdajbdj")
        this.setState({
            loggedIn: true
        })
       }
       
    }

   newMethod() {
        // eslint-disable-next-line no-undef
        this.setState();
    
        }
 

     responseGoogle(response) {
        console.log(response);
        console.log(response.profileObj.name);
        console.log(response.profileObj.email);
        console.log(response.profileObj.imageUrl)
        this.setState({loggedIn:true, name:response.profileObj.name, email:response.profileObj.email, imageUrl:response.profileObj.imageUrl});

         }
     responseFacebook(response) {
        console.log(response);
        console.log(response.name);
        console.log(response.email);
        console.log(response.picture.data.url)
        this.setState({loggedIn:true, name:response.name, email:response.email, url:response.picture.data.url});

        }
    
    logout(){
        this.setState({loggedIn:false})
        }

    dispatch(){
        
        }
            
    
  

render() {

  // if(this.state.loggedIn){
    //   return <Redirect to='/saved' />
   // }
    return(
        
        
        <div className="Login" >
         
       

        <div hidden={this.state.loggedIn}>    
        <Container maxWidth="sm" >
       
        <form onSubmit={this.handleSubmit}  >
                <h1>Login</h1>
            <div className="input">
    
                <label  >Name</label>
                <br />
                <TextField 
                required={true}
                //label="Name"
                //color="primary"
                variant="filled"
                size="small"
                fullWidth

                onChange={this.handleNameChange}
                value={this.state.name}
                
                />   
              {/*  <label>Name</label>
                <input  placeholder='UserName' value={this.state.name} onChange={this.handleNameChange} />*/}
                
            </div>
                    <div style={{ color: "red" }}>
                        {this.state.NameError}
                    </div>
            <div class="inputpass">
                        <label>Password</label>
                        <br />
                    <TextField 
                        required={true}
                        //label="Password"
                        type="password"
                        size="small"
                        //color="primary"
                        variant="filled"
                        fullWidth
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />   
                    <div className="forgot">
                    <a href="/" size="small">Forgot Password</a>
            </div>
             
            <div className="checkbox" >
                <Checkbox
                    defaultChecked
                    size="medium"
                    color="primary"
                    //inputProps={{ 'aria-label': 'checkbox with small size' }}
                    >  </Checkbox>
                    <>Remember me</>
        
            </div>
                {/*  <label>Password</label>
                    <input type='password' placeholder='password' value={this.state.password} onChange={this.handlePasswordChange} />*/}
            </div>
                    <div style={{ color: "red" }}>
                        {this.state.passwordError}
                    </div>

            
            
            <Link 
                to={{
                    pathname: `/saved`,     
                    //"name": this.state.name,
                    //"pass": this.state.password
                
                     }}> 
             
            </Link>


            <div >
           {/* <Button variant="contained" 
              color="primary" 
              type="submit"
              size="large"
              background-color="#17345F"
              
              className={this.handleSubmit}
              //onClick={this.props.open}
              //onClick={dispatch=> this.dispatch(LoggedIn())}

        >login</Button>*/} 
        
            <button className="button" 
                type="submit"
                onSubmit={this.handleSubmit}
                onClick={()=> this.dispatch(showdata())}
            >Login</button>

        </div>
                <br/>
                <div className="not">
                    <div>
                         
                        <Link to='/Signup'
                        
                        >Not registered? Sign up now</Link>
                    </div>
                   
                </div>   
                <br />
            <h6><span>OR</span></h6>
                

<ButtonGroup orientation="vertical" size="small" variant="outlined" >
    
           {/* <TwitterLogin
            authCallback={authHandler}
            consumerKey={""}
            consumerSecret={""}
            fullWidth
            buttonText="LOGIN WITH TWITTER"
           /><br></br>*/}
             <GoogleLogin
        clientId="725822333948-t47dohco5tsu6h1atua8piuu11aemim8.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        fullWidth
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
       
        cookiePolicy={'single_host_origin'}
        /><br></br>

    <FacebookLogin
        appId="396841438106988"
        autoLoad={false}
        fields="name,email,picture"
        //onClick={componentClicked}
        callback={this.responseFacebook}
        fullWidth
        icon="fa-facebook" />
    

    </ButtonGroup>
        </form>
     
        
        </Container>
        
        
        <div>
        
        
        {/*<button onClick={()=>{props.ChangeName("nayak")}}>Update</button>*/}
        </div>
        </div>
        <div hidden={!this.state.loggedIn}>
            <Saved name={this.state.name} 
            email={this.state.email} 
            imageUrl={this.state.imageUrl} 
            url={this.state.url} 
            logout={this.logout} />

        </div>
      
      
        </div>

        
    );
    
}

}



const mapStateToProps = state => {
    return{
        name: state.name 
        //UserName: state.name

    }
}

const mapDispatchToProps = dispatch => {
    return{
        
        ChangeName:(name)=>{dispatch({type:"SHOW_DATA", payload:this.state.name})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
