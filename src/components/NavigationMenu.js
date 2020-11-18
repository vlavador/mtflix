import React, { Component } from 'react'
import Backdrop from './Backdrop/Backdrop'
import SideDrawer from './SideDrawer/SideDrawer'
import Toolbar from './Toolbar/Toolbar'
class NavigationMenu extends Component{
    state = {
        sideDrawerOpen: false,
      }
    
      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
    
    render(){
        let backdrop;

    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
         
        }
        return(
            <div >
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}

            </div>
        )
    }
}

export default NavigationMenu