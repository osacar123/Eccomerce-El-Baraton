import axios from 'axios';
//import LOGIN_URL from './endpoints'

const LOGIN_URL ='http://54.207.31.19/products/?page=1&ordering=price&price_range=1449-9048&page_size=5'

export const loadData = () =>{
  
    return(
    axios.get(LOGIN_URL)
    )

};
