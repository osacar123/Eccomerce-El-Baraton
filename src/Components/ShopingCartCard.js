import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import {  Button, } from 'react-native-paper';
import * as shoppingCartActions from '../Redux/Actions/shoppingCartActions';
import { connect } from 'react-redux';



class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
          
            
        };
        
      }
    
    removeProductToCart = () =>{
        this.props.popAction(this.props.data.pk)
    }
    render() {
        
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
                <Text>{this.props.data.name} </Text>
                <Text> {this.props.data.selectQuantity}</Text>
                <Text> {this.props.data.price}</Text>
                
            </View>
            <View
                style={{alignItems:'center',justifyContent:'center'}}
            >
                <Button
                    icon='delete'
                    mode={'outlined'}
                    onPress={this.addProduct}
                >
                    
                </Button>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
   
        container: {        
          flex: 1,
          borderRadius:5
      },
    }
  )
    

const mapStateToProps = (reducers) => {
  return reducers.shopingCartReducer;

};

export default connect(mapStateToProps, {})(ProductCard);