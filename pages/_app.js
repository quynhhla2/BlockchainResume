import "../styles/global.css";
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// INTERNAL IMPORT
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
import { store } from "../App/store";

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </NFTMarketplaceProvider>
  </Provider>
);

export default MyApp;
