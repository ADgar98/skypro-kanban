import Header from "../../components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import Column from "../../components/Column/Column";
import { Container, MainBlock, MainContent, Wrapper } from "./SMainPage";
import { Outlet } from "react-router-dom";
import { statusList } from "../../../data";
import { fetchCards } from "../../services/api";


function MainPage({addNewCard}) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  

  const [cardsData, setCardsData] = useState([]);
  const [error, setError] = useState('');

  const getCards = useCallback(async () => {
    try {
       setLoading(true);
       const data = await fetchCards({
          // пока у нас не реализована авторизация, передаём токен вручную
          token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
       });
       
       setCardsData(data.tasks);
    } catch (err) {
       setError(err.message);
    } finally {
       setLoading(false);
    }
 }, []);
 useEffect(() => {
    getCards();
 }, [getCards]);
 
 

  return (
    <>
      <Wrapper>
        
        <Header addNewCard={addNewCard} cards={cardsData} />
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
                      cards={cardsData.filter((el) => el.status === item.status)}
                    
                    />
                  ))
                )}
                <p>{error}</p>
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
