import axios from "axios"

export const weatherData = () => {
    return axios.get('/api')
}