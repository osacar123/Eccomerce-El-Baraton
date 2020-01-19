import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList
    
} from 'react-native';

import { Searchbar } from 'react-native-paper';
import ProductCard from '../../Components/ProductCard'

import Filters from '../../Components/Filters'
import { loadData }  from '../../Services/api'

import * as productsActions from '../../Redux/Actions/productsActions'
import { connect } from 'react-redux';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      firstQuery: '',
      
    };
    this._handleLoadData();
  }
  

  _handleLoadData  = () => {
    loadData()
    .then((response)=> {
        //console.log(response.data)
        this.props.loadAction(response.data)
        
      })
      .catch((error)=> {
        console.log(error.response)
        this.setState({error_msj:'hay un error'})
        this.setState({error:true})

        
      })
  }
    
  render() {
    const { firstQuery} = this.state;
   
    return (
      <View
        style={styles.container}
      >
          <Searchbar
            placeholder="Search"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
            style={styles.searchbar}
          />
          
          <Filters />
          
            <FlatList
              data={this.props.data}
              renderItem={({ item }) => <ProductCard {...this.props} data={item}/>}
              keyExtractor={item => item.code}
              numColumns={2}
            />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
    container: {        
      flex: 1,
      backgroundColor:'#eee',
      
      margin:10
    },
    searchbar:{
      borderRadius:20
    },
    containerFilters:{
      borderRadius:20,
      marginVertical:10
    }
  }
)
  


const mapStateToProps = (reducers) => {
  return reducers.productsReducer;

};

export default connect(mapStateToProps, productsActions)(Home);