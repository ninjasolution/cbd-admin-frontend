import {  SET_CBDT_CONTRACT, SET_USDT_CONTRACT, SET_MARKETPLACE_CONTRACT } from "../actions/ContractActions"


const walletReducer = (state = { }, { type, payload }) =>{
	switch (type) {
		case SET_MARKETPLACE_CONTRACT:
			return { 
			  ...state,
			  marketContract: payload
			 }
		case SET_CBDT_CONTRACT:
			return { 
			  ...state,
			  cbdtContract: payload
			 }
		case SET_USDT_CONTRACT:
			return { 
			  ...state,
			  usdtContract: payload
			 }
		default:
		  return state
	  }
}
export default walletReducer;