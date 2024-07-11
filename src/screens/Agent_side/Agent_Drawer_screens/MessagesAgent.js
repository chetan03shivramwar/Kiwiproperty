import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MessagesAgent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Messages</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{ width: wp(100), height: wp(12), backgroundColor: '#00365E', marginTop: wp(3), justifyContent: 'center', paddingHorizontal: wp(5) }}>
          <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>Hi, Gerald P</Text>
        </View>
        <View style={{backgroundColor:Colors.white,width:wp(100),marginTop:wp(5),marginBottom:wp(2)}}>
          <View style={{borderWidth:0.5,borderColor:'lightgrey',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:wp(4),paddingVertical:wp(4)}}>
            <Text style={{fontSize:14,fontFamily:fonts.Medium,color:Colors.black}}>From</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={images.pro} resizeMode='cover' style={{width:wp(6),height:wp(6),borderRadius:wp(4)}}/>
              <Text style={{fontSize:12,fontFamily:fonts.Regular,color:Colors.black,marginLeft:wp(2)}}>Gerald P</Text>
            
            </View>
          </View>
          <View style={{borderWidth:0.5,borderColor:'lightgrey',paddingHorizontal:wp(4),paddingVertical:wp(4),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:14,fontFamily:fonts.Medium,color:Colors.black}}>Property</Text>
            <Text style={{fontSize:12,fontFamily:fonts.Regular,color:Colors.black}}>Windy and Breezy</Text>

          </View>
          <View style={{borderWidth:0.5,borderColor:'lightgrey',paddingHorizontal:wp(4),paddingVertical:wp(4),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:14,fontFamily:fonts.Medium,color:Colors.black}}>Last Message</Text>
            <View style={{width:wp(45)}}>
            <Text style={{fontSize:12,fontFamily:fonts.Regular,color:Colors.black}} numberOfLines={2}>Gerald PHello, I am interested in [Windy and Breezy]</Text>
            </View>
          </View>
          <View style={{borderWidth:0.5,borderColor:'lightgrey',paddingHorizontal:wp(4),paddingVertical:wp(4),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:14,fontFamily:fonts.Medium,color:Colors.black}}>Date</Text>
            <Text style={{fontSize:12,fontFamily:fonts.Regular,color:Colors.black}}>May 3, 2023 9:06 am</Text>

          </View>
          <View style={{borderWidth:0.5,borderColor:'lightgrey',paddingHorizontal:wp(4),paddingVertical:wp(4),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:12,fontFamily:fonts.Medium,color:Colors.black}}>Actions</Text>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{width:wp(7),height:wp(7),borderRadius:wp(2),marginRight:wp(2),borderWidth:1,borderColor:Colors.black,justifyContent:'center',alignItems:'center'}}>
             <AntDesign name='delete' color={Colors.black} size={14}/>
              </TouchableOpacity>
              <TouchableOpacity style={{width:wp(7),height:wp(7),borderRadius:wp(2),borderWidth:1,borderColor:Colors.main,justifyContent:'center',alignItems:'center'}}>
             <Image source={images.shareIcons} resizeMode='contain' style={{width:wp(6),height:wp(6),tintColor:Colors.main}}/>
              </TouchableOpacity>
            
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MessagesAgent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
},
})