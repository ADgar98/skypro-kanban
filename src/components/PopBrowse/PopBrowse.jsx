import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import axios from "axios";
import { Calendar } from "../Calendar/Calendar";

import { indiCard } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import {
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
  SCategoriesP,
  SFormBrowseArea,
  SFormBrowseBlock,
  SPopBrowseBlock,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit,
  Status,
  StatusP,
  StatusThemes,
  SThemeDown,
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
  const API_URL = "https://wedev-api.sky.pro/api/kanban";

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
      const newCardsList = await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });

      setCards(newCardsList.data.tasks);
      navigate("/");
    } catch (error) {
      alert("Ошибка при удалении карточки", error);
      throw error;
    }
  }

  async function putCard() {
    try {
      const newCardsList = await axios.put(`${API_URL}/${id}`, cardInfo, {
        headers: {
          "Content-Type": "text/html",
          Authorization: "Bearer " + user.token,
        },
      });

      setCards(newCardsList.data.tasks);
      navigate("/");
    } catch (error) {
      alert("Ошибка при редактировнии карточки:", error);
      throw error;
    }
  }

  const getTopicClass = (topic) => {
    switch (topic) {
      case "Web Design":
        return "_orange";
      case "Research":
        return "_green";
      case "Copywriting":
        return "_purple";
      default:
        return "_default";
    }
  };

  useEffect(() => {
    getCardInfo(id);
  }, [id]);

  return (
    <StyledPopBrowse>
      <PopBrowseContainer>
        <SPopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {" "}
              <PopBrowseTtl> {cardInfo?.title}</PopBrowseTtl>
              <div
                className={`categories__theme theme-top _active-category ${getTopicClass(
                  cardInfo?.topic
                )}`}
              >
                <p className={getTopicClass(cardInfo?.topic)}>
                  {cardInfo?.topic}
                </p>
              </div>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <div
                  className={`status__theme ${!isEdit ? "_gray" : "_hide "}`}
                >
                  <p className={`${!isEdit ? "_gray" : ""}`}>
                    {cardInfo?.status}
                  </p>
                </div>
                {isEdit && (
                  <>
                    <div
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Без статуса",
                        })
                      }
                      className={`status__theme ${
                        cardInfo.status === "Без статуса" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={`${
                          cardInfo.status === "Без статуса" ? "_gray" : ""
                        }`}
                      >
                        Без статуса
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Нужно сделать",
                        })
                      }
                      className={`status__theme ${
                        cardInfo.status === "Нужно сделать" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={`${
                          cardInfo.status === "Нужно сделать" ? "_gray" : ""
                        }`}
                      >
                        Нужно сделать
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "В работе",
                        })
                      }
                      className={`status__theme ${
                        cardInfo.status === "В работе" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={`${
                          cardInfo.status === "В работе" ? "_gray" : ""
                        }`}
                      >
                        В работе
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Тестирование",
                        })
                      }
                      className={`status__theme ${
                        cardInfo.status === "Тестирование" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={`${
                          cardInfo.status === "Тестирование" ? "_gray" : ""
                        }`}
                      >
                        Тестирование
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        setCardInfo({
                          ...cardInfo,
                          status: "Готово",
                        })
                      }
                      className={`status__theme ${
                        cardInfo.status === "Готово" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={`${
                          cardInfo.status === "Готово" ? "_gray" : ""
                        }`}
                      >
                        Готово
                      </p>
                    </div>
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
