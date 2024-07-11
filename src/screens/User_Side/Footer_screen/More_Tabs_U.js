import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import {Colors, fonts} from '../../../constant/Indes';
  import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
  import {DrawerActions, useNavigation} from '@react-navigation/native';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import {authstyles} from '../../Auth/AuthStyles';
  import Feather from 'react-native-vector-icons/Feather';
const More_Tabs_U = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
      navigation.dispatch(DrawerActions.openDrawer());
      navigation.navigate('User_Drawer');
    };
  
    const shareOptions = [
      
      {
        name: 'Contact Our Agent',
        icon: <FontAwesome5 name="user-alt" size={30} color={Colors.black} />,
        bgColor: 'white',
        screen:'Agentss2'
        
      },
      {
        name: 'Advertise With Us',
        icon: <Ionicons name="images" size={30} color={Colors.black} />,
        bgColor: 'white',   
        screen:'Advertise_U'

      },
      {
        name: 'Personal Data Protection',
        icon: <SimpleLineIcons name="lock" size={30} color={Colors.black} />,
        bgColor: 'white',
        screen:'Personal_Data_Protection'
      },
      {
        name: 'Affiliate Member',
        icon: <FontAwesome5 name="users" size={30} color={Colors.black} />,
        bgColor: 'white',
        screen:'My_Affiliate',
      },
   
    
    ];
  
    const renderShareOption = ({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
        style={[styles.shareOption, {backgroundColor: item.bgColor,}]}>
        {item.icon}
        <Text style={styles.shareOptionText}>{item.name}</Text>
      </TouchableOpacity>
    );
  return (
    <View style={authstyles.container}>
      <View style={authstyles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={openDrawer}>
          <AntDesign name="bars" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={authstyles.headertext}>More</Text>
        <View></View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={{marginTop:wp(8)}}>
        <FlatList
          data={shareOptions}
          renderItem={renderShareOption}
          keyExtractor={item => item.name}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContent}
        />
        </View>
      </ScrollView>
    </View>
  )
}

export default More_Tabs_U

const styles = StyleSheet.create({
    scrollViewContent: {
      alignItems: 'center',
    },
    description: {
      fontSize: 16,
      fontFamily: fonts.Regular,
      color: Colors.black,
      textAlign: 'center',
      marginVertical: wp(10),
      marginHorizontal: wp(6),
    },
    row: {
      justifyContent: 'space-around',
      marginBottom: wp(5),
    },
    shareOption: {
      alignItems: 'center',
      marginHorizontal: wp(2),
      marginVertical: wp(2),
      padding: wp(3),
      borderRadius: 10,
      width: wp(28),
    //   height: wp(20),
    },
    shareOptionText: {
      fontSize: 12,
      fontFamily: fonts.Regular,
      color: Colors.black,
      marginTop: wp(2),
      textAlign: 'center',
    },
    flatListContent: {
      alignItems: 'center',
    },
  });