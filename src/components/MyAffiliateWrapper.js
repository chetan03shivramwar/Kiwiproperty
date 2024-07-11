import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const MyAffiliateWrapper = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the Login screen when this component is mounted
    navigation.navigate('My_Affiliate');
  }, [navigation]);

  return null; // This component doesn't render anything
};

export default MyAffiliateWrapper;
