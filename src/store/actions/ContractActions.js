export const SET_WEB3 = "SET_WEB3";
export const SET_MARKETPLACE_CONTRACT = "SET_MARKETPLACE_CONTRACT";
export const SET_USDT_CONTRACT = "SET_USDT_CONTRACT";
export const SET_CBDT_CONTRACT = "SET_CBDT_CONTRACT";

export const setWeb3Action = web3 => ({ type: SET_WEB3, payload: web3 });

export const setMarketContractAction = data => ( { type: SET_MARKETPLACE_CONTRACT, payload: data } )

export const setCBDTCtrAction = data => ( { type: SET_CBDT_CONTRACT, payload: data } )

export const setUSDTCtrAction = data => ( { type: SET_USDT_CONTRACT, payload: data } )

