import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {authstyles} from './AuthStyles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, fonts, images} from '../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Forgot_Password = () => {
  const navigation = useNavigation();
  const [eye, seteye] = useState(false);
  return (
    <View style={authstyles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={Colors.white}
      />
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" size={22} color={Colors.black} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Forgot Password</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{marginTop: wp(10), marginBottom: wp(30)}}>
          <Text style={authstyles.fline}>
            Not to worry, it happens to the best of us. Please enter your email
            address below.
          </Text>
        </View>
        {/* <Text style={authstyles.welcometext}>Welcome Back</Text> */}
        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Email</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
            />
            <Fontisto name="email" size={22} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(30)}}>
          <Button
            title="Submit"
            onPress={() => {
              navigation.navigate('Verify');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Forgot_Password;
