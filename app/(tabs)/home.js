import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledSwitch = styled(Switch);

const PhotoButton = ({ icon, text }) => (
    <StyledTouchableOpacity className="bg-red-600 rounded-lg p-4 items-center justify-center flex-1 mx-1">
        <Ionicons name={icon} size={24} color="white" />
        <StyledText className="text-white mt-2">{text}</StyledText>
    </StyledTouchableOpacity>
);

const MenuItem = ({ name, description, available, onToggle }) => (
    <StyledView className="flex-row items-center bg-white rounded-lg p-4 mb-4 shadow-sm">
        <Image
            source={{ uri: 'https://via.placeholder.com/60' }}
            className="w-15 h-15 rounded-md mr-4"
        />
        <StyledView className="flex-1">
            <StyledText className="text-lg font-semibold">{name}</StyledText>
            <StyledText className="text-gray-500 w-20">{description}</StyledText>
        </StyledView>
        <StyledView className="items-end">
            <StyledTouchableOpacity>
                <StyledText className="text-red-600 mb-2">Edit</StyledText>
            </StyledTouchableOpacity>
            <StyledView className="flex-row items-center">
                <StyledText className="mr-2 text-gray-500">Available</StyledText>
                <StyledSwitch
                    value={available}
                    onValueChange={onToggle}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={available ? "#f5dd4b" : "#f4f3f4"}
                />
            </StyledView>
        </StyledView>
    </StyledView>
);

export default function RestaurantPage() {
    const [isOnline, setIsOnline] = useState(true);
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Spicy Ramen', description: 'Hot and flavorful noodle soup', available: true },
        { id: 2, name: 'Sushi Platter', description: 'Assorted fresh sushi rolls', available: true },
        { id: 3, name: 'Matcha Ice Cream', description: 'Creamy green tea flavored dessert', available: false },
    ]);

    const toggleMenuItem = (id) => {
        setMenuItems(menuItems.map(item =>
            item.id === id ? { ...item, available: !item.available } : item
        ));
    };

    return (
        <StyledScrollView className="flex-1 bg-gray-100">
            <StyledView className="p-4">
                {/* Header */}
                <StyledView className="flex-row justify-between items-center mb-6">
                    <StyledView className="flex-row items-center">
                        <StyledSwitch
                            value={isOnline}
                            onValueChange={setIsOnline}
                            trackColor={{ false: "#767577", true: "#34D399" }}
                            thumbColor={isOnline ? "#f5dd4b" : "#f4f3f4"}
                        />
                        <StyledText className="ml-2 text-lg font-semibold">
                            {isOnline ? 'Online' : 'Offline'}
                        </StyledText>
                    </StyledView>
                    <StyledView className="flex-row">
                        <TouchableOpacity className="mr-4">
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="person-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </StyledView>
                </StyledView>

                {/* Photos Section */}
                <StyledView className="mb-6">
                    <StyledText className="text-2xl font-bold mb-4">Photos</StyledText>
                    <StyledView className="flex-row justify-between">
                        <PhotoButton icon="add" text="Add photos" />
                        <PhotoButton icon="create" text="Edit photos" />
                        <PhotoButton icon="images" text="View photos" />
                    </StyledView>
                </StyledView>

                {/* Menu Section */}
                <StyledView>
                    <StyledText className="text-2xl font-bold mb-4">Menu</StyledText>
                    {menuItems.map(item => (
                        <MenuItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            available={item.available}
                            onToggle={() => toggleMenuItem(item.id)}
                        />
                    ))}
                </StyledView>
            </StyledView>
        </StyledScrollView>
    );
}