import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const AffiliateMemberWrapper = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the Login screen when this component is mounted
    navigation.navigate('Login');
  }, [navigation]);

  return null; // This component doesn't render anything
};

export default AffiliateMemberWrapper;
