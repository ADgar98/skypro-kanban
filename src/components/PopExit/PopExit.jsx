import { Link, useNavigate } from "react-router-dom";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const deleteIsAuth = (e) => {
    e.preventDefault();
    navigate("/signIn");
    setIsAuth(false);
  };
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={deleteIsAuth}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                <p>Да, выйти</p>
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={"/"}>Нет, остаться</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopExit;
