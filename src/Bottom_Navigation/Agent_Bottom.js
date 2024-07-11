import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Term_and_Conditions from '../screens/User_Side/Footer_screen/Term_and_Conditions';
import About_Us from '../screens/User_Side/Footer_screen/About_Us';
import Contact_Us from '../screens/User_Side/Drawer_screens/Contact_Us';
import {Colors, fonts, images} from '../constant/Indes';
const Tab = createBottomTabNavigator();
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import User_Drawer from '../Drawer_Navidation/UserSide/User_Drawer';
import Privacy_Policy from '../screens/User_Side/Drawer_screens/Privacy_Policy';
import Personal_Data_Protection from '../screens/User_Side/Footer_screen/Personal_Data_Protection';
import Share_With_Friends from '../screens/User_Side/Footer_screen/Share_With_Friends';
import Agent_Drawer from '../Drawer_Navidation/AgentSide/Agent_Drawer';
import More_Tabs from '../screens/Agent_side/More_Tabs';
import Career from '../screens/User_Side/Footer_screen/Career';
const User_Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          width: wp(100),
          height: wp(20),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FEFAF6',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        tabBarIcon: ({focused}) => {
          if (route.name === 'Agent_Drawer') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                }}>
                {/* <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.home}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>Home</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.home}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>Home</Text>
                    </View>
                  )}
                </View> */}
              </View>
            );
          }
          if (route.name === 'About_Us') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(10),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.info}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>About Us</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.info}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>About Us</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }

          if (route.name === 'Contact_Us') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(9),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.contactmail}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>Contact Us</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.contactmail}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>Contact Us</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }

          if (route.name === 'Privacy_Policy') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(7),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.file}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>Privacy Policy</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.file}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>Privacy Policy</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }

          if (route.name === 'Career') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(5),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.search}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>
                      Career
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.search}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>
                      Career
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }

          if (route.name === 'Term_and_Conditions') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(2.5),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.term}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>
                        Term and Conditions
                      </Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.term}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>
                        Term and Conditions
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }
          if (route.name === 'More_Tabs') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wp(3.5),
                  right: wp(1),
                }}>
                <View>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.activebox}>
                        <Image
                          source={images.More}
                          style={styles.activeicon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.active_Text}>More</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.inactivebox}>
                        <Image
                          source={images.More}
                          style={styles.icon}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.inactive_Text}>More</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          }
          // if (route.name === 'Share_With_Friends') {
          //   return (
          //     <View
          //       style={{
          //         justifyContent: 'center',
          //         alignItems: 'center',
          //         marginTop: wp(3.5),
          //         right: wp(1),
          //       }}>
          //       <View>
          //         {focused ? (
          //           <View style={{alignItems: 'center'}}>
          //             <View style={styles.activebox}>
          //               <Image
          //                 source={images.shre}
          //                 style={styles.activeicon}
          //                 resizeMode="contain"
          //               />
          //             </View>
          //             <Text style={styles.active_Text}>Invite Friends</Text>
          //           </View>
          //         ) : (
          //           <View style={{alignItems: 'center'}}>
          //             <View style={styles.inactivebox}>
          //               <Image
          //                 source={images.shre}
          //                 style={styles.icon}
          //                 resizeMode="contain"
          //               />
          //             </View>
          //             <Text style={styles.inactive_Text}>Invite Friends</Text>
          //           </View>
          //         )}
          //       </View>
          //     </View>
          //   );
          // }
        },
      })}>
      <Tab.Screen name="Agent_Drawer" component={Agent_Drawer} />
      <Tab.Screen name="About_Us" component={About_Us} />
      <Tab.Screen name="Contact_Us" component={Contact_Us} />
      <Tab.Screen name="Privacy_Policy" component={Privacy_Policy} />
      <Tab.Screen
        name="Career"
        component={Career}
      />
      <Tab.Screen name="Term_and_Conditions" component={Term_and_Conditions} />
      <Tab.Screen name="More_Tabs" component={More_Tabs} />
    </Tab.Navigator>
  );
};

export default User_Bottom;

const styles = StyleSheet.create({
  icon: {
    width: wp(6),
    height: wp(6),
  },
  active_Text: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: Colors.main,
    textAlign: 'center',
    marginTop: 4,
  },
  inactive_Text: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 4,
  },
  activeicon: {
    width: wp(6),
    height: wp(6),
    tintColor: Colors.main,
  },
});
