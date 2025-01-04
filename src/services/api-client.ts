import axios from 'axios'


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'604d1c0fc11a4e5ab319ff48548f3306'
    }
})