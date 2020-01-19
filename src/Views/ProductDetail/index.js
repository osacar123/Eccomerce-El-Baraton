import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image

} from 'react-native';
import * as productsActions from '../../Redux/Actions/productsActions';
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
        price:0
        
    };
    this._handlerLoadDetail()
  }
  _handlerLoadDetail = () => {     
        const id = this.props.navigation.state.params.pk;
        
        loadDetail(id)
        .then((response)=> {
            this.setState({...response.data}) 
            console.log(response.data)      
        })
        .catch((error)=> {
            console.log(error.response)
            this.setState({error_msj:'hay un error'})
            this.setState({error:true})

            
        })

  }

  render() {
    const avalaible = false;
    
        
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
                            >
                                +
                            </Button>
                            <Text
                                style={{width:30, marginHorizontal:10, textAlign:'center'}}
                            >
                                1
                            </Text>
                            <Button
                            mode={'outlined'}
                            >
                                -
                            </Button>

                        </View>
                        <Button
                            mode={'outlined'}
                        >
                               <Text
                                    style={{fontSize:10}}
                               >Agregar </Text> 
                        </Button>
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
        
        //alignItems:'center'
    }
    
  }
)
  


const mapStateToProps = (reducers) => {
  return reducers.productsReducer;

};

export default connect(mapStateToProps, productsActions)(Detail);