import { Link } from "react-router-dom";
import { HeaderPopUserSet, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./SModalWin";

const ModalWin = ({userName, userLogin}) => {
  return (
    <HeaderPopUserSet id="user-set-target">
      <PopUserSetName>{userName}</PopUserSetName>
      <PopUserSetMail>{userLogin}</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </PopUserSetTheme>
      <button type="button">
        <Link to="/exit">Выйти</Link>
      </button>
    </HeaderPopUserSet>
  );
};
export default ModalWin;
