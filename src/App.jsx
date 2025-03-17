import "./App.css";
import "../public/assets/logo.png";
import Header from './components/Header'
import WithoutAStatus from "./components/Columns/WithoutAStatus";
import NeedToDo from "./components/Columns/NeedToDo";
import AtWork from "./components/Columns/AtWork";
import Testing from "./components/Columns/Testing";
import Done from "./components/Columns/Done";
import PopNewCard from "./components/Actions/PopNewCard";
import PopBrowse from "./components/Actions/PopBrowse";
import PopExit from "./components/Actions/PopExit";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit/>

        <PopNewCard/>

        <PopBrowse/>

        <Header/>
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <WithoutAStatus/>
                <NeedToDo/>
                <AtWork/>
                <Testing/>
                <Done/>
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
