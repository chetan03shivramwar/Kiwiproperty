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
const Update = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [selected, setSelected] = useState('user');

  const handleChange = field => value => {
    // Handle field change here, for now, just log it
    console.log(`${field}: ${value}`);
  };
  const [eye, seteye] = useState(false);
  const [eye1, seteye1] = useState(false);
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
        <Text style={authstyles.headertext}>New Credentials</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{marginTop: wp(10), marginBottom: wp(30)}}>
          <Text style={authstyles.fline}>
            Your identity has been verified Please set your new password.
          </Text>
        </View>
        {/* <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Old Password</Text>
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
        </View> */}

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>New Password</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
              secureTextEntry={!eye1}
            />
            <TouchableOpacity
              onPress={() => {
                seteye1(!eye1);
              }}>
              <Ionicons
                name={eye1 ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color={Colors.bahama}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Confirm New Password</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
              secureTextEntry={!eye1}
            />
            <TouchableOpacity
              onPress={() => {
                seteye1(!eye1);
              }}>
              <Ionicons
                name={eye1 ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color={Colors.bahama}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: wp(10)}}>
          <Button
            title="Update"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Update;
