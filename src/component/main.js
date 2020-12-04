import React, { useState } from 'react'
import { Drawer } from '@material-ui/core'
import Login from './login'
import  IconButton  from '@material-ui/core/IconButton';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import Signup from './Signup';
import Header from './Header'

function Main() {

const  [state, setstate] = useState(false)

const toggleDrawer = (open) => (event) =>{
    setstate(open)
}
const [state1, setstate1] = useState(false)

const toggleDrawer1 = (open) => (event) =>{
    setstate1(open)

}



    return (
      <div>
        <Header />
        <p>Open Drawer</p>
        <div>
          {/* <Button variant="text"
                color="inherit"
                onClick={toggleDrawer(true)}
    >Login</Button>*/}
          <button className="button" onClick={toggleDrawer(true)}>
            Login
          </button>
        </div>
        <div className="Drawer">
          <Drawer
            anchor="right"
            open={state}
            onClose={toggleDrawer1(false)}
            variant="temporary"
            width="50%"
            fullwidth
          >
            <div>
              <IconButton onClick={toggleDrawer(false)}>
                <ClearOutlinedIcon fontSize="inherit" color="inherit" />
              </IconButton>
            </div>
            <div></div>

            <Login />
          </Drawer>
        </div>
        <div>
          <button className="button" onClick={toggleDrawer1(true)}>
            SignUp
          </button>
        </div>
        <div className="Drawer">
          <Drawer
            anchor="right"
            open={state1}
            onClose={toggleDrawer1(false)}
            variant="temporary"
            width="50%"
            fullwidth
          >
            <div>
              <IconButton onClick={toggleDrawer1(false)}>
                <ClearOutlinedIcon fontSize="inherit" color="inherit" />
              </IconButton>
            </div>
            <div>
              <Signup />
            </div>
          </Drawer>
        </div>
      
      </div>
    );
}

export default Main
