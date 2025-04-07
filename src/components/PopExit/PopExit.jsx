import { Link, useNavigate } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
  StyledPopExit,
} from "./SPopExit";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const deleteIsAuth = (e) => {
    e.preventDefault();
    navigate("/signIn");
    setIsAuth(false);
  };
  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes onClick={deleteIsAuth} id="exitYes">
                <p>Да, выйти</p>
              </PopExitYes>
              <PopExitNo id="exitNo">
                <Link to={"/"}>Нет, остаться</Link>
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
};
export default PopExit;
