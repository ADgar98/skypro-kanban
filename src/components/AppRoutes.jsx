import { useEffect, useState } from "react";
import cardList, { statusList } from "../../data";

function AppRoutes() {
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
      <GlobalStyles/>
        <Wrapper>
          <PopExit />
          {/* <PopBrowse /> */}
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
        </Wrapper>
  
        <script src="js/script.js"></script>
      </>
    );
  }
  
  export default AppRoutes;