import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './navigation.types';
import { IconList, IconSearch } from '@tabler/icons-react-native';
import ProductsListScreen from '@productScreens/ProductsListScreen';
import ProductSearchScreen from '@productScreens/ProductSearchScreen';
import PriceScreen from '@productScreens/ProductPriceScreen';
import ProductCategoriesScreen from '@productScreens/ProductCategoriesScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();
export const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'List':
              return <IconList color={color} size={size} />;
            case 'Search':
              return <IconSearch color={color} size={size} />;
            case 'Categories':
              return <IconList color={color} size={size} />;
            case 'Price':
              return <IconList color={color} size={size} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="List" component={ProductsListScreen} />
      <Tab.Screen name="Search" component={ProductSearchScreen} />
      <Tab.Screen name="Categories" component={ProductCategoriesScreen} />
      <Tab.Screen name="Price" component={PriceScreen} />
    </Tab.Navigator>
  );
};
