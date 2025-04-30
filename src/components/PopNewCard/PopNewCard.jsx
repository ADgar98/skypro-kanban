import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postCard } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";
import { Calendar } from "../calendar/Calendar";

const PopNewCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("Web Design");
  const {setCards, selectedDate} = useContext(TaskContext)


  const [formData, setFormData] = useState({
  
    title: "",
    topic: topic,
    date: "",
    status: "Без статуса",
    description: "",
  });

  useEffect(() => {
    const safeDate = selectedDate === null ? new Date() : selectedDate;
    const isoString = safeDate.toISOString();
  
    setFormData(prev => ({
      ...prev,
      date: isoString,
    }));
  }, [selectedDate])

  
  
  const { user } = useContext(AuthContext);
    const Token = user.token




  useEffect(() => {
    setFormData(prev => ({ ...prev, topic }));
  }, [topic]);
  
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();

      const response = await postCard(Token, formData);

      setCards(response);

      navigate("/");
    } catch {
      alert('заполните все данные');
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      {isLoading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Добавляем карточку...</p>
        </div>
      )}
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                onSubmit={handleSubmit}
                className="pop-new-card__form form-new"
                id="formNewCard"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar currentDate={new Date(formData.date)}
                setCurrentDate={(date) => {
                  setFormData({ ...formData, date });
                }}/>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${
                    topic === "Web Design" ? "_active-category" : ""
                  }`}
                >
                  <p onClick={() => setTopic("Web Design")} className="_orange">
                    Web Design
                  </p>
                </div>
                <div className={`categories__theme _green ${
                    topic === "Research" ? "_active-category" : ""
                  }`}>
                  <p onClick={() => setTopic("Research")} className="_green">
                    Research
                  </p>
                </div>
                <div className={`categories__theme _purple ${
                    topic === "Copywriting" ? "_active-category" : ""
                  }`}>
                  <p
                    onClick={() => setTopic("Copywriting")}
                    className="_purple"
                  >
                    Copywriting
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopNewCard;
