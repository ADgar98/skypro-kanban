import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import axios from "axios";
import { Calendar } from "../Calendar/Calendar";

import { indiCard } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

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
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              {" "}
              <h3 className="pop-browse__ttl"> {cardInfo?.title}</h3>
              <div
                className={`categories__theme theme-top _active-category ${getTopicClass(
                  cardInfo?.topic
                )}`}
              >
                <p className={getTopicClass(cardInfo?.topic)}>
                  {cardInfo?.topic}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
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
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  {!isEdit && (
                    <>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder={cardInfo?.description}
                      ></textarea>
                    </>
                  )}
                  {isEdit && (
                    <>
                      <textarea
                        className="form-browse__area"
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
                      ></textarea>
                    </>
                  )}
                </div>
              </form>

              <Calendar
                currentDate={new Date(cardInfo?.date)}
                setCurrentDate={(date) => {
                  if (isEdit) {
                    setCardInfo({ ...cardInfo, date });
                  }
                }}
              />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            {!isEdit && (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    onClick={handleEditStart}
                    className="btn-browse__edit _btn-bor _hover03"
                  >
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03">
                    <a href="#" onClick={deleteCard}>
                      Удалить задачу
                    </a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}
            {isEdit && (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    onClick={putCard}
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    <a href="#">Сохранить</a>
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancel}
                  >
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#" onClick={deleteCard}>
                      Удалить задачу
                    </a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopBrowse;
