import React, { Component } from 'react'
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
        console.log(this.state.type)
    }
    
    render(){
      
     
   
        return(
            <section className="container">
                <div className=" credit-gap grid">
                    <div className="personal-details">
                        <PersonInfo details={this.props.detail}/>
                    </div>
                    <div className="otherdetails" >
                        <PersonCredit type ={this.state.type} changeType={this.changeType} otherdetail={{"name":this.props.detail.name,"biography":this.props.detail.biography}} credits={this.props.credits} />
                    </div>
                </div>
            

            </section>
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