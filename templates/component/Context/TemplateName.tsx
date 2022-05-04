import React, { FC, createContext } from 'react';

type TemplateNameState = {};
const TemplateNameDefaultValues: TemplateNameState = {};

interface TemplateNameProps {
    children?: React.ReactNode;
}

export const TemplateName = createContext<TemplateNameState>(
    TemplateNameDefaultValues
);

export const TemplateNameProvider: FC<TemplateNameProps> = ({
    children,
}: TemplateNameProps) => {
    const value = {};
    return (
        <TemplateName.Provider value={value}>{children}</TemplateName.Provider>
    );
};
