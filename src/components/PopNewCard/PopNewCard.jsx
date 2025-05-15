import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postCard } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { TaskContext } from "../../context/TaskContext";
import { Calendar } from "../Calendar/Calendar";
import {
  LoadingIndicator,
  SPopNewCardForm,
  PopupCloseLink,
  Spinner,
  SPopNewCard,
  SPopNewCardBlock,
  SPopNewCardContainer,
  SPopNewCardContent,
  SPopNewCardTtl,
  SPopNewCardWrap,
  SFormNewBlock,
  SSubttl,
  SFormNewInput,
  SFormNewArea,
  SPopNewCardCategories,
  CategoriesThemes,
  CategoriesP,
  SFormNewCreate,
  OrangeCategory,
  GreenCategory,
  PurpleCategory,
} from "./SPopNewCard";

const PopNewCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("Web Design");
  const { setCards, selectedDate } = useContext(TaskContext);

  const [formData, setFormData] = useState({
    title: "",
    topic: topic,
    date: "",
    status: "Без статуса",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { title: "", description: "" };
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = true;
      setError("Заполните название");
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = true;
      setError("Заполните описание");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    const safeDate = selectedDate === null ? new Date() : selectedDate;
    const isoString = safeDate.toISOString();

    setFormData((prev) => ({
      ...prev,
      date: isoString,
    }));
  }, [selectedDate]);

  const { user } = useContext(AuthContext);
  const Token = user.token;

  useEffect(() => {
    setFormData((prev) => ({ ...prev, topic }));
  }, [topic]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setIsLoading(true);

      const response = await postCard(Token, formData);

      setCards(response);

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SPopNewCard>
      {isLoading && (
        <LoadingIndicator>
          <Spinner></Spinner>
          <p>Добавляем карточку...</p>
        </LoadingIndicator>
      )}
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <PopupCloseLink to="/">&#10006;</PopupCloseLink>
            <SPopNewCardWrap>
              <SPopNewCardForm onSubmit={handleSubmit}>
                <SFormNewBlock>
                  <SSubttl htmlFor="formTitle">Название задачи</SSubttl>
                  <SFormNewInput
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    id="formTitle"
                    placeholder={error || "Введите описание задачи..."}
                    style={{
                      borderColor: error ? "red" : "#ccc",
                      color: error ? "red" : "inherit",
                    }}
                    autoFocus
                  />
                </SFormNewBlock>

                <SFormNewBlock>
                  <SSubttl htmlFor="textArea">Описание задачи</SSubttl>
                  <SFormNewArea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    id="textArea"
                    placeholder={error || "Введите описание задачи..."}
                    style={{
                      borderColor: error ? "red" : "#ccc",
                      color: error ? "red" : "inherit",
                    }}
                  ></SFormNewArea>
                </SFormNewBlock>
              </SPopNewCardForm>
              <Calendar
                currentDate={new Date(formData.date)}
                setCurrentDate={(date) => {
                  setFormData({ ...formData, date });
                }}
              />
            </SPopNewCardWrap>
            <SPopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <OrangeCategory
                   $isActive={topic === "Web Design"}
                >
                  <p onClick={() => setTopic("Web Design")} >
                    Web Design
                  </p>
                </OrangeCategory>
                <GreenCategory $isActive={topic === "Research"}
                  
                >
                  <p onClick={() => setTopic("Research")} >
                    Research
                  </p>
                </GreenCategory>
                <PurpleCategory $isActive={topic === "Copywriting"}
                  
                >
                  <p
                    onClick={() => setTopic("Copywriting")}
                    
                  >
                    Copywriting
                  </p>
                </PurpleCategory>
              </CategoriesThemes>
            </SPopNewCardCategories>

            <SFormNewCreate onClick={handleSubmit} type="submit" id="btnCreate">
              Создать задачу
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
};
export default PopNewCard;
