import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



class ProductCard extends React.Component {
  
  _handlePress = () => {  
          
    this.props.navigation.navigate(
      'Detail',
      {
        pk:this.props.data.pk
      }
    )             
  }
  render() {
    
    return (
      <TouchableOpacity 
        style={{flex:1,margin:10}}
        onPress={this._handlePress.bind(this)}
      >
        <Card
            style={styles.container}
        >
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>{this.props.data.name}</Title>
                <Paragraph>${this.props.data.price} COP</Paragraph>
            </Card.Content>            
        </Card>
      </TouchableOpacity>  
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
    
export default ProductCard;