import { useState } from "react";
import ModalWin from "../ModalWin/ModalWin";
import PopNewCard from "../PopNewCard/PopNewCard";
import {
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  SHeader,
} from "./SHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const userData = JSON.parse(localStorage.getItem("userInfo"));
 
  
  // const openPopNewCard = () => {
  //   setIsPopNewCardOpen(true);
  // };

  return (
    <SHeader>
      <HeaderContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/assets/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/assets/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <Link to="/NewCard">Создать новую задачу</Link>
            </HeaderBtnMainNew>
            <HeaderUser onClick={toggleModal}>
              {userData.name}
            </HeaderUser>
            {isModalOpen && <ModalWin userName={userData.name} userLogin={userData.login} />}
        
      
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </SHeader>
  );
};

export default Header;
