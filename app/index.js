import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { Redirect, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledLinearGradient = styled(LinearGradient);

const { width } = Dimensions.get('window');

export default function LandingPage() {
    return (
        <StyledSafeAreaView className="flex-1 bg-white">
            <StyledLinearGradient
                colors={['#FFF5F5', '#FECACA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="flex-1"
            >
                <StyledView className="flex-1 p-6 justify-between">
                    <StyledView>
                        <Image
                            source={require('../assets/preperlyLogo.png')}
                            style={{ width: 100, height: 100 }}
                            className="rounded-full mb-6"
                        />
                        <StyledText className="text-4xl font-bold mb-2">
                            Welcome to{'\n'}
                            <StyledText className="text-red-600">Preperly!</StyledText>
                        </StyledText>
                        <StyledText className="text-base mt-4 text-gray-700">
                            Preperly is the perfect platform to connect with hungry customers and boost your business.
                        </StyledText>
                    </StyledView>

                    <StyledView className="items-center my-8">
                        <Image
                            source={{ uri: 'https://via.placeholder.com/300x200?text=Restaurant+Illustration' }}
                            style={{ width: width * 0.8, height: (width * 0.8) / 1.5 }}
                            className="rounded-2xl shadow-lg"
                        />
                    </StyledView>

                    <StyledView className="w-full space-y-4">
                        <StyledTouchableOpacity onPress={() => router.push('/sign-up')} className="bg-red-600 rounded-full py-4 px-6 flex-row items-center justify-center shadow-md">
                            <Ionicons name="restaurant-outline" size={24} color="white" />
                            <StyledText className="text-white text-center text-lg font-semibold ml-2">
                                Register your Restaurant
                            </StyledText>
                        </StyledTouchableOpacity>

                        <StyledTouchableOpacity className="bg-white border-2 border-red-600 rounded-full py-4 px-6 flex-row items-center justify-center shadow-md">
                            <Ionicons name="log-in-outline" size={24} color="#DC2626" />
                            <StyledText className="text-red-600 text-center text-lg font-semibold ml-2">
                                Login to view your Restaurants
                            </StyledText>
                        </StyledTouchableOpacity>
                    </StyledView>

                    <StyledView className="mt-8 items-center">
                        <StyledText className="text-gray-600 text-sm">
                            Join thousands of successful restaurants
                        </StyledText>
                        <StyledView className="flex-row mt-2">
                            <Ionicons name="star" size={16} color="#FCD34D" />
                            <Ionicons name="star" size={16} color="#FCD34D" />
                            <Ionicons name="star" size={16} color="#FCD34D" />
                            <Ionicons name="star" size={16} color="#FCD34D" />
                            <Ionicons name="star-half" size={16} color="#FCD34D" />
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledLinearGradient>
        </StyledSafeAreaView>
    );
}