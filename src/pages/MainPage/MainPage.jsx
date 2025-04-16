import Header from "../../components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import Column from "../../components/Column/Column";
import { Container, MainBlock, MainContent, Wrapper } from "./SMainPage";
import { Outlet } from "react-router-dom";
import { statusList } from "../../../data";
import { fetchCards } from "../../services/api";


function MainPage({setCards, cards}) {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  

  
  const [error, setError] = useState('');

  const getCards = useCallback(async () => {
    try {
       setLoading(true);
       const data = await fetchCards({
          token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
       });
       
       setCards(data);
    } catch (err) {
       setError(err.message);
    } finally {
       setLoading(false);
    }
 }, [setCards]);
 useEffect(() => {
    getCards();
 }, [getCards]);
 
 

  return (
    <>
      <Wrapper>
        
        <Header  />
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
        <Outlet/>
      </Wrapper>

    </>
  );
}

export default MainPage;
