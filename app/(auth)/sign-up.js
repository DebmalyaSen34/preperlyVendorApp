import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function RegistrationStep1({ onNextStep }) {
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternateNumber, setAlternateNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [receiveUpdates, setReceiveUpdates] = useState(false);

    const handleNext = () => {
        // Implement validation logic here
        onNextStep();
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="bg-white">
                <StyledView className="p-4">
                    <StyledView className="flex-row justify-between mb-4">
                        {[1, 2, 3, 4, 5].map((step) => (
                            <StyledView
                                key={step}
                                className={`w-8 h-8 rounded-full ${step === 1 ? 'bg-red-600' : 'bg-gray-300'
                                    } items-center justify-center`}
                            >
                                <StyledText className={`${step === 1 ? 'text-white' : 'text-gray-600'}`}>
                                    {step < 10 ? `0${step}` : step}
                                </StyledText>
                            </StyledView>
                        ))}
                    </StyledView>

                    <StyledText className="text-2xl font-bold mb-4">Restaurant details</StyledText>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Name*</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Restaurant name"
                            value={restaurantName}
                            onChangeText={setRestaurantName}
                        />
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Address*</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Restaurant address"
                            value={address}
                            onChangeText={setAddress}
                        />
                    </StyledView>

                    <StyledText className="text-xl font-bold mb-4">Restaurant contact details*</StyledText>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Phone number*</StyledText>
                        <StyledView className="flex-row">
                            <StyledTextInput
                                keyboardType='numeric'
                                maxLength={10}
                                className="flex-1 border border-gray-300 rounded p-2 mr-2"
                                placeholder="Phone number"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                            <StyledTouchableOpacity className="bg-red-600 rounded px-4 py-2 flex items-center justify-center">
                                <StyledText className="text-white">verify</StyledText>
                            </StyledTouchableOpacity>
                        </StyledView>
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Alternate number</StyledText>
                        <StyledTextInput
                            keyboardType='numeric'
                            maxLength={10}
                            className="border border-gray-300 rounded p-2"
                            placeholder="Alternate Phone number"
                            value={alternateNumber}
                            onChangeText={setAlternateNumber}
                        />
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Email *</StyledText>
                        <StyledView className="flex-row">
                            <StyledTextInput
                                keyboardType='email-address'
                                className="flex-1 border border-gray-300 rounded p-2 mr-2"
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </StyledView>
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Set Password*</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Enter password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Confirm Password*</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Enter password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </StyledView>

                    <StyledText className="text-xl font-bold mb-4">Restaurant owner details</StyledText>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Name*</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Name"
                            value={ownerName}
                            onChangeText={setOwnerName}
                        />
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Phone number *</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Phone number"
                            value={ownerPhone}
                            onChangeText={setOwnerPhone}
                        />
                    </StyledView>

                    <StyledView className="mb-4">
                        <StyledText className="mb-2">Email</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="Email"
                            value={ownerEmail}
                            onChangeText={setOwnerEmail}
                        />
                    </StyledView>

                    <StyledTouchableOpacity
                        className="bg-red-600 rounded p-3 items-center"
                        onPress={handleNext}
                    >
                        <StyledText className="text-white text-lg">Next</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </ScrollView>
        </SafeAreaView>
    );
}