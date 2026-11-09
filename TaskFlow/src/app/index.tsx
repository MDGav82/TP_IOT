import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AccueilScreen from '../screens/AccueilScreen';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  return <AccueilScreen />;
}