import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';


const Session4 = () => {
  return(

    
    <View >
      <View style={{flexDirection: 'row', marginTop:30}}>
      <Item rounded style={{ width:220, paddingLeft:10, marginHorizontal:20, left:15, right:15}}>
            <Input placeholder='Search'/>
      </Item>
      <Image style={{marginTop:5, left:10, width: 40, height: 40}} source={require('../../assets/icon/wallet.png')} />
      <Image style={{marginTop:5, left:20, width: 40, height: 40}} source={require('../../assets/icon/bag.png')} />
      <Image style={{marginTop:5, left:20, width: 40, height: 40}} source={require('../../assets/icon/trolley.png')} />
      </View>

      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal height={200} activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../../assets/icon/news1.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/icon/news2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/icon/news3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      
      </View>

        <View style={{flexDirection: 'row', alignSelf:'center', marginTop:15}}>
          {/* <Image style={{marginTop:5, left:10, width: 100, height: 100}} source={require('../../assets/icon/ingot1.jpg')} />
          <Image style={{marginTop:5, left:20, width: 100, height: 100}} source={require('../../assets/icon/alloy.jpeg')} /> */}

        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", right:5 }}>
          <View>
          <Image style={{marginTop:5, left:10, width: 100, height: 100}} source={require('../../assets/icon/ingot1.jpg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Aluminium Ingot
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", left:5 }}>
          <View>
          <Image style={{marginTop:5, left:10, width: 100, height: 100}} source={require('../../assets/icon/alloy.jpeg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Foundry Alloy
            </Text>
          </View>
        </View>
        
        </View>

        <View style={{flexDirection: 'row', alignSelf:'center', marginTop:10}}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", left:5 }}>
          <View>
          <Image style={{marginTop:5, width: 330, height: 100}} source={require('../../assets/icon/billet.jpg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Aluminium Billet
            </Text>
          </View>
        </View>
        </View>

      </View>  

      
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});



export default Session4;
