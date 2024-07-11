import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ImageBackground,
    ScrollView, TextInput
} from 'react-native';
import React, { useState } from 'react';
import { authstyles } from '../../Auth/AuthStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Colors, fonts, images } from '../../../constant/Indes';
import ReadMore from '@fawazahmed/react-native-read-more';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Button from '../../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Agentss2 = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchPressed, setIsSearchPressed] = useState(false);
    const agentdata = [
        {
            id: 1,
            name: 'Gerald P',
            stage: 'Marketing Director at Kiwi Properties Pte Ltd',

            des: 'We, Kiwi Properties Pte Ltd, a real estate advertising company with a team of professionals in business development, sales and marketing. In the new era of digital marketing, we...Read More',

            Company_Name: 'Kiwi Properties Pte Ltd',
            Contact: '+65ContactEmail',
            Email: 'peter.g@kiwi.sg',
        },
        {
            id: 2,
            name: 'Gerald',
            stage: 'Marketing Director at Kiwi Properties Pte Ltd',

            des: 'We, Kiwi Properties Pte Ltd, a real estate advertising company with a team of professionals in business development, sales and marketing. In the new era of digital marketing, we...Read More',

            Company_Name: 'Kiwi Properties Pte Ltd',
            Contact: '+65ContactEmail',
            Email: 'peter.g@kiwi.sg',
        },
    ];

    const handleSearch = () => {
        setIsSearchPressed(true);
    };
    const filteredData = isSearchPressed
        ? agentdata?.filter(agent =>
            agent?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent?.stage.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : agentdata;

    return (
        <View style={authstyles.container}>
            <View style={[authstyles.header,{justifyContent:'center'}]}>
                <TouchableOpacity style={{ position: 'absolute', left: wp(4) }} activeOpacity={0.9} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.black} size={24} />
                </TouchableOpacity>
                <Text style={authstyles.headertext}>Agents</Text>
                <View></View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: wp(4), marginTop: wp(3), marginBottom: wp(2) }}>
                    <Text style={{ fontSize: 16, fontFamily: fonts.Medium, color: Colors.black }}>Serach for Agent</Text>
                    <View style={{ marginTop: wp(2), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: wp(75), borderWidth: 1, height: wp(11), borderColor: 'lightgrey', borderRadius: wp(1), flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(2) }}>
                            <Feather
                                name='search'
                                color={'grey'}
                                size={18}
                            />
                            <TextInput
                                placeholder='Enter either Full or Partial Agent name'
                                placeholderTextColor={'grey'}
                                value={searchTerm}
                                onChangeText={text => setSearchTerm(text)}
                                style={{ fontSize: 14, color: 'black' }}
                            />

                        </View>
                        <TouchableOpacity onPress={handleSearch} style={{ width: wp(14), height: wp(11), marginLeft: wp(2), borderRadius: wp(1), backgroundColor: Colors.main, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>Serach</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={filteredData}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={[styles.flatbox1, {}]}
                                    onPress={() => {
                                        navigation.navigate('Agents_Detail');
                                    }}>
                                    <ImageBackground
                                        borderTopLeftRadius={12}
                                        borderTopRightRadius={12}
                                        source={images.agentprofile}
                                        style={[styles.image1, { justifyContent: 'flex-end' }]}>
                                        <Image
                                            source={images.logo}
                                            resizeMode="contain"
                                            style={{
                                                width: wp(10),
                                                height: wp(10),
                                                marginBottom: 5,
                                                marginLeft: 15,
                                            }}
                                        />
                                    </ImageBackground>
                                    <Text
                                        style={[
                                            styles.name1,
                                            {
                                                textAlign: 'center',
                                                marginTop: wp(2),
                                                alignSelf: 'center',
                                                fontFamily: fonts.Bold,
                                                color: Colors.black,
                                            },
                                        ]}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={[
                                            {
                                                textAlign: 'center',
                                                marginTop: wp(2),
                                                alignSelf: 'center',
                                                fontFamily: fonts.Medium,
                                                color: Colors.black,
                                                fontSize: 14,
                                            },
                                        ]}>
                                        {item.stage}
                                    </Text>
                                    <ReadMore
                                        seeMoreStyle={{
                                            color: Colors.bahama,
                                            fontFamily: fonts.Medium,
                                        }}
                                        seeLessStyle={{
                                            color: Colors.bahama,
                                            fontFamily: fonts.Medium,
                                        }}
                                        numberOfLines={2}
                                        style={styles.description1}>
                                        {item.des}
                                    </ReadMore>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(6),
                                        }}>
                                        <Text style={styles.name1}>Agent Name:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50) },
                                            ]}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(1),
                                        }}>
                                        <Text style={styles.name1}>Company Name:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50) },
                                            ]}>
                                            {item.Company_Name}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(1),
                                        }}>
                                        <Text style={styles.name1}>Title/Position:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50) },
                                            ]}>
                                            {item.stage}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(1),
                                        }}>
                                        <Text style={styles.name1}>Licance No:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50) },
                                            ]}>
                                            218ndndN
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(1),
                                        }}>
                                        <Text style={styles.name1}>Contact:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50), color: 'blue' },
                                            ]}>
                                            {item.Contact}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: wp(1),
                                        }}>
                                        <Text style={styles.name1}>Emial:</Text>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                styles.stage1,
                                                { marginLeft: wp(2), width: wp(50), color: 'blue' },
                                            ]}>
                                            {item.Email}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            width: wp(80),
                                            alignSelf: 'center',
                                            marginTop: wp(6),
                                        }}>
                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="phone-square"
                                                size={24}
                                                color="#4AC354"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Ionicons name="mail" size={28} color="#4AC354"
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="facebook-square"
                                                size={24}
                                                color="#4AC354"

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="twitter-square"
                                                size={24}
                                                color="#4AC354"

                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="linkedin-square"
                                                size={24}
                                                color="#4AC354"

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="youtube-square"
                                                size={24}
                                                color="gray"
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <FontAwesome name="instagram" size={24} color="gray" />
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="pinterest-square"
                                                size={24}
                                                color="gray"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <FontAwesome
                                                name="vimeo-square"
                                                size={24}
                                                color="gray"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        style={styles.button}
                                        onPress={() => {
                                            navigation.navigate('Agents_Detail');
                                        }}>
                                        <Text style={styles.btntext}>View My Properties</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                <View style={styles.addbox}>
                    <Text style={styles.headings}>Featured Properties</Text>
                    <ImageBackground source={images.prop1} style={styles.featureimage}>
                        <View></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: wp(5),
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: fonts.Regular,
                                    color: 'white',
                                }}>
                                SGD $5999
                            </Text>
                            <TouchableOpacity style={styles.box}>
                                <Ionicons name="camera" size={20} color={Colors.white} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.addbox}>
                    <Text style={styles.headings}> Property Type</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(6),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Appartment
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (4)
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Bangalow
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (41)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Commercial
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Condominium / Apartment
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Hot Listing (Selling Hot)
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Others
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                Semi-Detached
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>
                </View>
                <View style={styles.addbox}>
                    <Text style={styles.headings}> Property Status</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(6),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                For Rent
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (4)
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                For Slae
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (41)
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: wp(5),
                            marginTop: wp(2),
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <MaterialIcons name="play-arrow" size={14} color={Colors.main} />

                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: Colors.main,
                                    marginLeft: wp(2),
                                }}>
                                MORTGAGE
                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: fonts.Regular,
                                color: Colors.graish,
                            }}>
                            (14)
                        </Text>
                    </View>
                </View>



                <View style={styles.addbox}>
                    <Text style={styles.headings}>Latest Post</Text>

                    <View style={{ marginTop: wp(2) }}>
                        <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Property_news_Detail');
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            width: wp(85),
                                            paddingHorizontal: wp(5),
                                            marginVertical: wp(2),
                                        }}>
                                        <Image
                                            source={images.prop1}
                                            style={{ width: wp(25), height: wp(20) }}
                                        />
                                        <View style={{ marginLeft: wp(3) }}>
                                            <Text
                                                numberOfLines={1}
                                                style={[styles.headings, { marginLeft: 0 }]}>
                                                For export Service call
                                            </Text>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    styles.desc,
                                                    { marginLeft: 0, marginTop: wp(1) },
                                                ]}>
                                                hshhd dhodhsaohdas ashdohasodhoasd sadoashdohasod
                                                dhasodhoashd
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start',
                                                    alignSelf: 'flex-start',
                                                }}>
                                                <Text
                                                    numberOfLines={1}
                                                    style={[
                                                        {
                                                            color: Colors.main,
                                                            fontFamily: fonts.Medium,
                                                            fontSize: 14,
                                                            // marginTop: wp(2),
                                                        },
                                                    ]}>
                                                    Read more
                                                </Text>
                                                <MaterialIcons
                                                    name="play-arrow"
                                                    size={14}
                                                    color={Colors.main}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Agentss2
const styles = StyleSheet.create({
    flatbox1: {
        width: wp(90),
        paddingBottom: wp(4),
        backgroundColor: Colors.white,
        alignSelf: 'center',
        elevation: 2,

        marginVertical: wp(2),
        paddingHorizontal: wp(3),
        borderRadius: 12,
    },
    image1: {
        width: wp(90),
        height: wp(60),
        // borderRadius: 100,
        alignSelf: 'center',
        // borderRadius: 10,
    },
    name1: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        width: wp(30),
        // backgroundColor: 'red',
    },
    stage1: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        // backgroundColor: 'red',
        maxWidth: wp(70),
        marginTop: wp(1),
    },
    description1: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        marginTop: wp(2),
        maxWidth: wp(75),
        // backgroundColor: 'red',
        lineHeight: 22,
    },
    button: {
        width: wp(80),
        height: wp(12),
        backgroundColor: Colors.main,
        marginTop: wp(5),
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize: 14,
        fontFamily: fonts.Bold,
        color: Colors.white,
    },
    addbox: {
        width: wp(90),
        paddingVertical: wp(3),
        backgroundColor: Colors.white,
        elevation: 2,
        alignSelf: 'center',
        marginVertical: wp(2),
        // borderRadius: 12,
    },
    headings: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: Colors.black,
        marginLeft: wp(5),
    },
    line: {
        width: wp(85),
        height: wp(0.3),
        backgroundColor: '#e2e2e2',
        alignSelf: 'center',
        marginTop: wp(6),
        marginBottom: wp(4),
    },
    featureItem1: {
        flex: 1,
        margin: wp(1),
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10,
        // padding: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
    },
    featureText: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.black,
        marginLeft: wp(2),
    },
    featureimage: {
        width: wp(85),
        height: wp(50),
        alignSelf: 'center',
        marginTop: wp(4),
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: wp(2),
    },
    box: {
        padding: wp(2.5),
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 10,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.graish,
        width: wp(55),
        // backgroundColor: 'red',
        marginLeft: wp(2),
        // textAlign: 'right',
    },
});