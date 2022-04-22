import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../screens/feed/Feed';
import Redirect from '../screens/redirect/Redirect';

const Stack = createNativeStackNavigator();


function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Feed" component={Feed} />
                <Stack.Screen name="Redirect" component={Redirect} />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;



