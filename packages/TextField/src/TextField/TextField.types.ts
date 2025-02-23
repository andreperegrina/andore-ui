import React, { PropsWithChildren } from 'react';

export type TextFieldVariant = 'filled' | 'outlined';

export interface TextFieldProps extends PropsWithChildren<React.HTMLAttributes<HTMLInputElement>> {
    label?: string;
    supportText?: string;
    variant?: TextFieldVariant;
    placeholder?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    readOnly?: boolean;
    error?: boolean;
    type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}
