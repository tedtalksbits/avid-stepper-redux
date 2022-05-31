import React from "react";
import Benefits from "./steps/Benefits";
import UserInfo from "./steps/UserInfo";

const steps = [
    {
        component: Benefits,
        title: "Benefits",
    },
    {
        component: UserInfo,
        title: "User Info",
    },
];
export const StepperContainer = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const handleNext = () => {
        currentStep < steps.length - 1 && setCurrentStep(currentStep + 1);
    };
    const handlePrev = () => {
        currentStep > 0 && setCurrentStep(currentStep - 1);
    };

    const CURRENT_STEP = currentStep + 1;
    return (
        <div>
            {CURRENT_STEP}
            {steps.map((step, index) =>
                index === currentStep ? (
                    <div key={step.title}>
                        <h3>{step.title}</h3>
                        <step.component />
                    </div>
                ) : null
            )}
            <button onClick={handlePrev}>back</button>
            <button onClick={handleNext}>next</button>
        </div>
    );
};
