import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/header/Layout/Layout";
import { Devices } from './components/setting/Devices';
import { LanguageForm } from './components/setting/LanguageForm';
import { MarketForm } from './components/setting/MarketForm';
import { Notifications } from "./components/setting/Notifications";
import { PassAndAccountForm } from './components/setting/PassAndAccountForm';
import { ProfileForm } from './components/setting/ProfileForm';
import { TermsAndConditions } from "./components/setting/TermsAndConditions";
import { TwoFactorAuthentication } from './components/setting/TwoFactorAuthentication';
import { Verification } from './components/setting/Verification';
import NFTSettings from './components/contract/NFTSettings';
import SettingPageLayout from "./components/SettingPageLayout/SettingPageLayout";
import ContractPageLayout from "./components/ContractPageLayout/ContractPageLayout";
import "./global.css";
import Dashboard from "./pages/Dashboard";
import Financial from "./pages/Financial";
import Plants from "./pages/Plants";
import PlantSale from "./pages/PlantSale";
import Setting from "./pages/Setting";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Product from './pages/Product';
import MarketplaceSettings from './components/contract/MarketplaceSettings';
import NFTFactory from './components/contract/NFTFactory';


function App() {

  const [open, setOpen] = useState(true);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout open={open} setOpen={setOpen}/>}>
          <Route index exact element={<Dashboard open={open} setOpen={setOpen}/>} />
          <Route path="sale" element={<PlantSale open={open} setOpen={setOpen}/>} />
          <Route path="financial" element={<Financial />} />
          
          <Route path="plants" element={<Plants />} />
          <Route path="product/:collection/:id" element={<Product />} />

          <Route path="settings" element={<SettingPageLayout />}>
            <Route path="address" element={<Setting />} />
            <Route path="account" element={<PassAndAccountForm  />} />
            <Route path="public-profile" element={<ProfileForm  />} />
            <Route path="market" element={<MarketForm  />} />
            <Route path="verification" element={<Verification  />} />
            <Route path="language" element={<LanguageForm  />} />
            <Route path="2fa" element={<TwoFactorAuthentication/>} />
            <Route path="devices" element={<Devices/>} />
            <Route path="notifications" element={<Notifications/>} />
            <Route path="terms" element={<TermsAndConditions/>} />
          </Route>

          <Route path="contract" element={<ContractPageLayout />}>
            <Route path="nft-settings/:collection" element={<NFTSettings />} />
            <Route path="marketplace" element={<MarketplaceSettings  />} />
            <Route path="factory" element={<NFTFactory />} />
          </Route>
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
