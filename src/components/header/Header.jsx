import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../images/cannergrow-small-white.svg";
import Menubar from "../../icons/Menubar";
import { EmailIcon, LogoutIcon, BellIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { checkAutoLogin } from "../../services/AuthService";
import Wallet from "../../images/wallet.png";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from 'ethers'
import { CBDNFTMarketplaceAddr, CBDTAddr, defaultChainId, INFRA_ID, RPCProvider, USDTAddr } from "../../config";
import { resetWeb3ProviderAction, setWeb3ProviderAction } from "../../store/actions/Web3Actions";
import MarketplaceContract from "../../abis/CBDNFTMarketplace.json"
import ERC20 from "../../abis/ERC20.json"
import { setCBDTCtrAction, setMarketContractAction, setUSDTCtrAction } from "../../store/actions/ContractActions";
import { toastAction } from "../../store/actions/ToastActions";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFRA_ID, // required
    },
  },
};

let web3Modal;

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
    theme: {
      background: "#4f4f4fdf"
    }
  });
}

function initWeb3(provider) {
  var web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

function Header({ open, setOpen }) {

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    checkAutoLogin(dispatch, navigation);
  }, [])

  const state = useSelector(store => store.web3)
  const { provider, address, chainId, web3 } = state

  useEffect(() => {
    if (!address) {
      connect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const connect = async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    // const web3 = new Web3(web3Provider.provider);
    const web3 = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();
    let chainId = await web3.eth.getChainId();

    const address = accounts[0];
    

    // if(defaultChainId !== chainId) {
    //   await web3.currentProvider.request({
    //       method: 'wallet_switchEthereumChain',
    //         params: [{ chainId: defaultChainId }],
    //       });
    // }

    dispatch(setWeb3ProviderAction({
      provider,
      web3Provider,
      address,
      web3,
      chainId,
    }))
  }

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch(resetWeb3ProviderAction())
    },
    [dispatch, provider]
  )

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload()
      }

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect, dispatch])


  useEffect(() => {

    if (!address) {
      return;
    }

    const _marketContract = new web3.eth.Contract(MarketplaceContract.abi, CBDNFTMarketplaceAddr);

    const _usdtContract = new web3.eth.Contract(ERC20.abi, USDTAddr);

    const _cbdtContract = new web3.eth.Contract(ERC20.abi, CBDTAddr);

    dispatch(setMarketContractAction(_marketContract));

    dispatch(setCBDTCtrAction(_cbdtContract));

    dispatch(setUSDTCtrAction(_usdtContract));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (chainId && chainId !== defaultChainId) {
      dispatch(toastAction("info", "Please switch current network into Polygon.", 6000))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId])


  const switchNetHandler = async (chainId_) => {
    if (chainId_ !== chainId) {
      await web3.currentProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId_ }],
      });
    }
  }

  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="relative min-h-[70px] main-bg flex flex-wrap justify-between items-center">
        <div className="hidden lg:block">
          <Link to="/">
            <div className="px-2.5 py-4">
              <img className="min-h-[35px]" src={logo1} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="px-4 mr-auto">
          <Menubar
            width={20}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          <div className="flex">
            <div className="px-4 cursor-pointer">
              <img src={Wallet} width={20} alt="wallet" onClick={connect}/>
            </div>
            <div className="px-4 cursor-pointer">
              <EmailIcon width={20} height={20} />
            </div>
            <div className="px-4 cursor-pointer">
              <BellIcon width={20} height={20} />
            </div>
            <div className="px-4 cursor-pointer">
              <LogoutIcon width={20} height={20} onClick={() => { navigation("/signin"); disconnect();}}/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
