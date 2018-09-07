import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default class Search extends React.Component {

  state = { text: '' };
  
  static navigationOptions = ()=>({
    tabBarLabel: 'Search',
    tabBarIcon: ({tintColor}) => {
      return (
        <Image
            source={require('../../images/icon-search.png')}
            style={{width: 30, height: 30}}>
        </Image>
    )
    },
    // headerTintColor:'white',
    //         headerStyle:{
    //             backgroundColor:'red'
    //         }
})
  render() {
    return (
      <View style={{}}>
          <TextInput
        style={{height: 40,marginTop:40, borderColor: 'gray',backgroundColor:'#eff2f1'}}
        onChangeText={(text) => this.setState({text})}
        placeholder='Seatch for items'
        value={this.state.text}
      />
      <Text>{this.state.text}</Text>
      </View>
    );
  }
}

 
