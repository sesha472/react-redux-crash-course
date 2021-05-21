

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { buylaptop, buymobile,fetchUsers } from '../../redux/actions';
import './Shop.css';

 class Shop extends Component {
    render() {
        return (
            <div className="entaire">
                <h1>THIS IS THE MARKET PLACE</h1>
                <hr></hr>
            <div className="market">
               
            <div className="shop">
                <h2>DELL LAPTOPS</h2>
                <p>price:{this.props.no_oflaptops}</p>
                <button onClick={this.props.buylaptop} >Buy</button>
            </div>
             <div className="shop">
             <h2>redmi mobile</h2>
             
             <p>price:{this.props.no_ofmobiles}</p>
             <button onClick={this.props.buymobile} >Buy</button>
             </div>
             <div className="shop">
             <h2>redmi mobile</h2>
             
             <p>price:{this.props.users.length}</p>
             <button onClick={this.props.fetchUsers} >call-api</button>
             </div>
         </div>
         </div>
        )
    }
}
   const mapStateToProps = (state)=>{
    return {
        no_oflaptops:state.laptops.no_oflaptops,
        no_ofmobiles:state.mobiles.no_ofmobiles,
        users: state.users.users
    }
   }

   const mapDispatchToProps = (dispatch)=>{
       return {
           buylaptop:()=>dispatch(buylaptop()),
          buymobile:()=>dispatch(buymobile()),
          fetchUsers: ()=> dispatch(fetchUsers())
       }
   }
   

export default connect(mapStateToProps,mapDispatchToProps) (Shop);