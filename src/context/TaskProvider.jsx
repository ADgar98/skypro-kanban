import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { fetchCards } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [selectedDate, setSelectedDate] = useState(null);

  const { user } = useContext(AuthContext);
  const newToken = user.token;

  useEffect(() => {
    const getCards = async () => {
      try {
        if (!newToken) return;
        setLoading(true);
        const data = await fetchCards({
          token: newToken,
        });

        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, [newToken]);

  return (
    <TaskContext.Provider
      value={{
        cards,
        setCards,
        loading,
        setLoading,
        error,
        setError,
        selectedDate,
        setSelectedDate
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
