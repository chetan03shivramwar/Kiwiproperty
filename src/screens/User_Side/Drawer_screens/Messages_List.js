import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors, fonts, images} from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {authstyles} from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Messages_List = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>Messages</Text>
        <View></View>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.view}
                onPress={() => {
                  navigation.navigate('Messages');
                }}>
                <Image
                  source={images.pro}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View style={{marginLeft: wp(3)}}>
                  <Text style={styles.name}>John Doe</Text>
                  <Text numberOfLines={1} style={styles.des}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qu
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Messages_List;

const styles = StyleSheet.create({
  view: {
    width: wp(90),
    paddingVertical: wp(4),
    backgroundColor: Colors.white,
    elevation: 2,
    alignSelf: 'center',
    marginVertical: wp(2),
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
  },
  image: {
    width: wp(12),
    height: wp(12),
    borderRadius: 100,
  },
  name: {
    fontSize: 14,

    fontFamily: fonts.Bold,
    color: Colors.black,
  },
  des: {
    fontSize: 12,

    fontFamily: fonts.Regular,
    color: Colors.graish,
    marginTop: wp(2),
  },
});
