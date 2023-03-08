import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import  './index.css' 
import { Home } from './pages/Home';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, chain } from 'wagmi';
import { sepolia, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { TokenDashboard } from './pages/TokenDashboard';
import { ConnectKitProvider, getDefaultClient } from "connectkit";

import { StakePool } from './pages/StakePool';
import { Dashboard } from './pages/Dashboard';
import { Token } from './pages/Token';

const chains = [goerli, sepolia];

const client = createClient(
  getDefaultClient({
    appName: "Wise Voting Platform",
    alchemyId: process.env.ALCHEMY_ID,
    chains,
  }),
);

export const App = () => {
  return (



    <WagmiConfig client={client}>
          <ConnectKitProvider
            chains={chains}
            mode='light'
            customTheme={{
              "--ck-overlay-backdrop-filter": "8px",
            }}
            options={{
              showBalance: true
            }}
          >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/token" element={<TokenDashboard />} />
              <Route path="/pool" element={<StakePool />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:address" element={<Token />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}