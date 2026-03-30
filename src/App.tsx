import { View, Text } from 'react-native';
import React from 'react';
import QueryProvider from 'app/providers/QueryProvider';

const App = () => {
  return (
    <QueryProvider>
      <View>
        <Text>This is my first react native using tanstack </Text>
      </View>
    </QueryProvider>
  );
};

export default App;
