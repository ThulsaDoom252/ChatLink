'use client';

import Select from 'react-select'
import React from "react";

interface SelectProps {
    label: string;
    value?: Record<string, any>;
    onChange: (value: Record<string, any>) => void;
    options: Record<string, any>[];
    disabled?: boolean;
}

const SelectCustom: React.FC<SelectProps> = ({
                                           label,
                                           value,
                                           onChange,
                                           options,
                                           disabled,
                                       }) => {
    return (
        <div className="z-[100]">
            <label
                className="
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
        "
            >
                {label}
            </label>
            <div className="mt-2">
                <Select
                    isDisabled={disabled}
                    value={value}
                    onChange={onChange}
                    isMulti
                    options={options}
                    menuPortalTarget={document.body}
                    styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 })
                    }}
                    classNames={{
                        control: () => 'text-sm',
                    }}
                />
            </div>
        </div>
    );
}

export default SelectCustom;