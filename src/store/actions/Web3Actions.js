export const SET_WEB3_PROVIDER = "SET_WEB3_PROVIDER";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CHAIN_ID = "SET_CHAIN_ID";
export const RESET_WEB3_PROVIDER = "RESET_WEB3_PROVIDER";

export const setWeb3ProviderAction = data => ({ type: SET_WEB3_PROVIDER, payload: data });

export const setAddressAction = addr => ({ type: SET_ADDRESS, payload: addr });

export const setChainIdAction = id => ({ type: SET_CHAIN_ID, payload: id });

export const resetWeb3ProviderAction = () => ({ type: RESET_WEB3_PROVIDER, payload: "" })
