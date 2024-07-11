import {
  Image,
  Modal,
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
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, fonts, images} from '../../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import {authstyles} from '../../Auth/AuthStyles';
import ImageCropPicker from 'react-native-image-crop-picker';

const Profile = () => {
  const navigation = useNavigation();
  const [Show, setShow] = useState(false);
  const close = () => {
    setShow(false);
  };

  const [ProfilePic, setProfilePic] = useState(null)

  const handleProfilePic = async () => {
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
          console.log('Camera permission denied');
          return;
        }
      }

      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setProfilePic(image.path);
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
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('User_Edit_Profile')}
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
        <TouchableOpacity onPress={handleProfilePic}>
          <Image
             source={ProfilePic ? { uri: ProfilePic } : images.pro}   
            style={[
              authstyles.avatar,
              {alignSelf: 'center', marginTop: wp(10)},
            ]}
          />
        </TouchableOpacity>

        <View style={{marginTop: wp(10)}}>
          <Text style={authstyles.heading}>Username</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>John</Text>

            <EvilIcons name="user" size={34} color={Colors.bahama} />
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
          <Text style={authstyles.heading}>Phone Number</Text>
          <View style={authstyles.inputview}>
            <Text style={authstyles.inputtext}>+1 64634236457245</Text>
          </View>
        </View>

        <View style={{marginTop: wp(25), marginBottom: wp(6)}}>
          <Button
            title="Change Password"
            onPress={() => navigation.navigate('Change_Password')}
          />
        </View>

        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            setShow(true);
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.Bold,
              color: 'red',
            }}>
            Delete My Account
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        visible={Show}
        transparent={true}
        animationType="none"
        onRequestClose={close}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.6)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: wp(90),
              paddingVertical: wp(4),
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.Regular,
                color: 'black',
                paddingHorizontal: wp(5),
              }}>
              Are you sure you want to delete account
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: wp(15),
                alignSelf: 'flex-end',
                marginRight: wp(5),
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={{
                  width: wp(20),
                  height: wp(12),
                  backgroundColor: '#ff6900',
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fonts.Bold,
                    color: Colors.white,
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  close();
                }}
                style={{
                  width: wp(20),
                  height: wp(12),
                  borderColor: '#ff6900',
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp(5),
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fonts.Bold,
                    color: '#ff6900',
                  }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
