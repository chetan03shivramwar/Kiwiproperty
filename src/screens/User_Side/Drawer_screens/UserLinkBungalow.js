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
import React, { useEffect, useRef, useState } from 'react';
import { Colors, fonts, images } from '../../../constant/Indes';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { authstyles } from '../../Auth/AuthStyles';
import ReadMore from '@fawazahmed/react-native-read-more';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal';

const UserLinkBungalow = ({navigation}) => {
    const [filter, setfilter] = useState(false);
    const [selectedfilter, setselectedfilter] = useState('Default Order');
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [select, setSelect] = useState(false);
    const [moreScreen, setMoreScreen] = useState(false);

    const [filteredData, setFilteredData] = useState(Alldata);
    const [activeIndex, setActiveIndex] = useState(null); // Initialize state to track active camera icon

    const handleCameraPress = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle between active and inactive states
    };

    const [currentIndex, setCurrentIndex] = useState(0); // For Swiper index
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (currentIndex < Images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            swiperRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            swiperRef.current.scrollToIndex({ index: currentIndex - 1 });
        }
    };

    const Pricedata = [
        'Default Order',
        'Price High to Low',
        'Price Low to High',
        'New To Old',
        'Old To New',
        'Featured First',
    ];
    const applyFilter = (selectedFilter) => {
        let sortedData = [...Alldata];

        switch (selectedFilter) {
            case 'Price High to Low':
                sortedData.sort((a, b) => parseFloat(b.sgd.replace('$', '')) - parseFloat(a.sgd.replace('$', '')));
                break;
            case 'Price Low to High':
                sortedData.sort((a, b) => parseFloat(a.sgd.replace('$', '')) - parseFloat(b.sgd.replace('$', '')));
                break;
            case 'New To Old':
                sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'Old To New':
                sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'Featured First':
                // You can add custom logic to handle "Featured First" based on your specific criteria
                // For example, let's say featured properties have an additional "featured" flag
                sortedData.sort((a, b) => b.featured - a.featured);
                break;
            default:
                // Default order if no specific filter is selected
                sortedData = [...Alldata];
                break;
        }

        setFilteredData(sortedData);
    };

    useEffect(() => {
        applyFilter('Default Order');
    }, []);
    const Images = [
        {
            id: 1,
            featured: 'FEATURED',
            text: 'FOR RENT',
            price: '5,400',
            source: images.prop1,
        },
        {
            id: 2,
            featured: 'FEATURED',
            text: 'FOR Sale',
            price: '120,021,002',
            source: images.prop2,
        },
        {
            id: 3,
            featured: 'FEATURED',
            text: 'FOR Sale',
            price: '130,022,001',
            source: images.prop3,
        },
    ];

    const data = [
        {
            id: 1,
            agentname: 'Jon Doe',
            sgd: '$1200393',
            Beds: '2',
            bath: '1',
            sqft: '4500',
            type: 'Apartment',
            name: 'Vertue',
            location: 'New York',
            date: '6 months ago',
            image: images.prop1,
        },
        {
            id: 2,
            agentname: 'John Cena',
            sgd: '$1200213',
            Beds: '4',
            bath: '5',
            sqft: '5000',
            type: 'Bungalow',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 month ago',
            image: images.prop2,
        },
        {
            id: 3,
            agentname: 'Rock',
            sgd: '$1200213',
            Beds: '4',
            bath: '5',
            sqft: '5000',
            type: 'Bungalow',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 year ago',
            image: images.prop3,
        },
    ];
    const Alldata = [
        {
            id: 1,
            agentname: 'Jon Doe',
            sgd: '$1200393',
            Beds: '4',
            bath: '4',
            sqft: '4500',
            type: 'Bungalow',
            name: 'Vertue',
            location: 'New York',
            date: '6 months ago',
            image: images.prop1,
            salestaues: 'FOR RENT',
        },
        {
            id: 2,
            agentname: 'John Cena',
            sgd: '$1200213',
            Beds: '5',
            bath: '5',
            sqft: '5000',
            type: 'Bungalow',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 month ago',
            image: images.prop2,
            salestaues: 'MORTGAGE',
        },
        {
            id: 3,
            agentname: 'Rock',
            sgd: '$1200213',
            Beds: '2',
            bath: '1',
            sqft: '5000',
            type: 'Apartment',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 year ago',
            image: images.prop3,
            salestaues: 'FOR RENT',
        },

        {
            id: 4,
            agentname: 'Jon Doe',
            sgd: '$1200393',
            Beds: '2',
            bath: '1',
            sqft: '4500',
            type: 'Apartment',
            name: 'Vertue',
            location: 'New York',
            date: '6 months ago',
            image: images.prop1,
            salestaues: 'MORTGAGE',
        },
        {
            id: 5,
            agentname: 'John Cena',
            sgd: '$1200213',
            Beds: '2',
            bath: '2',
            sqft: '5000',
            type: 'Apartment',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 month ago',
            image: images.prop2,
            salestaues: 'MORTGAGE',
        },
        {
            id: 6,
            agentname: 'Rock',
            sgd: '$1200213',
            Beds: '2',
            bath: '3',
            sqft: '5000',
            type: 'Apartment',
            name: 'Wonderful Location',
            location: 'Chicago',
            date: '1 year ago',
            image: images.prop3,
            salestaues: 'FOR RENT',
        },
        {
            id: 2,
            agentname: 'Jon Doe',
            sgd: '$1200693',
            Beds: '2',
            bath: '1',
            sqft: '4500',
            type: 'Apartment',
            name: 'Vertue',
            location: 'New York',
            date: '6 months ago',
            image: images.prop1,
            salestaues: 'FOR SALE',
        },
    ];
    const Propnewsdata = [
        {
            id: 1,
            name: 'For exceptional sercice, cell.',
            price: '6,800',
            type: 'Bungalow',
            bed: '5',
            bath: '5',
            sqft: '1500'
        },
        {
            id: 2,
            name: 'Wonderful Location',
            price: '5,400',
            type: 'Bungalow',
            bed: '4',
            bath: '4',
            sqft: '2300'

        },
        {
            id: 3,
            name: 'Core to the heart',
            price: '110,121,400',
            type: 'Bungalow',
            bed: '5',
            bath: '5',
            sqft: '2300'

        },
        {
            id: 4,
            name: 'Amazing Sceenery',
            price: '230,032,006',
            type: 'Bungalow',
            bed: '5',
            bath: '5',
            sqft: '2300'

        },
    ];
    const close = () => {
        setShowFilterModal(false);
        setSelect(false);
        setMoreScreen(false);
    };
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
        <Text style={authstyles.headertext}>Link Bungalow</Text>
        <View></View>
    </View>
    <ScrollView>
        <View style={styles.seeAllContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginVertical: wp(2),
                }}>
                <Text
                    style={{
                        fontSize: 12,
                        color: Colors.graish,
                        fontFamily: fonts.Light,
                    }}>
                    Sort by:
                </Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => {
                        setfilter(!filter);
                    }}>
                    <Text
                        style={[
                            styles.sorttext,
                            { color: filter ? 'black' : Colors.main },
                        ]}>
                        {selectedfilter ? selectedfilter : 'Select Filter'}
                    </Text>
                    <Entypo
                        name="select-arrows"
                        size={14}
                        color={filter ? 'black' : Colors.main}
                    />
                </TouchableOpacity>
            </View>
            {/* <Text
style={styles.seeAll}
onPress={() =>
navigation.navigate('All_Properties_Filtered', {
category: selectedCategory,
})
}>
View All
</Text> */}
        </View>
        {filter && (
            <View style={styles.filterDropdown}>
                <FlatList
                    data={Pricedata}
                    nestedScrollEnabled
                    renderItem={({ item }) => (
                        <View style={styles.flterview}>
                            <TouchableOpacity
                                style={styles.seletedfiletrview}
                                onPress={() => {
                                    setselectedfilter(item);
                                    setfilter(false);
                                    applyFilter(item);
                                }}>
                                <Text
                                    style={{
                                        color:
                                            selectedfilter === item ? Colors.main : 'black',
                                        fontFamily: fonts.Regular,
                                        fontSize: 14,
                                    }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item}
                />
            </View>
        )}
        <View style={{ marginBottom: wp(10), borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: wp(5) }}>

            {/* <FlatList
        data={filteredData}
        renderItem={({ item, index }) => {
            return (
                <View activeOpacity={0.9} style={[styles.allflatbox]}>
                    <ImageBackground

                        source={item.image}
                        style={styles.allimage}>
                        <View style={{
                            position: 'absolute',
                            bottom: 0, // Aligns the container at the bottom of the ImageBackground
                            left: 0,
                            right: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: wp(3), // Adjust as needed for padding from the sides
                            paddingVertical: wp(2), // Adjust as needed for padding from the bottom
                            backgroundColor: 'rgba(0,0,0,0.3)', 
                        }}>
                            <View>
                                <Text style={{ fontSize: 14, color: Colors.white, fontFamily: fonts.Medium }}>{item.sgd}</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    padding: wp(2),
                                    backgroundColor: 'rgba(0,0,0,.7)',
                                    borderRadius: 8,
                                }}>
                                <AntDesign
                                    name="hearto"
                                    color={Colors.white}
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={{ paddingHorizontal: wp(3) }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: wp(2),
                                marginTop: wp(4),
                            }}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.name,
                                    {
                                        marginTop: wp(2),
                                        // backgroundColor: 'red',
                                        maxWidth: wp(43),
                                        marginTop: 0,
                                        color: 'black',
                                    },
                                ]}>
                                {item.name}
                            </Text>
                        </View>
                        <Text numberOfLines={1} style={styles.flatlocation}>
                            {item.location}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View>
                                <Text style={styles.flatbeds}>
                                    <Text style={styles.flathighlighted}>Beds: </Text>
                                    {item.Beds} {'    '}
                                    <Text style={styles.flathighlighted}>Baths: </Text>
                                    {item.bath}
                                    {'    '}
                                    <Text style={styles.flathighlighted}>sqft: </Text>
                                    {item.sqft}
                                </Text>
                                <Text style={styles.flattypes}>{item.type}</Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Property_Detail');
                                }}
                                style={{
                                    width: wp(30),
                                    height: wp(12),
                                    backgroundColor: Colors.main,
                                    alignSelf: 'center',
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: fonts.Bold,
                                        color: Colors.white,
                                    }}>
                                    Details
                                </Text>
                                <SimpleLineIcons
                                    name="arrow-right"
                                    size={12}
                                    color={Colors.white}
                                    style={{ marginLeft: wp(5) }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.line2]}></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View style={styles.iconText}>
                                <Ionicons
                                    name="person-outline"
                                    size={16}
                                    color={Colors.gray}
                                />
                                <Text style={[styles.agentname, { fontSize: 12 }]}>
                                    {item.agentname}
                                </Text>
                            </View>
                            <View style={[styles.iconText]}>
                                <Ionicons
                                    name="calendar-outline"
                                    size={16}
                                    color={Colors.gray}
                                />
                                <Text style={[styles.agentname, { fontSize: 12 }]}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }}
    /> */}
            <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.black, marginLeft: wp(4), marginTop: wp(5) }}>Sorry No Result Found</Text>

        </View>
        <View style={{ marginTop: wp(4), }}>

            <View style={{ width: wp(90), alignSelf: 'center', backgroundColor: Colors.white, paddingVertical: wp(5) }}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Featured Properties</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('All_Propperties');
                        }}>
                        <Text style={styles.seeAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <SwiperFlatList
                    ref={swiperRef}
                    autoplay={false}
                    autoplayDelay={6}
                    autoplayLoop={false}
                    index={currentIndex}
                    showPagination={false}
                    paginationActiveColor={Colors.main}
                    paginationStyle={{ bottom: wp(4) }}
                    data={Images}
                    renderItem={({ item, index }) => (
                        <View style={{ width: wp(90), marginTop: wp(3) }}>
                            <ImageBackground
                                source={item.source}
                                style={{ width: wp(90), height: wp(60), justifyContent: 'space-between' }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginTop: wp(2) }}>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#00E800' }}>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.featured}</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#121214' }}>
                                        <Text style={{ fontSize: 8, fontFamily: fonts.Medium, color: Colors.white }}>{item.text}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(2), marginBottom: wp(2) }}>
                                    <View style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), }}>
                                        <Text style={{ fontSize: 14, fontFamily: fonts.Medium, color: Colors.white }}>SGD ${item.price}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => handleCameraPress(index)} // Handle press event
                                        style={{ paddingHorizontal: wp(2), paddingVertical: wp(1), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center', backgroundColor: '#121214', opacity: 0.6 }}
                                    >
                                        <FontAwesome
                                            name='camera'
                                            size={18}
                                            color={index === activeIndex ? Colors.main : Colors.white} // Change color based on state
                                        />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>

                    )}
                    paginationStyleItemActive={{
                        width: 10,
                        height: 10,
                    }}
                    paginationStyleItemInactive={{
                        width: 8,
                        height: 8,
                    }}
                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: 10,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: wp(1.5),
                        paddingVertical: wp(1.5),
                        backgroundColor: '#979B9C',
                        borderRadius: wp(1),
                        opacity: 0.7
                    }}
                    onPress={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <AntDesign name="left" size={16} color={Colors.white} />
                </TouchableOpacity>

                {/* Right Arrow */}
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '60%',
                        right: 10,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: wp(1.5),
                        paddingVertical: wp(1.5),
                        backgroundColor: '#979B9C',
                        borderRadius: wp(1),
                        opacity: 0.7
                    }}
                    onPress={handleNext}
                    disabled={currentIndex === Images.length - 1}
                >
                    <AntDesign name="right" size={16} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginTop: wp(4), marginBottom: wp(25) }}>

            <View style={{ marginTop: wp(2), backgroundColor: Colors.white, width: wp(90), alignSelf: 'center', paddingVertical: wp(4) }}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Properties</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('All_Propperties');
                        }}>
                        {/* <Text style={styles.seeAll}>View All</Text> */}
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={Propnewsdata}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={styles.flatbox2}
                                onPress={() => {
                                    navigation.navigate('Property_Detail');
                                }}>
                                <Image source={images.prop1} style={styles.image2} />
                                <View style={{ marginLeft: wp(3) }}>
                                    <Text style={styles.name2}>{item.name}</Text>
                                    <Text style={[styles.name2, { fontSize: 12 }]}>
                                        SGD ${item.price}
                                    </Text>

                                    <View style={{}}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontFamily: fonts.Regular,
                                                color: 'gray',
                                                marginTop: wp(2),
                                            }}>
                                            {item.bed} beds. {item.bath} baths. {item.sqft} sqft
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontFamily: fonts.Regular,
                                                color: 'gray',
                                                marginTop: wp(2),
                                            }}>
                                            {item.type}
                                        </Text>
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

export default UserLinkBungalow

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        color: Colors.main,
    },
    sgd: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: Colors.white,
    },
    location: {
        marginTop: wp(1),
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        width: wp(90),
        alignSelf: 'center',
    },
    beds: {
        fontSize: 14,
        fontFamily: fonts.Bold,
        color: Colors.white,
        marginLeft: wp(5),
        marginTop: wp(1),
    },
    highlighted: {
        color: Colors.white,
    },
    type: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: Colors.white,
        marginLeft: wp(5),
        marginTop: wp(1),
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(5),
        marginTop: wp(1),
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: wp(10),
    },
    agentname: {
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        marginLeft: wp(2),
    },
    heading: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: Colors.black,
    },
    flatbox: {
        width: wp(60),
        paddingBottom: wp(4),
        backgroundColor: Colors.white,
        elevation: 2,
        marginVertical: wp(2),
        borderRadius: 12,
    },
    image: {
        width: wp(60),
        height: wp(30),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    flatlocation: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        marginTop: 1,
    },
    flatbeds: {
        fontSize: 12,
        fontFamily: fonts.Bold,
        color: Colors.black,
        marginTop: wp(1),
    },
    flathighlighted: {
        color: Colors.graish,
    },
    flattypes: {
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: Colors.black,
    },
    line: {
        width: wp(55),
        backgroundColor: Colors.graish,
        height: wp(0.3),
        marginVertical: wp(3),
    },

    line2: {
        width: wp(85),
        backgroundColor: Colors.gray,
        height: wp(0.2),
        marginVertical: wp(3),
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingVertical: wp(2),
        backgroundColor: '#f1f1f1',
    },
    filterButton: {
        padding: wp(2),
        // backgroundColor: Colors.white,
        borderRadius: 5,
    },
    selectedFilter: {
        backgroundColor: Colors.main,
    },
    filterButtonText: {
        color: Colors.black,
    },
    selectedFilterText: {
        color: Colors.white,
    },
    seeAllContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        marginVertical: wp(2),
    },
    seeAll: {
        color: Colors.main,
        textDecorationLine: 'underline',
    },
    allflatbox: {
        width: wp(90),
        paddingBottom: wp(4),
        backgroundColor: Colors.white,
        elevation: 2,
        // marginVertical: wp(2),
        // borderRadius: 12,
        alignSelf: 'center',
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    allimage: {
        width: wp(85),
        height: wp(40),
        alignSelf: 'center',
        marginTop: wp(3)
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(5),
    },
    search_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        alignSelf: 'center',
        backgroundColor: Colors.white,
        paddingVertical: wp(2),
        // elevation: 2,
        // borderRadius: 12,
        // marginVertical: wp(4),
        paddingHorizontal: wp(5),
        marginTop: 2,
    },
    searchbox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(75),
        backgroundColor: Colors.white,
        height: wp(12),
        elevation: 2,
        borderRadius: 12,
        paddingHorizontal: wp(3),
    },
    filterbox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(12),
        backgroundColor: Colors.white,
        height: wp(12),
        elevation: 2,
        borderRadius: 12,
    },
    filterDropdown: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // position: 'absolute',
        alignSelf: 'flex-start',
        marginLeft: wp(17),
        height: wp(50),
        marginBottom: wp(3)
    },
    flterview: {
        marginVertical: 2,
        borderBottomWidth: 0.6,
    },
    seletedfiletrview: {
        padding: 7,
    },
    sorttext: {
        color: Colors.main,
        marginLeft: 5,
        fontFamily: fonts.Bold,
    },
    text: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.black,
    },
    vertline: {
        width: wp(0.3),
        height: wp(5),
        backgroundColor: Colors.graish,
        marginHorizontal: wp(1),
    },
    flatbox2: {
        width: wp(90),
        paddingVertical: wp(4),
        backgroundColor: Colors.white,
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp(3)
    },
    image2: {
        width: wp(30),
        height: wp(25),
    },
    name2: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        color: Colors.black,
    },
    stage2: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        // backgroundColor: 'red',
        maxWidth: wp(70),
        marginTop: wp(1),
    },
    description2: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.gray,
        marginTop: wp(2),
        width: wp(66),
        // backgroundColor: 'red',
        lineHeight: 22,
        marginRight: 5,
    },
    sorttext: {
        fontSize: 12,
        fontFamily: fonts.Regular,
        color: Colors.main,
        marginLeft: wp(2),
    },
})