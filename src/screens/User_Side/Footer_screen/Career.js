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
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Career = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    if (navigation.dispatch) {
      navigation.dispatch(DrawerActions.openDrawer());
      navigation.navigate('Agent_Drawer');
    } else {
    }
  };
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Career</Text>
        <View></View>
      </View>

      <ScrollView>
        <View style={{ marginTop: wp(5) }}>
          <ImageBackground source={images.beach} resizeMode='cover' style={{ width: wp(100), height: wp(60),justifyContent:'center',alignItems:'center' }} >
          <Text style={{fontSize:18,fontFamily:fonts.Bold,color:Colors.white}}>Career</Text>
            <Text style={{fontSize:18,fontFamily:fonts.Bold,color:Colors.white}}>Work with Uberone</Text>
            </ImageBackground>
        </View>
        <View style={{marginTop:wp(10)}}>
        <Text style={styles.Privacy_Policy}>
          <Text style={{ fontWeight: 'bold' }}>Be Winners. </Text>People want to work for companies who are recognized for their culture, work, innovation, and growth. While there are many reasons for striving for these types of honors, one big one is the <Text style={{ fontWeight: 'bold' }}>credibility it provides to a potential candidate. </Text>
        </Text>
        <Text style={styles.Privacy_Policy}>
          With these five essentials in mind – be human, device-ready, transparent, sexy, and winners <Text style={{ fontWeight: 'bold' }}>- would you apply to your own company if you visited your career page? </Text>
        </Text>
        <Text style={styles.Privacy_Policy}>
          In this tight labor market, building an employment brand and career page that showcases your unique story is essential to attracting top talent. Crafting a career page that explains why your company is a place people want to work for is essential to winning the talent war.
          In the mean time, we are temporary not hiring.
        </Text>
        <Text style={styles.Privacy_Policy}>
          <Text style={{ fontWeight: 'bold' }}> In the mean time, we are temporary not hiring.</Text>
        </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Career

const styles = StyleSheet.create({
  Privacy_Policy: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: Colors.black,
    lineHeight: 24,
    paddingHorizontal: wp(5),
    marginBottom:wp(3)
    // textAlign: 'center',
    // marginTop: wp(10),
  },
})