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
  import {DrawerActions, useNavigation} from '@react-navigation/native';
  import Feather from 'react-native-vector-icons/Feather';
  import {authstyles} from '../../Auth/AuthStyles';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  const Term_and_Condition_U = () => {
    const navigation = useNavigation();
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
          <Text style={authstyles.headertext}>Term and Conditions</Text>
          <View></View>
        </View>
  
        <ScrollView>
          <Text style={styles.Privacy_Policy}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
            autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat
          </Text>
        </ScrollView>
      </View>
    );
  };
  
  export default Term_and_Condition_U;
  
  const styles = StyleSheet.create({
    Privacy_Policy: {
      fontSize: 14,
      fontFamily: fonts.Regular,
      color: Colors.black,
      lineHeight: 24,
      paddingHorizontal: wp(5),
      textAlign: 'center',
      marginTop: wp(10),
    },
  });
  