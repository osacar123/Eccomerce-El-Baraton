import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    Picker
} from 'react-native';
import { List, Card, RadioButton, TextInput  } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { loadData }  from '../Services/api'
import * as productsActions from '../Redux/Actions/productsActions'
import { connect } from 'react-redux';


class Filters extends React.Component {
    state = {
        orderBy:'',
        valuesPrice:[1449,18849],
        minimoPrice: '$1449',
        maximoPrice:'$18849',
        checked: '',
        scrollEnabled:true,
        expanded: false,
        
      };
  
    _handlePress = () =>{
      
      if (this.state.expanded){
        this._handleLoadData()
      }
      this.setState({
        expanded: !this.state.expanded
      })
    };
  
  _handleChangePrice = (values) => {
    this.setState({valuesPrice:values})
    this.setState({
      minimoPrice:'$'+values[0],
      maximoPrice:'$'+values[1]
    })
  }
  _handleChangeStock = (values) => {
    this.setState({valuesStock:values})
    this.setState({
      minimoStock:'$'+values[0],
      maximoStock:'$'+values[1]
    })
  }
  _handleLoadData  = () => {
    
    const orderBy = this.state.orderBy 
    
    var available = ''
    this.state.orderBy  == 'available'? available = 'true':available = '';
    this.state.checked  == 'disponible'? available = 'true':available = '';
    const values = this.state.valuesPrice[0]+'-'+this.state.valuesPrice[1]
    
    
    loadData(orderBy,values,available)
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
    const { firstQuery, checked, orderBy } = this.state;
    return (
        <Card
            style={styles.containerFilters}
          >
          <List.Section >
            <List.Accordion
              title="filtros"
              //left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
              style={{alignItems:'center',justifyContent:'center'}}
            >

            
              <View
                style={{alignItems:"center"}}
              >
                <MultiSlider
                    values={this.state.valuesPrice}
                    sliderLength={350}
                    min={1400}
                    max={18849}
                    onValuesChange = {(values) => {this._handleChangePrice(values)}}
                  />
                  <View
                    style={{flexDirection:'row'}}
                  >
                    
                    <TextInput
                      label='Minimo'
                      value={this.state.minimoPrice}
                      onChangeText={text => this.setState({ minimoPrice:text })}
                      style={{flex:1, margin:10, backgroundColor:'#fff'}}
                      disabled={true}
                    />
                    <TextInput
                      label='Maximo'
                      value={this.state.maximoPrice}
                      onChangeText={text => this.setState({ maximoPrice:text })}
                      style={{flex:1, margin:10, backgroundColor:'#fff'}}
                      disabled={true}
                    />
                  </View>
              </View>
              <View
                style={{paddingLeft:15,borderBottomWidth:1,}}
              >
                <View
                  style={{flexDirection:'row', alignItems:'center'}}
                >
                <Text>Disponible      </Text>
                <RadioButton
                  value="disponible"
                  status={checked === 'disponible' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked: 'disponible' }); }}
                />
                </View>
                <View
                  style={{flexDirection:'row', alignItems:'center'}}
                >
                <Text>No disponible</Text>
                <RadioButton
                  value="noDisponible"
                  status={checked === 'noDisponible' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked: 'noDisponible' }); }}
                />
                </View>
              </View>
              <View
                style={{alignItems:"center"}}
              >
                
                  
                  <View
                    style={{marginVertical:10}}
                  >
                   <Text
                    style={{color:"#00f"}}
                   >
                     Ordenar por
                   </Text>
                   <View
                    style={{flexDirection:'row', }}
                   >
                     <View
                      style={{width:130, alignItems:'center'}}
                     >
                        <Text>
                          precio
                        </Text>
                        <RadioButton
                          value="price"
                          status={orderBy === 'price' ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ orderBy: 'price' }); }}
                        />
                    </View>
                    <View
                      style={{width:100, alignItems:'center'}}
                     >
                        <Text>
                          Disponibilidad
                        </Text>
                        <RadioButton
                          value="available"
                          status={orderBy === 'available' ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ orderBy: 'available' }); }}
                        />
                    </View>
                    <View
                      style={{width:130, alignItems:'center'}}
                     >
                        <Text>
                          Cantidad
                        </Text>
                        <RadioButton
                          value="quantity"
                          status={orderBy === 'quantity' ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ orderBy: 'quantity' }); }}
                        />
                    </View>
                    </View>
                  </View>

              </View>
              
            </List.Accordion>
          </List.Section>
          </Card>
          
    );
  }
}

const styles = StyleSheet.create({
   
        container: {        
          flex: 1,
          borderRadius:5
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
  
  export default connect(mapStateToProps, productsActions)(Filters);