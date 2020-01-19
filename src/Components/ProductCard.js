import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



class ProductCard extends React.Component {
  
  
  render() {
    
    return (
      <View style={{flex:1,margin:10}}>
        <Card
            style={styles.container}
        >
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            
            <Card.Actions>
                <Button>agregar al carrito</Button>
                
            </Card.Actions>
        </Card>
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
    
export default ProductCard;