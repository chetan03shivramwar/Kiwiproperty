import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import React from 'react';
import { Colors, fonts } from '../../../constant/Indes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { authstyles } from '../../Auth/AuthStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Share = () => {
    const navigation = useNavigation();



    const shareOptions = [
        {
            name: 'Email',
            icon: <FontAwesome name="envelope" size={30} color={Colors.white} />,
            bgColor: '#0166ff',
        },
        {
            name: 'WeChat',
            icon: <FontAwesome name="wechat" size={30} color={Colors.white} />,
            bgColor: '#7bb32e',
        },
        {
            name: 'WhatsApp',
            icon: <FontAwesome name="whatsapp" size={30} color={Colors.white} />,
            bgColor: '#13af0b',
        },
        {
            name: 'Twitter',
            icon: <FontAwesome name="twitter" size={30} color={Colors.white} />,
            bgColor: '#56acee',
        },
        {
            name: 'Line',
            icon: <Fontisto name="line" size={30} color={Colors.white} />,
            bgColor: '#00c300',
        },
        {
            name: 'SMS',
            icon: <Feather name="message-circle" size={30} color={Colors.white} />,
            bgColor: '#6cbe45',
        },
        {
            name: 'Telegram',
            icon: <FontAwesome name="telegram" size={30} color={Colors.white} />,
            bgColor: '#2ca5e0',
        },
    ];

    const renderShareOption = ({ item }) => (
        <TouchableOpacity
            style={[styles.shareOption, { backgroundColor: item.bgColor, }]}>
            {item.icon}
            <Text style={styles.shareOptionText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={authstyles.container}>
            <View style={[authstyles.header, { justifyContent: 'center', alignItems: 'center' }]}>
                <TouchableOpacity style={{ position: 'absolute', left: wp(4) }} activeOpacity={0.9} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.black} size={24} />
                </TouchableOpacity>
                <Text style={[authstyles.headertext, { textAlign: 'center' }]}>Invite Friends</Text>
                <View></View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.description}>
                    Share with friends using any of the following options:
                </Text>
                <FlatList
                    data={shareOptions}
                    renderItem={renderShareOption}
                    keyExtractor={item => item.name}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.flatListContent}
                />
            </ScrollView>
        </View>
    );
};

export default Share;

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
        marginVertical: wp(5),
        padding: wp(2),
        borderRadius: 10,
        width: wp(20),
        height: wp(20),
    },
    shareOptionText: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.white,
        marginTop: wp(2),
        textAlign: 'center',
    },
    flatListContent: {
        alignItems: 'center',
    },
});
