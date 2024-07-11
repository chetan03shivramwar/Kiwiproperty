import {
  Image,
  ImageBackground,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../../components/Button';
import {authstyles} from '../Auth/AuthStyles';
authstyles;
const Agent_Edit_Profile = () => {
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
        <Text style={authstyles.headertext}>Edit Profile</Text>
        <View></View>
      </View>
      <ScrollView>
        <TouchableOpacity style={{alignSelf: 'center', marginTop: wp(10)}}>
          <ImageBackground
            borderRadius={100}
            source={images.pro}
            style={authstyles.avatar}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                width: wp(25),
                height: wp(25),

                backgroundColor: 'rgba(0,0,0,.6)',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="camera" size={35} color={Colors.white} />
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <View style={{marginTop: wp(10)}}>
          <Text style={authstyles.heading}>Username</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter Username"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
            />
            <EvilIcons name="user" size={34} color={Colors.bahama} />
          </View>
        </View>

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

        <View style={{marginVertical: wp(2)}}>
          <Text style={authstyles.heading}>Phone Number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="second"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            placeholder="Enter Number"
            containerStyle={{
              width: wp(90),
              alignSelf: 'center',
              backgroundColor: Colors.white,
              marginTop: wp(2),
              borderRadius: 12,
              elevation: 4,
            }}
            textContainerStyle={{
              width: wp(90),
              backgroundColor: Colors.white,
              borderRadius: 12,
            }}
            textInputStyle={{
              color: Colors.black,
              fontFamily: fonts.Regular,
            }}
            codeTextStyle={{
              color: Colors.black,
              fontFamily: fonts.Regular,
            }}
            textInputProps={{}}
          />
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Facebook Link</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter facebook link"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
            />
            <SimpleLineIcons
              name="social-facebook"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Instagram Link</Text>
          <View style={authstyles.inputview}>
            <TextInput
              placeholder="Enter facebook link"
              placeholderTextColor={Colors.gray}
              style={authstyles.inputtext}
            />
            <SimpleLineIcons
              name="social-instagram"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(10), marginBottom: wp(6)}}>
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

export default Agent_Edit_Profile;
