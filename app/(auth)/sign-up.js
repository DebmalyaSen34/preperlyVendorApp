import React, { useState } from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import RegistrationStep1 from './registrationStep1';
import RegistrationStep2 from './registrationStep2';
import RegistrationStep3 from './registrationStep3';

const StyledView = styled(View);

export default function RegistrationForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 data
        restaurantName: '',
        address: '',
        phoneNumber: '',
        email: '',
        alternateNumber: '',
        ownerName: '',
        ownerPhone: '',
        ownerEmail: '',
        // Step 2 data
        cuisineType: '',
        openTime: '',
        closeTime: '',
        openDays: [],
        // Step 2 data
        fssaiLicence: '',
        gstin: '',
        panCard: '',
        accountHolderName: '',
        accountNumber: ''
    });

    const handleNextStep = (stepData) => {
        setFormData({ ...formData, ...stepData });
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <RegistrationStep1
                        formData={formData}
                        onNextStep={(stepData) => handleNextStep(stepData)}
                    />
                );
            case 2:
                return (
                    <RegistrationStep2
                        formData={formData}
                        onNextStep={(stepData) => handleNextStep(stepData)}
                        onPrevStep={handlePrevStep}
                    />
                );
            case 3:
                return (
                    <RegistrationStep3
                        formData={formData}
                        onNextStep={(stepData) => handleNextStep(stepData)}
                        onPrevStep={handlePrevStep}
                    />
                )
            default:
                return null;
        }
    };

    return <StyledView className="flex-1">{renderStep()}</StyledView>;
}