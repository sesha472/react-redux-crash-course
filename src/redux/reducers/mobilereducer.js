import { BUYMOBILE } from "../actions/actiotypes";




const intialstate={
    no_ofmobiles:1000,
}


const mobilereducer=(state=intialstate,action)=>{

    switch(action.type){
        case BUYMOBILE:
        return {no_ofmobiles:state.no_ofmobiles-1};
         default :
         return state;
    }
}
export default mobilereducer;