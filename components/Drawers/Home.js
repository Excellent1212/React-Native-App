import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     Image,
     ScrollView,
     Dimensions,
     TouchableOpacity,
    } from 'react-native';
import Header from './Header'
import Search from './Search'
import Contact from './Contact'
//import ImageSlider from 'react-native-image-slider'
export default class Home extends React.Component {
render() {
    const screenWidth= Dimensions.get('window').width
    return (
    <View style={{flex:1}}>
      <View style={{flex:10,flexDirection:'row'}}>
        <Header {...this.props} />
        <Text 
        style={{marginLeft:10,marginTop:18,fontSize:24,color:'red'}}>
        Shop App</Text>
        <Contact {...this.props} />
      </View>
      <View style={{flex:85,flexDirection:'column'}}>
      <ScrollView>
       
      <Image
          style={{width: screenWidth, height: 120}}
          source={{uri: 'https://45ys212y2b6844lk7dwfnj7w-wpengine.netdna-ssl.com/wp-content/uploads/sites/59/2017/05/clothing-sale-cute.jpg'}}
        />
        <Text style={{fontSize:24,marginLeft:10,marginTop:20,fontWeight:'bold'}}>Departments</Text>
         
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        //style={{flexDirection:'row'}}
        >
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Furniture')}
        >
            <Image
            style={{width:80, height: 80,marginRight:20}}
            source={{uri: 'https://ak1.ostkcdn.com/images/products/19834911/P25767709.jpg'}}
            />
            <Text>For The Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Bed')}
        >
        
            <Image
            style={{width:80, height: 80,marginRight:20}}
            source={{uri: 'https://i.pinimg.com/236x/10/7d/ef/107defd996267027fca70e13e0f85de1--bedroom-sets-bedding-sets.jpg'}}
            />
            <Text>Bed & Bath</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Men')}
        >
        <Image
            style={{width:80, height: 80,marginRight:20}}
            source={{uri: 'http://www.free4him.org/images/category_2/2016%20New%20Autumn%20Fashion%20Men%20Clothes%20Slim%20Fit%20Men%20Long%20Sleeve%20ShirtMen%20Cotton%20Casual%20Men%20Shirt%20Social%20white%20JL79582.jpg'}}
            />
            <Text style={{marginLeft:20}}>Men</Text>
        </TouchableOpacity>
            
        
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Women')}
        >
            <Image
            style={{width:80, height: 80,marginRight:30}}
            source={{uri: 'https://simages.ericdress.com/Upload/Image/2017/35/watermark/87aa526b-73e8-4b6f-ab0a-96c2520862cb.jpg'}}
            />
            <Text style={{marginLeft:10}}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Kids')}
        >
            <Image
            style={{width:80, height: 80,marginRight:20}}
            source={{uri: 'https://techcrunch.com/wp-content/uploads/2016/07/14_lifestyle_dbl_roa_038.jpg'}}
            />
            <Text style={{marginLeft:20}}>Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Shoes')}
        >
            <Image
            style={{width:80, height: 80,marginRight:20}}
            source={{uri: 'https://pumaimages.azureedge.net/images/351413/01/fnd/PNA/h/600/w/600'}}
            />
            <Text style={{marginLeft:20}}>Shoes</Text>
        </TouchableOpacity>
         
        </ScrollView>
        <View>
            <Text style={{fontSize:24,marginLeft:10,marginTop:20,fontWeight:'bold'}}>Beauty Services</Text>
            <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Sephora')}
        >
         
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://ethicalelephant.com/wp-content/uploads/2018/01/cruelty-free-brands-at-sephora-3.jpg'}}
            />
            </TouchableOpacity>
            <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Saloon')}
        >
         
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://images.bobitbeauty.com/Flagship-Salon-2-1.jpg'}}
            />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{fontSize:24,marginLeft:10,marginTop:20,fontWeight:'bold'}}>Trending Now</Text>
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://fashionstanew.files.wordpress.com/2016/11/mens-clothing.jpg'}}
            />
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://www.joomlainlibrary.com/wp-content/uploads/2015/06/Womens-Clothes-01-620x433.jpg'}}
            />
              <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://slimages.macysassets.com/is/image/McomMedia/media/080618_CC_SHOE_Q1_CAT_PAGE_Featbnr1_1321233.jpg?wid=1200'}}
            />
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHRhpAE-IWpgeFIQcOXa5IM53GZqhGuzCBMR1ojW20QiTdZLz6w'}}
            />
            <Image
            style={{width:screenWidth*0.8, height: 150,marginTop:20,marginLeft:30,marginRight:30}}
            source={{uri: 'http://im.rediff.com/movies/2015/mar/16sunny-leela2.jpg'}}
            />
        </View>
      </ScrollView>
      </View>
    </View>
    );
  }
}