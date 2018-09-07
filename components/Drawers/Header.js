import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native';


export default class Header extends React.Component {

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
            this.props.navigation.openDrawer()
          }
             }
          style={{marginLeft:10,marginTop:20}}>
          <Image 
          style={{width:32,height:32}}
          source={require('../../images/icon-menu.png')}
          />

          </TouchableHighlight>
      </View>
    );
  }
}