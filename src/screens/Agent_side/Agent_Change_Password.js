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
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, fonts, images} from '../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import {authstyles} from '../Auth/AuthStyles';

const Agent_Change_Password = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [selected, setSelected] = useState('user');
  const [eye, seteye] = useState(false);
  const [eye1, seteye1] = useState(false);

  // States for additional fields
  const [websiteLink, setWebsiteLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [skypeName, setSkypeName] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [vimeoLink, setVimeoLink] = useState('');

  return (
    <View style={authstyles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={Colors.white}
      />
      <View style={authstyles.header}>
        <View></View>
        <Text style={authstyles.headertext}>Change Password</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: wp(10)}}>
          <Image
            source={images.lock}
            resizeMode="contain"
            style={[authstyles.avatar, {borderRadius: 0}]}
          />
        </View>

        <View style={{marginTop: wp(20)}}>
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
        </View>
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
              navigation.navigate('Agent_Drawer', {screen: 'Agent_Profile'});
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Agent_Change_Password;
