import { BUYLAPTOP } from "../actions/actiotypes";



const intialstate={
    no_oflaptops:100,
}


const laptopreducer=(state=intialstate,action)=>{

    switch(action.type){
        case BUYLAPTOP:
        return {no_oflaptops:state.no_oflaptops-1};
         default :
         return state;
    }
}
export default laptopreducer;