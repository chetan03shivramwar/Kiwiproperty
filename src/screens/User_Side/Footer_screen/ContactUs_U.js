import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    FlatList,
    ImageBackground,
  } from 'react-native';
  import React, {useState} from 'react';
  import {authstyles} from '../../Auth/AuthStyles';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {Colors, fonts, images} from '../../../constant/Indes';
  import {useNavigation} from '@react-navigation/native';
  import {DrawerActions} from '@react-navigation/native';
  import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
  
  const ContactUs_U = ({}) => {
    const navigation = useNavigation();
    const [Area, setArea] = useState(false);
    const [selectedarea, setselectedarea] = useState('');
    const areaData = [
      'Business Opportunity Questions',
      'Career Opportunity Questions',
      'Customer Support',
    ];
    const openDrawer = () => {
      if (navigation.dispatch) {
        navigation.dispatch(DrawerActions.openDrawer());
        navigation.navigate('User_Drawer');
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
          <Text style={authstyles.headertext}>Contact Us</Text>
          <View></View>
        </View>
        <ScrollView>
          <ImageBackground
            style={{
              width: wp(100),
              height: wp(60),
            }}
            source={images.prop1}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,.4)',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.Medium,
                  color: Colors.white,
                }}>
                Contact Us
              </Text>
            </View>
          </ImageBackground>
  
          <Text style={[styles.desc, {marginTop: wp(5)}]}>
            Donec maximus pretium facilisis. Sed mollis dolor ac iaculis interdum.
            Donec pretium dui eget magna luctus, vitae ultricies risus rhoncus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris
            tempor vel mi eget aliquam
          </Text>
          <Text style={[authstyles.heading, {marginTop: wp(5)}]}>
            Kindly select one of the following below:
          </Text>
  
          <TouchableOpacity
            activeOpacity={0.9}
            style={[authstyles.inputview]}
            onPress={() => {
              setArea(!Area);
            }}>
            <Text style={authstyles.inputtext}>
              {selectedarea ? selectedarea : 'Select Reason'}
            </Text>
            <AntDesign
              name={Area ? 'downcircleo' : 'upcircleo'}
              size={22}
              color={Colors.black}
            />
          </TouchableOpacity>
          {Area && (
            <View style={styles.modalopenflat}>
              <FlatList
                data={areaData}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedarea(item);
                        setArea(!Area);
                      }}
                      style={styles.flattouch}
                      activeOpacity={0.9}>
                      <Text style={styles.flattext}>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
          <View style={{marginTop: wp(2)}}>
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Your Name</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter name"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Your Email</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter email"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
  
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Phone number</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Phone number"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
  
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Subject</Text>
              <View style={authstyles.inputview}>
                <TextInput
                  placeholder="Enter Subject"
                  placeholderTextColor={Colors.gray}
                  style={authstyles.inputtext}
                />
              </View>
            </View>
  
            <View style={{marginTop: wp(2)}}>
              <Text style={authstyles.heading}>Message</Text>
              <View
                style={[
                  authstyles.inputview,
                  {
                    height: wp(30),
                    justifyContent: 'flex-start',
                    textAlignVertical: 'top',
                  },
                ]}>
                <TextInput
                  placeholder="Enter Message"
                  placeholderTextColor={Colors.gray}
                  style={[authstyles.inputtext, {textAlignVertical: 'top'}]}
                  multiline
                />
              </View>
            </View>
          </View>
  
          <TouchableOpacity
            style={{
              width: wp(20),
              height: wp(12),
              backgroundColor: '#ff6900',
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: wp(5),
              marginBottom: wp(6),
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.Bold,
                color: Colors.white,
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  
  export default ContactUs_U;
  
  const styles = StyleSheet.create({
    modalopenflat: {
      width: wp(80),
      paddingVertical: wp(3),
      backgroundColor: Colors.white,
      elevation: 2,
      borderRadius: 12,
      marginBottom: wp(1),
      alignSelf: 'center',
    },
    flattext: {
      fontSize: 14,
      fontFamily: fonts.Regular,
      color: Colors.black,
    },
    flattouch: {
      width: wp(75),
      // backgroundColor: 'red',
      paddingVertical: wp(2),
      borderBottomWidth: 0.5,
      alignSelf: 'center',
      paddingHorizontal: wp(3),
    },
    desc: {
      fontSize: 14,
      fontFamily: fonts.Light,
      color: Colors.black,
      paddingHorizontal: wp(5),
      lineHeight: 22,
    },
  });
  