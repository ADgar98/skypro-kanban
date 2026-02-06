import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";
export async function fetchCards({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postCard(token, newTask) {
  try {
    const data = await axios.post(
      "https://wedev-api.sky.pro/api/kanban",
      newTask,
      {
        headers: {
          "Content-Type": "text/html",
          Authorization: "Bearer " + token,
        },
      }
    );
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function indiCard(id, token) {
  try {
    const data = await axios.get(`https://wedev-api.sky.pro/api/kanban/${id}`, {
      headers: {
        "Content-Type": "text/html",
        Authorization: "Bearer " + token,
      },
    });

    return data.data.task;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteFetch(id, token) {
    try {
      const newCardsList = await axios.delete(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return newCardsList.data.tasks;
      
    } catch (error) {
      throw new Error(error.message);
    }
  }

  export async function putFetch(id, token, cardInfo) {
      try {
        const newCardsList = await axios.put(`https://wedev-api.sky.pro/api/kanban/${id}`, cardInfo, {
          headers: {
            "Content-Type": "text/html",
            Authorization: "Bearer " + token,
          },
        });
  
        return newCardsList.data.tasks;
        
      } catch (error) {
        throw new Error(error.message);
      }
    }