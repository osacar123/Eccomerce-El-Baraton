import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image

} from 'react-native';
import * as shoppingCartActions from '../../Redux/Actions/shoppingCartActions';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';




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
        selectQuantity:1,
        data:{}
        
    };
    this.loadData();
  }
  removeProductToCart = (pk) =>{
    var data = this.state.data
    delete data[pk]
    this.setState({data})
    
   
}
  _renderList = () => {
    var data = Object.values(this.state.data)
    
    return  data.map((i,n) =>{ 
      return (
          <View
              style={{flexDirection:'row'}}
          > 
              <View
                  style={{flex:0.4,height:100,padding:20}}
              >
                  <Image
                      style={{width: '100%', height: '100%', borderRadius:20}}
                      resizeMode='cover'
                      source={{uri:'https://picsum.photos/700'}}                            
                  />
              </View>
              <View
                  style={{flex:0.5,justifyContent:'center'}}
              >
                  <Text>{i.name} </Text>
                  <Text> {i.selectQuantity}</Text>
                  <Text> {i.price}</Text>
                  
              </View>
              <View
                  style={{alignItems:'center',justifyContent:'center'}}
              >
                  <Button
                      icon='delete'
                      mode={'outlined'}
                      onPress={this.removeProductToCart.bind(this,i.pk)}
                  >
                      
                  </Button>
              </View>
          </View>
      );
    });
  }
  loadData = () => {    
    this.state['data']=this.props.dataShoppingCart
  }
  render() {
    
    return (
        <View
            style={styles.container}
        >
            <Card
                style={{borderRadius:20}}
            >
            
            {this._renderList()}
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
 
    }
    
  }
)
  


const mapStateToProps = (reducers) => {
  return reducers.shopingCartReducer;

};

export default connect(mapStateToProps, shoppingCartActions)(ShoppingCart);