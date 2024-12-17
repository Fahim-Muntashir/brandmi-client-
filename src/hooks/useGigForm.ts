import { GigFormData } from '@/types/dataType/gigFormdata.type';
import { demoGigData } from '@/defaultValues/gigDefault.type';
import { useState } from 'react';


export type TabType = 'overview' | 'pricing' | 'description' | 'gallery';

export const useGigForm = () => {
    const [currentTab, setCurrentTab] = useState<TabType>('overview');
    const [formData, setFormData] = useState<GigFormData>(demoGigData);

    const getProgress = () => {
        const steps: Record<TabType, number> = {
            overview: 25,
            pricing: 50,
            description: 75,
            gallery: 100,
        };
        return steps[currentTab];
    };

    const updateFormData = (tab: keyof GigFormData, data: Partial<GigFormData[keyof GigFormData]>) => {
        setFormData((prev) => ({
            ...prev,
            [tab]: { ...prev[tab], ...data },
        }));
    };

    return {
        currentTab,
        setCurrentTab,
        formData,
        getProgress,
        updateFormData,
    };
};