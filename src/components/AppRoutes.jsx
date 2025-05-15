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
  const [cards, setCards] = useState([]);

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path="/"
          element={<MainPage setCards={setCards} cards={cards} />}
        >
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage />} />
          <Route
            path="/NewCard"
            element={<PopNewCardPage setCards={setCards} />}
          />
        </Route>
      </Route>
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
