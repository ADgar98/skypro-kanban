import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import PopBrowsePage from "../pages/PopBrowsePage/PopBrowsePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import PopExitPage from "../pages/PopExitPage/PopExitPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { PrivateRoute } from "../components/PrivateRoute";
import PopNewCard from "./PopNewCard/PopNewCard";
import { PopNewCardPage } from "../pages/PopNewCardPage/PopNewCardPage";
import cardList from "../../data";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState(cardList);
  const addNewCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage addNewCard={addNewCard}/>}>
          <Route path="card/:id" element={<PopBrowsePage/>} />
          <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
          <Route
            path="/NewCard"
            element={<PopNewCardPage addNewCard={addNewCard} cards={cards} />}
          />
        </Route>
      </Route>
      <Route path="/signIn" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
