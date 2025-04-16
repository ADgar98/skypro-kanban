import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'
export async function fetchCards({ token }) {
   try {
      const data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return data.data
      
   } catch (error) {
      throw new Error(error.message)
   }
}

export async function postCard (token,  newTask) {
   try { const data = axios.post('https://wedev-api.sky.pro/api/kanban', newTask, {
      headers: {
        'Content-Type': 'text/html',
        'Authorization': 'Bearer ' + token
      }
    })
    return data.data
   } catch (error) {
      throw new Error(error.message)
   }
}
   
