import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Hero from "./Pages/hero-main";
import { FriendsMain } from "./Pages/friend-main";
import { FriendDetailes } from "./Pages/friend-detail";
import { MensMain } from "./Pages/mens-main";
import { WomensMain } from "./Pages/womens-main";
import BoysMain from "./Pages/boys-main";
import NotificationsMmain from "./Pages/notifications-main";
import RegisterFriend from "./Pages/friend-register-edit-main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/friends" element={<FriendsMain category="friends" />} />
          <Route path="/mens" element={<MensMain category="male" />} />
          <Route path="/womens" element={<WomensMain category="female" />} />
          <Route path="/boys" element={<BoysMain category="boys" />} />
          <Route
            path="/register-friends"
            element={<RegisterFriend category="boys" />}
          />
          <Route
            path="/notifications-register"
            element={<NotificationsMmain category="boys" />}
          />
          <Route path="/register-friends/edit">
            <Route path=":userRegister" element={<RegisterFriend />} />
          </Route>
          <Route
            path="/FriendsDetaile"
            element={<FriendDetailes category="FriendsDetaile" />}
          >
            <Route path=":userName" element={<FriendDetailes />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
