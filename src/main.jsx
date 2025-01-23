import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShopContextProvider } from "./Context/ShopContextProvider.jsx";

// Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       <ShopContextProvider>
//         <App />
//       </ShopContextProvider>
//     </ClerkProvider>
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
