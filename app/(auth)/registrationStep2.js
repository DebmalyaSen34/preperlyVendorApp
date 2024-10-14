import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledSwitch = styled(Switch);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function RegistrationStep2({ formData, onNextStep, onPrevStep }) {
    const [cuisineType, setCuisineType] = useState(formData.cuisineType || '');
    const [openTime, setOpenTime] = useState(formData.openTime || '11:00 AM');
    const [closeTime, setCloseTime] = useState(formData.closeTime || '9:00 PM');
    const [openDays, setOpenDays] = useState(formData.openDays || daysOfWeek);

    const toggleDay = (day) => {
        if (openDays.includes(day)) {
            setOpenDays(openDays.filter(d => d !== day));
        } else {
            setOpenDays([...openDays, day]);
        }
    };

    const handleNext = () => {
        if (cuisineType && openTime && closeTime && openDays.length > 0) {
            onNextStep({
                cuisineType,
                openTime,
                closeTime,
                openDays,
            });
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="bg-white p-4">
                <StyledView className="flex-row justify-between mb-6">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <StyledView
                            key={step}
                            className={`w-8 h-8 rounded-full ${step === 2 ? 'bg-red-600' : (step < 2 ? 'bg-red-600' : 'border-2 border-red-600')
                                } items-center justify-center`}
                        >
                            {step === 1 ? (
                                <StyledText className="text-white text-lg">✓</StyledText>
                            ) : (
                                <StyledText className={`${step === 2 ? 'text-white' : 'text-red-600'} text-sm`}>
                                    {step < 10 ? `0${step}` : step}
                                </StyledText>
                            )}
                        </StyledView>
                    ))}
                </StyledView>

                <StyledText className="text-2xl font-bold mb-4">Restaurant Type and Timings</StyledText>

                <StyledView className="mb-4">
                    <StyledText className="mb-2">Cuisine type*</StyledText>
                    <StyledTextInput
                        className="border border-gray-300 rounded p-2"
                        placeholder="Best describe the food you serve"
                        value={cuisineType}
                        onChangeText={setCuisineType}
                    />
                </StyledView>

                <StyledText className="mb-2">Timings*</StyledText>
                <StyledView className="flex-row mb-4">
                    <StyledView className="flex-1 mr-2">
                        <StyledText className="text-xs mb-1">Opens at</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="11:00 AM"
                            value={openTime}
                            onChangeText={setOpenTime}
                        />
                    </StyledView>
                    <StyledView className="flex-1 ml-2">
                        <StyledText className="text-xs mb-1">Closes at</StyledText>
                        <StyledTextInput
                            className="border border-gray-300 rounded p-2"
                            placeholder="9:00 PM"
                            value={closeTime}
                            onChangeText={setCloseTime}
                        />
                    </StyledView>
                </StyledView>

                <TouchableOpacity>
                    <StyledText className="text-red-600 mb-4">+ Add time slots</StyledText>
                </TouchableOpacity>

                <StyledText className="mb-2">Open Days</StyledText>
                {daysOfWeek.map((day) => (
                    <StyledView key={day} className="flex-row items-center justify-between py-2 border-b border-gray-200">
                        <StyledText>{day}</StyledText>
                        <StyledSwitch
                            trackColor={{ false: "#767577", true: "#f4c8c8" }}
                            thumbColor={openDays.includes(day) ? "#dc2626" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => toggleDay(day)}
                            value={openDays.includes(day)}
                        />
                    </StyledView>
                ))}

                <TouchableOpacity>
                    <StyledText className="text-red-600 my-4">Apply Advanced options</StyledText>
                </TouchableOpacity>

                <StyledView className="flex-row justify-between mt-4">
                    <StyledTouchableOpacity
                        className="border border-gray-300 rounded p-3 items-center flex-1 mr-2"
                        onPress={onPrevStep}
                    >
                        <StyledText className="text-gray-700 text-lg">Back</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity
                        className="bg-red-600 rounded p-3 items-center flex-1 ml-2"
                        onPress={handleNext}
                    >
                        <StyledText className="text-white text-lg">Next</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </ScrollView>
        </SafeAreaView>
    );
}