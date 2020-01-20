import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image

} from 'react-native';
import * as shoppingCartActions from '../../Redux/Actions/shoppingCartActions';
import { connect } from 'react-redux';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import { loadDetail }  from '../../Services/api';


class Detail extends React.Component {
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
    this._handlerLoadDetail()
  }
  _handlerLoadDetail = () => {     
        const id = this.props.navigation.state.params.pk;
        
        loadDetail(id)
        .then((response)=> {
            this.setState({...response.data}) 
                
        })
        .catch((error)=> {
            console.log(error.response)
            this.setState({error_msj:'hay un error'})
            this.setState({error:true})

            
        })

  }
  _handlerAddCart = () =>{
    this.props.addAction(this.state.pk, this.state)

  }
  addProduct = () => {
        const selectQuantity = this.state.selectQuantity
        if (selectQuantity<this.state.quantity){
            this.setState({selectQuantity:selectQuantity+1})
        }else{
            this.setState({selectQuantity})
        }
        
  }
  substractProduct = () =>  {
    const selectQuantity = this.state.selectQuantity
    if (selectQuantity>1){
        this.setState({selectQuantity:selectQuantity-1})
    }else{
        this.setState({selectQuantity})
    }

  }

  render() {
    return (
        <View
            style={styles.container}
        >
            <Card
                style={{borderRadius:20}}
            >
                <View
                    style={{flexDirection:'row'}}
                >   
                    <View
                        style={{flex:0.5,height:300,padding:20}}
                    >
                        <Image
                            style={{width: '100%', height: '100%', borderRadius:20}}
                            resizeMode='cover'
                            source={{uri:'https://picsum.photos/700'}}                            
                        />
                    </View>
                    
                    <View
                        style={{flex:0.5,height:300,padding:10, justifyContent:'space-between', paddingRight:60}}
                    >
                        <Title>{this.state.name}</Title>
                        <Paragraph>Precio: ${this.state.price}COP</Paragraph>
                        <View>
                            <Button 
                                icon={this.state.available?"radiobox-marked":"radiobox-blank"}
                                mode="text" 
                                color={this.state.available?"#0f0":"#f00"}
                            >
                                {this.state.available?"Disponible":"No Disponible"}
                            </Button>
                        </View>
                        <View
                            style={{flexDirection:'row', height:30}}
                        >
                            <Button
                                mode={'outlined'}
                                onPress={this.substractProduct}
                            >
                                -
                            </Button>
                            
                            <Text
                                style={{width:30, marginHorizontal:10, textAlign:'center'}}
                            >
                                {this.state.selectQuantity}
                            </Text>
                            <Button
                                mode={'outlined'}
                                onPress={this.addProduct}
                            >
                                +
                            </Button>

                        </View>
                        {this.state.available&&<Button
                            mode={'outlined'}
                            onPress={this._handlerAddCart}
                        >
                               <Text
                                    style={{fontSize:10}}
                               >Agregar </Text> 
                        </Button>
                        }
                    </View>
                </View>
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
        justifyContent:'center',

    }
    
  }
)
  


const mapStateToProps = (reducers) => {
  return reducers.shopingCartReducer;

};

export default connect(mapStateToProps, shoppingCartActions)(Detail);