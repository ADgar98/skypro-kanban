import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import PopBrowsePage from "../pages/PopBrowsePage/PopBrowsePage";
import { SignInPage } from "../pages/SignInPage/SignInPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import PopExitPage from "../pages/PopExitPage/PopExitPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { PrivateRoute } from "../components/PrivateRoute";
import { PopNewCardPage } from "../pages/PopNewCardPage/PopNewCardPage";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState([]);
  const [newToken, setNewToken] = useState("")

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage setCards={setCards} cards={cards} newToken={newToken}/>}
        >
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
          <Route
            path="/NewCard"
            element={<PopNewCardPage setCards={setCards} />}
          />
        </Route>
      </Route>
      <Route path="/signIn" element={<SignInPage setIsAuth={setIsAuth} setNewToken={setNewToken}/>} />
      <Route path="/signUp" element={<SignUpPage setIsAuth={setIsAuth} setNewToken={setNewToken}/>} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
