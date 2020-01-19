import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import { List, Card, RadioButton, TextInput  } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider'


class Filters extends React.Component {
    state = {
        orderBy:'',
        valuesPrice:[3,150],
        minimoPrice: '$3',
        maximoPrice:'$150',
        valuesStock:[3,150],
        minimoStock: '1',
        maximoStock:'300',
        checked: '',
        scrollEnabled:true,
        expanded: true,
        
      };
  
    _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });
  
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
                    min={1}
                    max={300}
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
                style={{paddingLeft:15}}
              >
                <View
                  style={{flexDirection:'row', alignItems:'center'}}
                >
                <Text>Disponible      </Text>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked: 'first' }); }}
                />
                </View>
                <View
                  style={{flexDirection:'row', alignItems:'center'}}
                >
                <Text>No disponible</Text>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checked: 'second' }); }}
                />
                </View>
              </View>
              <View
                style={{alignItems:"center"}}
              >
                <MultiSlider
                    values={this.state.valuesStock}
                    sliderLength={350}
                    min={1}
                    max={300}
                    onValuesChange = {(values) => {this._handleChangeStock(values)}}
                  />
                  <View
                    style={{flexDirection:'row', borderBottomWidth:1, marginHorizontal:20}}
                  >
                    
                    <TextInput
                      label='Minimo'
                      value={this.state.minimoStock}
                      onChangeText={text => this.setState({ minimoStock:text })}
                      style={{flex:1, margin:10, backgroundColor:'#fff'}}
                      disabled={true}
                    />
                    <TextInput
                      label='Maximo'
                      value={this.state.maximoStock}
                      onChangeText={text => this.setState({ maximoStock:text })}
                      style={{flex:1, margin:10, backgroundColor:'#fff'}}
                      disabled={true}
                    />
                  </View>
                  <View>
                   <Text>
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
    
export default Filters;