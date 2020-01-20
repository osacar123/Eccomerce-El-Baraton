import axios from 'axios';
//import LOGIN_URL from './endpoints'

const LOAD_URL ='http://54.207.31.19/products/?page=1&page_size=100'//&ordering=price&price_range=1449-9048'
const DETAIL_URL ='http://54.207.31.19/products/'

export const loadData = (ordering='',price_range='',available='',search='') =>{
    const orderingdata = ordering
    const price_rangedata = price_range
    console.log(available)
    return(
    axios.get(LOAD_URL+'&ordering='+orderingdata+''+'&price_range='+price_rangedata+'&available='+available+'&search='+search)
    )

};

export const loadDetail = (id) =>{
    
    return(
    axios.get(DETAIL_URL+id+'/')
    )

};
