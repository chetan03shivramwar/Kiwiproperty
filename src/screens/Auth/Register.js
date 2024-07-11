import {
  Image,
  PermissionsAndroid,
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const Register = () => {
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

  const handleProfileCamera = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Kiwi App Camera Permission',
            message:
              'Kiwi App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission denied');
          return;
        }
      }

      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });

      if (image) {
        console.log('Selected Image:', image);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  return (
    <View style={authstyles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        backgroundColor={Colors.white}
      />
      <View style={authstyles.header}>
        <View></View>
        <Text style={authstyles.headertext}>Register</Text>
        <View></View>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => handleProfileCamera()}
          style={{alignSelf: 'center', marginTop: wp(10)}}>
          <Image source={images.select} style={authstyles.avatar} />
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

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Confirm Password</Text>
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
        <View style={authstyles.typerow}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignContent: 'center'}}
            onPress={() => {
              setSelected('user'); // Set 'User' as selected
            }}>
            <MaterialIcons
              name={
                selected === 'user'
                  ? 'radio-button-checked'
                  : 'radio-button-unchecked'
              }
              color={Colors.bahama}
              size={20}
            />
            <Text style={authstyles.selectedtext}>User</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              marginLeft: wp(20),
            }}
            onPress={() => {
              setSelected('agent'); // Set 'Agent' as selected
            }}>
            <MaterialIcons
              name={
                selected === 'agent'
                  ? 'radio-button-checked'
                  : 'radio-button-unchecked'
              }
              color={Colors.bahama}
              size={20}
            />
            <Text style={authstyles.selectedtext}>Agent</Text>
          </TouchableOpacity>
        </View>

        {selected === 'agent' && (
          <>
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Website Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Website Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={websiteLink}
                  onChangeText={setWebsiteLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Facebook Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Facebook Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={facebookLink}
                  onChangeText={setFacebookLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Instagram Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Instagram Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={instagramLink}
                  onChangeText={setInstagramLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>LinkedIn Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter LinkedIn Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={linkedinLink}
                  onChangeText={setLinkedinLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Twitter Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Twitter Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={twitterLink}
                  onChangeText={setTwitterLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Skype Name</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Skype Name"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={skypeName}
                  onChangeText={setSkypeName}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>YouTube Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter YouTube Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={youtubeLink}
                  onChangeText={setYoutubeLink}
                />
              </View>
            </View>

            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Vimeo Link</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Vimeo Link"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                  value={vimeoLink}
                  onChangeText={setVimeoLink}
                />
              </View>
            </View>
          </>
        )}

        <View style={{marginTop: wp(10)}}>
          <Button
            title="Register"
            onPress={() => {
              if (selected === 'agent') {
                navigation.navigate('Verify_Agent');
              } else {
                navigation.navigate('User_Drawer');
              }
            }}
          />
        </View>
        <View style={{marginBottom: wp(6), marginTop: wp(2)}}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={authstyles.account}>
              Already have an account?{' '}
              <Text style={authstyles.sign}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
