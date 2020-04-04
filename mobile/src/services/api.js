import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.24:5000'
})

export default api;