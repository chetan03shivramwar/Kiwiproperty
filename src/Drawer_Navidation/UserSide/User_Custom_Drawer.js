import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Colors, fonts, images} from '../../constant/Indes';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const User_Custom_Drawer = props => {
  const rootNavigation = useNavigation().getParent();
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <DrawerContentScrollView {...props}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />

        <View style={{marginTop: wp(2)}}>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity
          onPress={() => {
            setshow(!show);
          }}
          activeOpacity={0.9}
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              width: wp(69),
              backgroundColor: show ? Colors.main : 'white',
              paddingRight: 10,
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={images.ptype}
              resizeMode="contain"
              style={{
                width: wp(6),
                height: wp(6),
                // tintColor: 'red',
                marginLeft: wp(1),
              }}
            />
            <Text style={[styles.text, {color: 'black'}]}>Property Type</Text>
          </View>
          <MaterialIcons
            name={show ? 'arrow-right' : 'arrow-drop-down'}
            size={24}
            color={'black'}
          />
        </TouchableOpacity>
        {show && (
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  width: wp(69),
                  backgroundColor: show ? Colors.main : 'white',
                  paddingRight: 10,
                  marginTop: 0,
                },
              ]} onPress={()=>{rootNavigation.navigate('UserAppartment'),setshow(false)}}>
              <Text style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                Appartment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setshow1(!show1);
              }}
              activeOpacity={0.9}
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  width: wp(69),
                  backgroundColor: Colors.main,
                  paddingRight: 10,
                  marginTop: 0,
                },
              ]}>
              <Text style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                Bungalow
              </Text>
              <MaterialIcons
                name={show1 ? 'arrow-drop-down' : 'arrow-right'}
                size={24}
                color={'black'}
              />
            </TouchableOpacity>
            {show1 && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserBungalow'),setshow(false),setshow1(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Bungalow / Detched House
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserLinkBungalow'),setshow(false),setshow1(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Link Bungalow
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              onPress={() => {
                setshow2(!show2);
              }}
              activeOpacity={0.9}
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  width: wp(69),
                  backgroundColor: Colors.main,
                  paddingRight: 10,
                  marginTop: 0,
                },
              ]}>
              <Text style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                Commercial
              </Text>
              <MaterialIcons
                name={show2 ? 'arrow-drop-down' : 'arrow-right'}
                size={24}
                color={'black'}
              />
            </TouchableOpacity>
            {show2 && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserCommercialLand'),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Commercial Land
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserOffice'),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Office
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Retail Office'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Retail Office
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Retail space'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Retail space
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Shop'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Shop
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Shop House'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Shop-House
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Shop Office'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Shop-Office
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Showroom'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Showroom
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserRetailOffice',{head:'Soho'}),setshow(false),setshow1(false),setshow2(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Soho
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => {
                setshow3(!show3);
              }}
              activeOpacity={0.9}
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                  width: wp(69),
                  backgroundColor: Colors.main,
                  paddingRight: 10,
                  marginTop: 0,
                },
              ]}>
              <Text style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                Condominium / Apartment
              </Text>
              <MaterialIcons
                name={show3 ? 'arrow-drop-down' : 'arrow-right'}
                size={24}
                color={'black'}
              />
            </TouchableOpacity>
            {show3 && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserAppartment2'),setshow(false),setshow1(false),setshow2(false),setshow3(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Appartment
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserCondominium'),setshow(false),setshow1(false),setshow2(false),setshow3(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Condominium
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserDuplex'),setshow(false),setshow1(false),setshow2(false),setshow3(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Duplex / Duo-keys
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles.row,
                    {
                      justifyContent: 'space-between',
                      width: wp(69),
                      backgroundColor: Colors.main,
                      paddingRight: 10,
                      marginTop: 0,
                    },
                  ]} onPress={()=>{rootNavigation.navigate('UserPenthHouse'),setshow(false),setshow1(false),setshow2(false),setshow3(false)}}>
                  <Text
                    style={[styles.text, {color: 'white', marginLeft: wp(16)}]}>
                    Penthhouse
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </DrawerContentScrollView>
    </View>
  );
};

export default User_Custom_Drawer;

const styles = StyleSheet.create({
  logo: {
    width: wp(25),
    height: wp(25),
    alignSelf: 'center',
    marginTop: wp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(3),
    marginTop: wp(1),
    height: wp(10),
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: 'red',
    marginLeft: wp(9),
  },
});
