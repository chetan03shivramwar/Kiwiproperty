import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {authstyles} from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, fonts, images} from '../../../constant/Indes';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Button from '../../../components/Button';

const Calculator = () => {
  const navigation = useNavigation();
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Calculator</Text>
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
              Mortgage Calculator
            </Text>
          </View>
        </ImageBackground>
        <View style={{marginTop: wp(10)}}>
          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Total Amount ($)</Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter amount"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>
          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Down Payment ($)</Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter down payment"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Interest Rate (%)</Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Interest Rate (%)"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>

          <View style={{marginTop: wp(2)}}>
            <Text style={authstyles.heading}>Amortization Period (years)</Text>
            <View style={authstyles.inputview}>
              <TextInput
                placeholder="Enter number of years"
                placeholderTextColor={Colors.gray}
                style={authstyles.inputtext}
              />
            </View>
          </View>
        </View>

        <View style={{marginTop: wp(20), marginBottom: wp(6)}}>
          <Button title="Calculate" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({});
