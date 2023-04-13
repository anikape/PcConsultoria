import axios from "axios"

//base url

export const api = axios.create({
  baseURL: 'http://localhost:3003', 
})

export const createSession = {
  get: (endpoint) => api.get(endpoint),
  post: (endpoint, body) => api.post(endpoint, body),
  put: (endpoint, body) => api.post(endpoint, body)
}

//faz a importação do axios
//cria a api e configura a baseurl de acordo com o banco
//cria a função que vai fazer as requisições