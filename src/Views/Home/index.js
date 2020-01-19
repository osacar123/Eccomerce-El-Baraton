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


class Home extends React.Component {
  state = {
    
    firstQuery: '',
    data: [
      {
        id:1,
      },
      {
        id:2,
      },
      {
        id:3,
      }
    ]
  };

  componentWillMount () {
    loadData()
    .then((response)=> {
        console.log(response.data)
        
      })
      .catch((error)=> {
        console.log(error.response)
        this.setState({error_msj:'hay un error'})
        this.setState({error:true})

        
      })
  }

    
  render() {
    const { firstQuery, checked, orderBy } = this.state;
    
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
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}
          > 
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <ProductCard />}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </ScrollView>
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
  


export default Home;