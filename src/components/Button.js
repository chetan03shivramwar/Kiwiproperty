import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors, fonts} from '../constant/Indes';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    width: widthPercentageToDP(90),
    height: widthPercentageToDP(14),
    backgroundColor: Colors.main,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: Colors.white,
  },
});
