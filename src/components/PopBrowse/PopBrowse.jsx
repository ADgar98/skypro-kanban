import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { Calendar } from "../Calendar/Calendar";

import { deleteFetch, indiCard, putFetch } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import {
  CategoriesTheme,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  SBtnBrowseClose,
  SBtnBrowseEdit,
  SBtnBrowseSave,
  SBtnGroup,
  SFormBrowseArea,
  SFormBrowseBlock,
  SPopBrowseBlock,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit,
  SStatusTheme,
  SStatusThemeEdit,
  Status,
  StatusP,
  StatusThemes,
  StyledPopBrowse,
} from "./SPopBrowse";

const PopBrowse = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const { user } = useContext(AuthContext);

  const getCardInfo = async (id) => {
    try {
      const InfoCard = await indiCard(id, user.token);
      setCardInfo(InfoCard);
    } catch (error) {
      console.error("Ошибка при редактировании карточки:", error);
      throw error;
    }
  };

  const params = useParams();

  const id = params.id;

  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const originalData = useRef([]);

  const handleEditStart = () => {
    originalData.current = cardInfo;
    setIsEdit(true);
  };

  const handleCancel = () => {
    setCardInfo(originalData.current);
    setIsEdit(false);
  };

  const { setCards } = useContext(TaskContext);

  async function deleteCard() {
    try {
      const newCardsList = await deleteFetch(id, user.token);

      setCards(newCardsList);
      navigate("/");
    } catch (error) {
      alert("Ошибка при удалении карточки", error);
      throw error;
    }
  }

  async function putCard() {
    try {
      const newCardsList = await putFetch(id, user.token, cardInfo);
      setCards(newCardsList);
      navigate("/");
    } catch (error) {
      alert("Ошибка при редактировнии карточки:", error);
      throw error;
    }
  }

  useEffect(() => {
    getCardInfo(id);
  }, [id]);

  return (
    <StyledPopBrowse>
      <PopBrowseContainer>
        <SPopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl> {cardInfo?.title}</PopBrowseTtl>
              <CategoriesTheme $topic={cardInfo?.topic}>
                <p>{cardInfo?.topic}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <SStatusTheme $isEdit={isEdit}>
                  <p>{cardInfo?.status}</p>
                </SStatusTheme>
                {isEdit && (
                  <>
                    <SStatusThemeEdit
                      $isActiv={cardInfo.status === "Без статуса"}
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Без статуса",
                        })
                      }
                    >
                      <p>Без статуса</p>
                    </SStatusThemeEdit>
                    <SStatusThemeEdit
                      $isActiv={cardInfo.status === "Нужно сделать"}
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Нужно сделать",
                        })
                      }
                    >
                      <p>Нужно сделать</p>
                    </SStatusThemeEdit>
                    <SStatusThemeEdit
                      $isActiv={cardInfo.status === "В работе"}
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "В работе",
                        })
                      }
                    >
                      <p>В работе</p>
                    </SStatusThemeEdit>
                    <SStatusThemeEdit
                      $isActiv={cardInfo.status === "Тестирование"}
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Тестирование",
                        })
                      }
                    >
                      <p>Тестирование</p>
                    </SStatusThemeEdit>
                    <SStatusThemeEdit
                      $isActiv={cardInfo.status === "Готово"}
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Готово",
                        })
                      }
                    >
                      <p>Готово</p>
                    </SStatusThemeEdit>
                  </>
                )}
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <SFormBrowseBlock>
                  <label htmlFor="textArea01">Описание задачи</label>
                  {!isEdit && (
                    <>
                      <SFormBrowseArea
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder={cardInfo?.description}
                      ></SFormBrowseArea>
                    </>
                  )}
                  {isEdit && (
                    <>
                      <SFormBrowseArea
                        name="text"
                        id="textArea01"
                        value={cardInfo?.description || ""}
                        onChange={(e) =>
                          setCardInfo({
                            ...cardInfo,
                            description: e.target.value,
                          })
                        }
                        placeholder={cardInfo?.description}
                      ></SFormBrowseArea>
                    </>
                  )}
                </SFormBrowseBlock>
              </PopBrowseForm>

              <Calendar
                currentDate={new Date(cardInfo?.date)}
                setCurrentDate={(date) => {
                  if (isEdit) {
                    setCardInfo({ ...cardInfo, date });
                  }
                }}
              />
            </PopBrowseWrap>

            {!isEdit && (
              <SPopBrowseBtnBrowse>
                <SBtnGroup>
                  <SBtnBrowseEdit onClick={handleEditStart}>
                    <a href="#">Редактировать задачу</a>
                  </SBtnBrowseEdit>
                  <SBtnBrowseEdit>
                    <a href="#" onClick={deleteCard}>
                      Удалить задачу
                    </a>
                  </SBtnBrowseEdit>
                </SBtnGroup>
                <SBtnBrowseClose>
                  <Link to="/">Закрыть</Link>
                </SBtnBrowseClose>
              </SPopBrowseBtnBrowse>
            )}
            {isEdit && (
              <SPopBrowseBtnEdit>
                <SBtnGroup>
                  <SBtnBrowseSave onClick={putCard}>Сохранить</SBtnBrowseSave>
                  <SBtnBrowseEdit onClick={handleCancel}>
                    Отменить
                  </SBtnBrowseEdit>
                  <SBtnBrowseEdit>
                    <a href="#" onClick={deleteCard}>
                      Удалить задачу
                    </a>
                  </SBtnBrowseEdit>
                </SBtnGroup>
                <SBtnBrowseClose>
                  <Link to="/">Закрыть</Link>
                </SBtnBrowseClose>
              </SPopBrowseBtnEdit>
            )}
          </PopBrowseContent>
        </SPopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
};
export default PopBrowse;
