

import React from 'react';
import {connect,useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import { buylaptop, buymobile,fetchUsers } from '../../redux/actions';
import './Shop.css';

const Vshop =(props)=>{
    const no_oflaptops = useSelector(state => state.laptops.no_oflaptops)
    const no_ofmobiles = useSelector(state => state.mobiles.no_ofmobiles)
    const users = useSelector(state => state.users.users)
        return (
            <div className="entaire">
            <h1>IS THE MARKET PLACE</h1>
            <hr></hr>
            <div className="market">
            <div className="shop">
                <h2>DELL LAPTOPS</h2>
                <p>price:{no_oflaptops}</p>
                <button onClick={props.buylaptop} >Buy</button>
            </div>
             <div className="shop">
              <h2>redmi mobile</h2>
             
             <p>price:{no_ofmobiles}</p>
             <button onClick={props.buymobile} >Buy</button>
             </div>
             <div className="shop">
             <h2>redmi mobile</h2>
             
             <p>price:{users.length}</p>
             <button onClick={props.fetchUsers} >call-api</button>
             </div>
         </div>
         </div>

        )
    }

//    const mapStateToProps = (state)=>{
//     return {
//         no_oflaptops:state.laptops.no_oflaptops,
//         no_ofmobiles:state.mobiles.no_ofmobiles,
//         users: state.users.users
//     }
//    }
    


//    const mapDispatchToProps = (dispatch)=>{
//        return {
//            buylaptop:()=>dispatch(buylaptop()),
//           buymobile:()=>dispatch(buymobile()),
//           fetchUsers: ()=> dispatch(fetchUsers())
//        } 
//    }
   
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(
        {
        buylaptop,
        buymobile,
        fetchUsers,
      } ,dispatch
    )
}

    
       


export default connect(null,mapDispatchToProps) (Vshop);