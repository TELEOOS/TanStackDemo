import QueryProvider from 'app/providers/QueryProvider';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabs } from 'app/navigation/MainTabs';

const App = () => {
  return (
    <QueryProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </QueryProvider>
  );
};

export default App;
