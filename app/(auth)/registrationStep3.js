import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function RegistrationStep3({ formData, onNextStep, onPrevStep }) {
    const [fssaiLicence, setFssaiLicence] = useState(formData.fssaiLicence || '');
    const [gstin, setGstin] = useState(formData.gstin || '');
    const [panCard, setPanCard] = useState(formData.panCard || '');
    const [accountHolderName, setAccountHolderName] = useState(formData.accountHolderName || '');
    const [accountNumber, setAccountNumber] = useState(formData.accountNumber || '');

    const handleNext = () => {
        if (fssaiLicence && gstin && panCard && accountHolderName && accountNumber) {
            onNextStep({
                fssaiLicence,
                gstin,
                panCard,
                accountHolderName,
                accountNumber,
            });
        } else {
            alert('Please fill in all required fields');
        }
    };

    const renderInputWithUpload = (label, value, setValue, placeholder, uploadText) => (
        <StyledView className="mb-4">
            <StyledText className="mb-2">{label}*</StyledText>
            <StyledTextInput
                className="border border-gray-300 rounded p-2 mb-1"
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
            <TouchableOpacity>
                <StyledText className="text-red-600">{uploadText}</StyledText>
            </TouchableOpacity>
        </StyledView>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="bg-white p-4">
                <StyledView className="flex-row justify-between mb-6">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <StyledView
                            key={step}
                            className={`w-8 h-8 rounded-full ${step <= 3 ? 'bg-red-600' : 'border-2 border-red-600'
                                } items-center justify-center`}
                        >
                            {step < 3 ? (
                                <StyledText className="text-white text-lg">✓</StyledText>
                            ) : (
                                <StyledText className={`${step === 3 ? 'text-white' : 'text-red-600'} text-sm`}>
                                    {step < 10 ? `0${step}` : step}
                                </StyledText>
                            )}
                        </StyledView>
                    ))}
                </StyledView>

                <StyledText className="text-2xl font-bold mb-4">Documents Upload</StyledText>

                {renderInputWithUpload(
                    'FSSAI Licence',
                    fssaiLicence,
                    setFssaiLicence,
                    'Enter Licence ID',
                    'Add FSSAI document*'
                )}

                {renderInputWithUpload(
                    'GSTIN',
                    gstin,
                    setGstin,
                    'Enter GSTIN ID',
                    'Add Latest GSTIN Filed document*'
                )}

                {renderInputWithUpload(
                    'Pan card',
                    panCard,
                    setPanCard,
                    'Pan card number',
                    'Add Pan card photo*'
                )}

                <StyledText className="text-xl font-bold mb-4">Bank account details*</StyledText>

                <StyledView className="mb-4">
                    <StyledText className="mb-2">Account holder's name*</StyledText>
                    <StyledTextInput
                        className="border border-gray-300 rounded p-2"
                        placeholder="Name"
                        value={accountHolderName}
                        onChangeText={setAccountHolderName}
                    />
                </StyledView>

                <StyledView className="mb-4">
                    <StyledText className="mb-2">Account Number*</StyledText>
                    <StyledTextInput
                        className="border border-gray-300 rounded p-2"
                        placeholder="Number"
                        value={accountNumber}
                        onChangeText={setAccountNumber}
                        keyboardType="numeric"
                    />
                </StyledView>

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