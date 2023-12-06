import { legacy_createStore as createStore } from "redux"

const hdfcBankReducer=(state,action)=>{

    action.type = action.type.toUpperCase();
    switch(action.type){
        case "CREATE":
            return {balance:0};
        case "DEPOSIT":
            return {balance:state.balance+parseFloat(action.amount)};
            
        case "WITHDRAW":
            if(state.balance<parseFloat(action.amount)){
                alert("Insufficient Fund..");
                return {balance:state.balance};
            }else {
                return {balance:state.balance-parseFloat(action.amount)}
            }
            default:
                return state;
    }


}
//create store object using createStore Method.
const hdfcBankStore = createStore(hdfcBankReducer);
export default hdfcBankStore;