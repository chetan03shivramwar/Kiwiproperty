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
import React, { useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Advertise_U = () => {
    const navigation = useNavigation();
    return (
        <View style={authstyles.container}>
            <View style={[authstyles.header, { justifyContent: 'center', alignItems: 'center' }]}>
                <TouchableOpacity style={{ position: 'absolute', left: wp(4) }} activeOpacity={0.9} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.black} size={24} />
                </TouchableOpacity>
                <Text style={authstyles.headertext}>Advertise With Us</Text>
                <View></View>
            </View>
            <ScrollView>

                <View style={{ marginTop: wp(10) }}>
                    <Text style={{ fontWeight: 'bold', color: Colors.black, marginLeft: wp(5) }}>Advertise With Us</Text>

                    <Text style={styles.Privacy_Policy}>
                        With Kiwi Properties.net currently is slowly getting recognize not only in Singapore, but throughout the region as well. As we are constantly publishing our Kiwi Properties listing in many media i.e. Facebook, Linkedin, Twitter, etc.. We combine space for property listings with in-depth data. Each areas / location and has a  <Text style={{ fontWeight: 'bold' }}>clickable location map, and a premier city map. </Text>
                        These maps lead to well-researched to district data, which helps users discover the these location or estate more easily.
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: Colors.black, marginLeft: wp(5) }}>Individuals</Text>
                    <Text style={styles.Privacy_Policy}>
                        Private owners can list property on a network of sites that includes simple Guide. Feel free to ask any questions using the feedback form to email back to our administrative, and we’ll reply you with more comprehensive answer.
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: Colors.black, marginLeft: wp(5) }}>Agents & Developers</Text>
                    <Text style={styles.Privacy_Policy}>
                        If you are a real estate agent or property developer looking to advertise property on this site, or sponsor a report, please contact us using the form. We will definitely help you to market and attract many interested and potential buyers
                    </Text>
                </View>
            </ScrollView >
        </View >
    )
}

export default Advertise_U

const styles = StyleSheet.create({
    Privacy_Policy: {
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: Colors.black,
        lineHeight: 24,
        paddingHorizontal: wp(5),
        marginBottom: wp(3)
        // textAlign: 'center',
        // marginTop: wp(10),
    },
})