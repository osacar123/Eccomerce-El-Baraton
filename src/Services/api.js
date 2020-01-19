import axios from 'axios';
//import LOGIN_URL from './endpoints'

const LOAD_URL ='http://54.207.31.19/products/?page=1&ordering=price&price_range=1449-9048&page_size=15'
const DETAIL_URL ='http://54.207.31.19/products/'

export const loadData = () =>{
  
    return(
    axios.get(LOAD_URL)
    )

};

export const loadDetail = (id) =>{
  
    return(
    axios.get(DETAIL_URL+id+'/')
    )

};
