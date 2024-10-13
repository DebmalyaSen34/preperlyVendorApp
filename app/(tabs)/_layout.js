import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const TabBarIcon = ({ name, focused }) => (
    <View>
        <Ionicons
            name={name}
            size={24}
            color={focused ? '#000000' : '#9CA3AF'}
        />
    </View>
);

export default function TabLayout() {
    return (
        <StyledView className="flex-1">
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        height: 60,
                        paddingBottom: 8,
                        paddingTop: 8,
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: '#E5E7EB',
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? 'home-sharp' : 'home'} focused={focused} />,
                    }}
                />
                <Tabs.Screen
                    name="analytics"
                    options={{ 
                        tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} focused={focused} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({ focused }) => <TabBarIcon name={focused ? 'book' : 'book-outline'} focused={focused} />,
                    }}
                />
            </Tabs>
            <StyledTouchableOpacity
                className="absolute right-4 bottom-12 bg-red-600 rounded-full w-12 h-12 items-center justify-center"
                onPress={() => {
                    // Handle QR code button press
                }}
            >
                <Ionicons name="qr-code" size={24} color="white" />
            </StyledTouchableOpacity>
        </StyledView>
    );
}