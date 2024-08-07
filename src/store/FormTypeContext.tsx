import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormTypeContextType {
    formTypes: string[];
    addItem: (item: string) => void;
    removeItem: (item: string) => void;
}

const FormTypeContext = createContext<FormTypeContextType | undefined>(undefined);

const FormTypesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formTypes, setItems] = useState<string[]>([]);

    const addItem = (formType: string) => setItems([...formTypes, formType]);
    const removeItem = (typeToRemove: string) =>
        setItems(formTypes.filter(formType => formType !== typeToRemove));

    return (
        <FormTypeContext.Provider value={{ formTypes, addItem, removeItem }}>
            {children}
        </FormTypeContext.Provider>
    );
};

const useFormTypes = (): FormTypeContextType => {
    const context = useContext(FormTypeContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemsProvider');
    }
    return context;
};

export { FormTypesProvider, useFormTypes };
