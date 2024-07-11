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
import React, {useState, useRef, useEffect} from 'react';
import {authstyles} from './AuthStyles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PhoneInput from 'react-native-phone-number-input';
import {Colors, fonts, images} from '../../constant/Indes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
import {useNavigation} from '@react-navigation/native';
const Verify = () => {
  const navigation = useNavigation();
  const [eye, seteye] = useState(false);

  const [counter, setcounter] = useState(45);
  const [Check, setCheck] = useState(true);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
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
        <Text style={authstyles.headertext}>Verification</Text>
        <View></View>
      </View>
      <ScrollView>
        <View style={{marginTop: wp(10), marginBottom: wp(30)}}>
          <Text style={authstyles.fline}>
            Enter the 4 digit code we have sent to abc@gmail.com
          </Text>
        </View>
        {/* <Text style={authstyles.welcometext}>Welcome Back</Text> */}
        <View style={{marginTop: wp(16), paddingHorizontal: wp(10)}}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={authstyles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                style={{
                  width: wp(14),
                  height: wp(14),
                  backgroundColor: 'white',
                  shadowOffset: {height: 2, width: 2},
                  elevation: 3,
                  shadowColor: 'black',
                  shadowOpacity: 0.7,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  key={index}
                  style={[authstyles.cell, isFocused && authstyles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(5),
            marginTop: wp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={authstyles.didntcode}>Didn’t get the code?</Text>
            {counter === 0 && (
              <TouchableOpacity>
                <Text style={authstyles.resend}> Resend it</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="clockcircle" size={13} color={Colors.lightgreen} />

            <Text style={authstyles.counter_txt}>{counter}s</Text>
          </View>
        </View>
        <View style={{marginTop: wp(30)}}>
          <Button
            title="Verify"
            onPress={() => {
              navigation.navigate('Update');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Verify;
