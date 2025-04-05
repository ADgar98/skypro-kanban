import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PopBrowsePage from "./pages/PopBrowsePage/PopBrowsePage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import PopExitPage from "./pages/PopExitPage/PopExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth}/>} />
        </Route>
      </Route>
      <Route path="/signIn" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
