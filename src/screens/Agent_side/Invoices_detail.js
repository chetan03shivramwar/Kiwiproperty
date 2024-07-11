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
import React, {useRef, useState} from 'react';
import {Colors, fonts, images} from '../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {authstyles} from '../Auth/AuthStyles';
import Button from '../../components/Button';
const Invoices_detail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Invoice Detail</Text>
        <View></View>
      </View>
      <ScrollView>
        <View
          style={{
            width: wp(90),
            paddingVertical: wp(6),
            elevation: 2,
            backgroundColor: 'white',
            alignSelf: 'center',
            marginVertical: wp(4),
          }}>
          <Image
            style={{
              width: wp(60),
              height: wp(60),
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={images.logo}
          />
          <View style={{alignSelf: 'flex-end', marginRight: wp(10)}}>
            <Text style={styles.text}>
              INVOICE:{'  '}
              <Text style={styles.text1}>000797</Text>
            </Text>

            <Text style={styles.text}>
              DATE:{'  '}
              <Text style={styles.text1}>January 24,2024</Text>
            </Text>

            <Text style={styles.text}>
              Status:{'  '}
              <Text style={styles.text1}>Paid</Text>
            </Text>
          </View>
          <View style={{marginLeft: wp(5), marginTop: wp(4)}}>
            <Text style={styles.text}>To</Text>
            <Text style={styles.text2}>KiwiOne</Text>
            <Text style={styles.text2}>Clementi,West</Text>
            <Text style={styles.text2}>Email: admin@kiwi.sg</Text>
          </View>

          <View style={{marginLeft: wp(5), marginTop: wp(4),alignSelf:'center'}}>
            <Text style={styles.text}>Kiwi Prop Pvt ltd</Text>
            <Text style={styles.text2}>8,Burn ROad #14023 ,Singapore</Text>
            <Text style={styles.text2}>3e3213</Text>
          </View>

          <View style={{marginHorizontal: wp(5), marginTop: wp(20)}}>
            <Text style={styles.text}>
              Donec maximus pretium facilisis. Sed Donec maximus pretium
              facilisis. Sed
            </Text>
            <Text style={styles.text2}>8,Burn ROad #14023 ,Singapore</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text2}>General Listing</Text>
              <Text style={styles.text2}>KPL 30.00</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text2}>Featured Listing</Text>
              <Text style={styles.text2}>KPL 30.00</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text2}>Top Slider</Text>
              <Text style={styles.text2}>KPL 30.00</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text2}>Boost Add Image</Text>
              <Text style={styles.text2}>KPL 30.00</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text2}>Attention Image</Text>
              <Text style={styles.text2}>KPL 30.00</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text}>Total Price</Text>
              <Text style={styles.text2}>KPL 160.00</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <Text style={styles.text}>Payment Method</Text>
              <Text style={styles.text2}>kiwi points</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingHorizontal: wp(5),
                marginTop: wp(4),
              }}>
              <Text style={styles.text}>Total Price: </Text>
              <Text style={styles.text2}>KPL 160.00</Text>
            </View>
          </View>
          <View style={{marginTop: wp(10), marginHorizontal: wp(5)}}>
            <Text style={styles.text}>Additional Information</Text>
            <Text style={styles.text2}>
              Donec maximus pretium facilisis. Sed mollis dolor ac iaculis
              interdum. Donec pretium dui eget magna luctus, vitae ultricies
              risus rhoncus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Mauris tempor vel mi eget aliquam. Integer porttitor
              suscipit blandit. Proin eleifend dolor augue, vel cursus est
              commodo eleifend. Vestibulum sed luctus nunc. Donec volutpat quam
              in euismod sollicitudin. Sed vulputate eleifend porttitor.
            </Text>
          </View>

          <Text
            style={[
              styles.text,
              {
                paddingHorizontal: wp(5),
                textAlign: 'center',
                marginTop: wp(16),
              },
            ]}>
            Thank You for your business with us
          </Text>
        </View>
        <View style={{marginTop: wp(5)}}>
          <Button title="Print Invoice" />
        </View>
        <TouchableOpacity
          style={{
            width: wp(90),
            height: wp(14),
            backgroundColor: '#ff6900',
            alignSelf: 'center',
            marginTop: wp(4),
            elevation: 2,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.Bold,
              color: 'white',
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
        <View style={{marginBottom: wp(26)}}></View>
      </ScrollView>
    </View>
  );
};

export default Invoices_detail;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: 'black',
  },
  text1: {
    fontFamily: fonts.Light,
    // marginLeft: 10,
  },
  text2: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: 'black',
  },
});
