import React, { Component, Fragment } from 'react'
import '../../css/person.css'
import {connect} from  'react-redux'
import {getPersonalDetails,getCombineCredits,getExternalLink} from '../../store/actions/personAction'
import PersonInfo from './PersonInfo'
import PersonCredit from './PersonCredit'
class PersonProfile extends Component{
 
    state={
        type:"movie"
    }
    componentDidMount(){
        this.props.getDetails(this.props.match.params.id)
        this.props.getCredits(this.props.match.params.id)
        this.props.getLink(this.props.match.params.id)

    }
    
    changeType = (type) => {
        this.setState({
            type:type
        })
  
    }
    
    render(){
      
      
   
        return(
            <Fragment>
            <section className="">
                <div className="container">
                    <div className="personal-details credit-gap grid">
                        <PersonInfo details={this.props.detail}/>
                    </div>             
                </div>
            

            </section>
            <section>
                <div className="container">
                    <PersonCredit type ={this.state.type} id={this.props.match.params.id} changeType={this.changeType} credits={this.props.credits} />
                </div>
       
            </section>
            </Fragment>
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        detail: state.person.PersonalDetails,
        credits:state.person.CombinedCredits,
        link:state.person.ExtenalLink
    }   
}
const mapDispatchtoProps = (dispatch) => {
    return{
        getDetails:(id) => {dispatch(getPersonalDetails(id))},
        getCredits:(id) => {dispatch(getCombineCredits(id))},
        getLink:(id) => {dispatch(getExternalLink(id))}
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(PersonProfile)