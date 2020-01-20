import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList

} from 'react-native';
import * as shoppingCartActions from '../../Redux/Actions/shoppingCartActions';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';
import ShoppingCard from '../../Components/ShopingCartCard'



class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
        quantity:'',
        available:false,
        name:'',
        quantity:10,
        price:0,
        pk:0,
        selectQuantity:1
        
    };
    
  }
 

  render() {
    
    return (
        <View
            style={styles.container}
        >
            <Card
                style={{borderRadius:20}}
            >
            
            <FlatList
              data={Object.values(this.props.dataShoppingCart)}
              renderItem={({ item }) => <ShoppingCard data={item}/>}
              keyExtractor={item => item.pk}
              
            />   
            </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#eee',
        flex:1,
        
        //alignItems:'center'
    }
    
  }
)
  


const mapStateToProps = (reducers) => {
  return reducers.shopingCartReducer;

};

export default connect(mapStateToProps, shoppingCartActions)(ShoppingCart);