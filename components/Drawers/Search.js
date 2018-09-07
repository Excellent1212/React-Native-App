import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';


export default class Search extends React.Component {

render() {
    return (
      <View 
      style={{
          height:90,
          flexDirection:'row',
          //alignItems:'center',
          justifyContent:'flex-start'}}>
          <TouchableHighlight 
          onPress={()=>{
             // this.props.naviigation.navigate('Search')
          }
             }
          style={{marginLeft:100,marginTop:25}}>
          <Image 
          style={{width:20,height:20}}
          source={require('../../images/icon-search.png')}
          />

          </TouchableHighlight>
      </View>
    );
  }
}