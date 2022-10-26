import { RESET_WEB3_PROVIDER, SET_ADDRESS, SET_CHAIN_ID, SET_WEB3_PROVIDER } from "../actions/Web3Actions"

const initialState = {
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
    web3: null
  }
// eslint-disable-next-line import/no-anonymous-default-export
const web3Reducers = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_WEB3_PROVIDER:
      return {
        ...state,
        provider: payload.provider,
        web3Provider: payload.web3Provider,
        address: payload.address,
        web3: payload.web3,
        chainId: payload.chainId,
      }
    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      }
    case SET_CHAIN_ID:
      return {
        ...state,
        chainId: payload,
      }
    case RESET_WEB3_PROVIDER:
      return initialState
    default:
        return state
  }
}
export default web3Reducers;