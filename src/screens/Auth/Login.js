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
const Login = () => {
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
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Login</Text>
        <View></View>
      </View>
      <ScrollView>
        <View>
          <Image source={images.logo} style={authstyles.logo} />
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

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Password</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
              secureTextEntry={!eye}
            />
            <TouchableOpacity
              onPress={() => {
                seteye(!eye);
              }}>
              <Ionicons
                name={eye ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color={Colors.bahama}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{alignSelf: 'flex-end', marginRight: wp(5)}}
          onPress={() => {
            navigation.navigate('Forgot_Password');
          }}>
          <Text style={[authstyles.sign, {textDecorationLine: 'none'}]}>
            Forgot your Password?
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: wp(10)}}>
          <Button
            title="Log In"
            onPress={() => {
              navigation.navigate('User_Drawer');
            }}
          />
        </View>
        <View style={{marginBottom: wp(6), marginTop: wp(2)}}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={authstyles.account}>
              Dont have an account?{' '}
              <Text style={authstyles.sign}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
