import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Appbar, ProgressBar, Button } from 'react-native-paper';
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';
import { IconButton } from 'react-native-paper';


class Header extends Component{
    state = {
        visible: false,
      };
    render(){
            
            return (
                <Appbar.Header style={styles.header}>
                    {this.props.scene.route.routeName != 'Home' &&
                    <IconButton
                        icon="arrow-left"
                        
                        size={20}
                        onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                        //onPress={() => console.log(this.props.scene.route.routeName)}
                    />
                    }
                        
                    <View
                        style={styles.container}
                    >
                    <Text
                        style={styles.tittle}
                    >¡El Baraton!</Text>
                    </View>
                    <IconButton
                        icon={Object.keys(this.props.dataShoppingCart).length>0?'cart-arrow-down':'cart-outline'}                           
                        size={20}
                        onPress={() => this.props.navigation.navigate('ShoppingCart')}
                        color={Object.keys(this.props.dataShoppingCart).length>0?'#f00':'#444'}
                    />
                    
                </Appbar.Header>
            )
        }
}
const styles = StyleSheet.create({
 
    container: {        
        flexDirection:"row",
        justifyContent:'space-around',
        flex:3,
    },
    tittle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#666'
    },
    header:{
        backgroundColor:'#FFFFFF'
    }

});

const mapStateToProps = (reducers) => {
    return reducers.shopingCartReducer;
  
  };
  
  export default connect(mapStateToProps, {})(Header);