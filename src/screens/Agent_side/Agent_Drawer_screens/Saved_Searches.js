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
    TouchableWithoutFeedback,
    Linking
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Saved_Searches = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={authstyles.header}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <AntDesign name="arrowleft" color={Colors.black} size={24} />
                </TouchableOpacity>
                <Text style={authstyles.headertext}>Saved Searches</Text>
                <View></View>
            </View>
            <ScrollView>
                <View style={{ width: wp(100), height: wp(12), backgroundColor: '#00365E', marginTop: wp(3), justifyContent: 'center', paddingHorizontal: wp(5) }}>
                    <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>Hi, Gerald P</Text>
                </View>
                <View style={{marginLeft:wp(5),marginTop:wp(5)}}>
                    <Text style={{fontSize:14,fontFamily:fonts.Regular,color:Colors.black}}>You don't have any saved search</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Saved_Searches

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
})