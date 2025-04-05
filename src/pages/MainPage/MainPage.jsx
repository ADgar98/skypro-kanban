import Header from "../../components/Header/Header";
import PopBrowse from "../../components/PopBrowse/PopBrowse";
import PopExit from "../../components/PopExit/PopExit";
import { useEffect, useState } from "react";
import cardList, { statusList } from "../../../data";
import Column from "../../components/Column/Column";
import { Container, MainBlock, MainContent, Wrapper } from "./SMainPage";
import { Outlet } from "react-router-dom";


function MainPage() {
  const [cards, setCards] = useState(cardList);
  const addNewCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  return (
    <>
      <Wrapper>
        
        <Header addNewCard={addNewCard} cards={cards} />
        <main>
          <Container>
            <MainBlock>
              <MainContent>
                {loading ? (
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      fontSize: "24px",
                    }}
                  >
                    Данные загружаются...
                  </p>
                ) : (
                  statusList.map((item) => (
                    <Column
                      key={item.id}
                      status={item.status}
                      cards={cards.filter((el) => el.status === item.status)}
                    />
                  ))
                )}
              </MainContent>
            </MainBlock>
          </Container>
        </main>
        <Outlet/>
      </Wrapper>

    </>
  );
}

export default MainPage;
