import React from 'react';
import Select, { ActionMeta, components } from 'react-select';
import { ReactComponent as Arrow } from '../../../img/arrow.svg';
import { roleTrackStyle, genStyle } from './customSelectStyles';

export type OptionType = {
    value: number;
    label: string;
};
type DropDownProps = {
    placeholder: string;
    options: OptionType[];
    onChange: (
        selectedOption: OptionType | null,
        actionMeta: ActionMeta<OptionType>,
    ) => void;
    defaultValue?: OptionType;
};

const DropDown = ({
    placeholder,
    options,
    onChange,
    defaultValue,
}: DropDownProps) => {
    // DropdownIndicator 컴포넌트 재정의(드롭다운 선택시 화살표 돌아가는)
    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <Arrow
                    style={{
                        transform: props.selectProps.menuIsOpen
                            ? 'rotate(0deg)'
                            : 'rotate(180deg)',
                        stroke: props.selectProps.menuIsOpen
                            ? '#4D5359'
                            : '#ADB3BA',
                    }}
                ></Arrow>
            </components.DropdownIndicator>
        );
    };

    return (
        <Select
            options={options}
            defaultValue={defaultValue}
            styles={options.length > 5 ? genStyle : roleTrackStyle}
            isSearchable={false}
            placeholder={placeholder}
            components={{ DropdownIndicator }}
            maxMenuHeight={138}
            onChange={onChange}
            blurInputOnSelect={true}
        />
    );
};

export default DropDown;
