//This App component is the top-level component which will be common 
//across all the different pages. You can use this App component to keep 
//state when navigating between pages
//you can add global CSS files by importing them from pages/_app.js. 
//You cannot import global CSS anywhere else.

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }