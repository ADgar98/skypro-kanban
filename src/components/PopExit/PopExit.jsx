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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const PopExit = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate();
  const deleteIsAuth = (e) => {
    e.preventDefault();
    navigate("/signIn");
    logout()
  };
  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form id="formExit" action="#">
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
