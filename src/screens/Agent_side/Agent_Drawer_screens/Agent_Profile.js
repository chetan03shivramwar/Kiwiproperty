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
import {
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, fonts, images} from '../../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import {authstyles} from '../../Auth/AuthStyles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
const Agent_Profile = () => {
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

  const [logo, setLogo] = useState(null);
  const handleLogo = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Kiwi App File Permission',
            message:
              'Kiwi App needs access to your File ' +
              'so you can Choose awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('File permission denied');
          return;
        }
      }

      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setLogo(image.path);
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
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color="blue" size={30} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Agent_Edit_Profile')}
          style={{
            width: wp(8),
            height: wp(8),
            backgroundColor: Colors.white,
            elevation: 2,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="edit" color={Colors.black} size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image
          source={images.pro}
          style={[authstyles.avatar, {alignSelf: 'center', marginTop: wp(10)}]}
        />

        <View style={{marginTop: wp(10)}}>
          <Text style={authstyles.heading}>Username</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>John</Text>

            <EvilIcons name="user" size={34} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>First Name</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>John</Text>

            <EvilIcons name="user" size={34} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Last Name</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Smith</Text>

            <EvilIcons name="user" size={34} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Title/ Position</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Marketing Directo</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Licence No. / Ref No.</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>KW1002</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Tax Number</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Max 28 Character</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Fax Number</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Max 28 Character</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Email</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>anc@gmail.com</Text>

            <Fontisto name="email" size={22} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Address</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>abc Street , Aus</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Company Name</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Company Name</Text>
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Company Logo</Text>
          {logo ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                borderRadius: 10,
              }}>
              <Image
                resizeMode="contain"
                source={{uri: logo}}
                style={{width: 250, height: 250}}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleLogo}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 30,
                borderRadius: 10,
                backgroundColor: logo ? '' : Colors.gray,
              }}>
              <Text style={{color: Colors.white}}>Enter Your Company Logo</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>About Me</Text>
          <View style={authstyles.inputview}>
            <TextInput placeholder="About Me" style={authstyles.inputtext} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Phone Number</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>+1 64634236457245</Text>
            {/* <TouchableOpacity
              onPress={() => {
                seteye(!eye);
              }}>
              <Ionicons
                name={eye ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color={Colors.bahama}
              />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Skype</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>Skype</Text>

            <SimpleLineIcons
              name="social-skype"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Twitter</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>
              https://twitter.com/PropertiesKiwi
            </Text>

            <SimpleLineIcons
              name="social-twitter"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Website Url</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>https://www.kiwi.sg/</Text>

            <SimpleLineIcons name="globe" size={22} color={Colors.bahama} />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Facebook Link</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>facebook.com</Text>

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
            <Text style={authstyles.inputtext}>instagram.com</Text>

            <SimpleLineIcons
              name="social-instagram"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(2)}}>
          <Text style={authstyles.heading}>Youtube Url</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}></Text>

            <SimpleLineIcons
              name="social-youtube"
              size={22}
              color={Colors.bahama}
            />
          </View>
        </View>

        <View style={{marginTop: wp(25), marginBottom: wp(4)}}>
          <Button
            title="Change Password"
            onPress={() => navigation.navigate('Agent_Change_Password')}
          />
        </View>

        <TouchableOpacity
          style={{
            width: widthPercentageToDP(90),
            height: widthPercentageToDP(14),
            backgroundColor: 'red',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            elevation: 2,
            margin: 20,
          }}
          onPress={() => {
            // setShow(true);
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.Bold,
              color: Colors.white,
            }}>
            Delete My Account
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Agent_Profile;
