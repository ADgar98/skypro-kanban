import Header from "../../components/Header/Header";

import Column from "../../components/Column/Column";
import { Container, MainBlock, MainContent, Wrapper } from "./SMainPage";
import { Outlet } from "react-router-dom";
import { statusList } from "../../../data";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function MainPage() {
  const useCardsData = useContext(TaskContext);
  const loading = useCardsData.loading;
  const cards = useCardsData.cards;
  const error = useCardsData.error;
  console.log(statusList);
  

  return (
    <>
      <Wrapper>
        <Header />
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
                      key={item.status}
                      status={item.status}
                      cards={cards.filter((el) => el.status === item.status)}
                    />
                  ))
                )}
                <p>{error}</p>
              </MainContent>
            </MainBlock>
          </Container>
        </main>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;
