import React, { useState, useEffect, useRef } from 'react';
import * as P from './ProjectRegisterStyle';
import Gallery from '../../../img/project/gallery.svg';
import Hyphen from '../../../img/project/hyphen.svg';
import Cancel from '../../../img/project/cancel.svg';
import Vertical from '../../../img/project/vertical.svg';
import FirstVertical from '../../../img/project/firstVertical.svg';
import { checkboxes, genOptions, output, thon } from './RegisterOptions';
import { ActionMeta } from 'react-select';
import DropDown, { OptionType } from './DropDown';
import SchoolDropDown from './SchoolDropDown';
import Checkbox from './Checkbox';
import useCheckbox from './useCheckbox';

import AutoHeightTextarea from './AutoHeightTextarea';
import useArray from '../../../hooks/useArray';

/* form type */
interface FormState {
    thon: string;
    thonEtc: string;
    outPut: string;
    outPutEtc: string;
    serviceName: string;
    startDate: Date | null;
    endDate: Date | null;
    tech: string[];
    techEtc: string;
    description: string;
    content: string;
    projectUrl: string;
    images: Image[];
    generation: number;
    university: string;
    members: string;
}

interface Image {
    name: string;
    saved: string;
}

const ProjectRegister = () => {
    const [isFill, setIsFill] = useState<boolean>(false); // 필드가 다 채워졌는지를 체크하는 state
    const { array: images, pushMany: setImages, remove } = useArray<Image>([]); // image 배열

    const [formState, setFormState] = useState<FormState>({
        thon: '',
        thonEtc: '',
        outPut: '',
        outPutEtc: '',
        serviceName: '',
        startDate: null,
        endDate: null,
        tech: [],
        techEtc: '',
        description: '',
        content: '',
        projectUrl: '',
        images: images,
        generation: 0,
        university: '',
        members: '',
    });

    const [activeThonEtc, setActiveThonEtc] = useState<boolean>(false);
    const [activeOutPutEtc, setActiveOutPutEtc] = useState<boolean>(false);

    // 드롭다운을 관리하는 함수
    // 카테고리와 아웃풋에서 기타를 눌렀을 때 추가 입력창 생성
    const handleSelectChange =
        (field: keyof FormState) =>
        (
            selectedOption: OptionType | null,
            actionMeta: ActionMeta<OptionType>,
        ) => {
            if (selectedOption) {
                setFormState(prev => ({
                    ...prev,
                    [field]: selectedOption.label,
                }));

                if (field === 'thon') {
                    setActiveThonEtc(selectedOption.label === '기타');
                }

                if (field === 'outPut') {
                    setActiveOutPutEtc(selectedOption.label === '기타');
                }
            }
        };

    // 입력창을 관리하는 함수
    const handleInputChange = (
        field: keyof FormState,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
        setFormState(prev => ({
            ...prev,
            [field]: event.target.value,
        }));

    // 폼 제출할 때 실행되는 함수
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFill) return;

        console.log(formState);
    };

    const { checkboxList, checkHandler } = useCheckbox(checkboxes);
    const [etcCheck, setEtcCheck] = useState<boolean>(false);

    // 체크박스 선택을 관리하는 함수
    const handleCheckboxChange = (id: number, checked: boolean) => {
        const state = checkHandler(id, checked);

        setFormState(prev => ({
            ...prev,
            tech: state
                .filter(checkbox => checkbox.isChecked)
                .map(checkbox => checkbox.label),
        }));
    };

    const fileRef = useRef<HTMLInputElement | null>(null);

    // 파일을 입력받아 state에 반영
    const handleFileSelect = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const files = event.target.files;

        if (files != null) {
            const imageMeta: Image[] = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const name = file.name;
                const saved = await readUrl(file);
                imageMeta.push({ name, saved });
            }
            setImages(imageMeta);
        }
    };

    // img의 url을 읽는 함수
    const readUrl = async (file: File): Promise<string> => {
        return await new Promise<string>(resolve => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const url = fileReader.result?.toString() ?? '';
                resolve(url);
            };
            fileReader.readAsDataURL(file);
        });
    };

    // 이미지 버튼을 눌렀을 때 파일 선택 창을 띄우는 함수
    const handleImgBtn = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };

    // 이미지가 변동되면 form에 이미지 변경사항 반영
    useEffect(() => {
        setFormState(prev => ({
            ...prev,
            images: images,
        }));
    }, [images]);

    useEffect(() => {
        if (
            formState.images.length === 0 ||
            formState.thon === '' ||
            formState.outPut === '' ||
            formState.startDate === null ||
            formState.endDate === null ||
            formState.serviceName === '' ||
            formState.description === '' ||
            formState.content === '' ||
            formState.tech.length === 0 ||
            formState.generation === 0 ||
            formState.university === '' ||
            formState.members === '' ||
            (formState.thon === '기타' && formState.thonEtc === '') ||
            (formState.outPut === '기타' && formState.outPutEtc === '') ||
            (etcCheck && formState.techEtc === '')
        ) {
            setIsFill(false);
        } else {
            setIsFill(true);
        }
    }, [formState, etcCheck]);

    useEffect(() => {
        console.log(formState);
    }, [formState]);

    return (
        <P.Container>
            <P.Title>프로젝트 등록</P.Title>
            <P.Caption>
                <P.Label>이미지</P.Label>
                <P.ImgRegisterBtn onClick={handleImgBtn}>
                    <img src={Gallery} alt="gallery" />
                    이미지 추가
                </P.ImgRegisterBtn>
            </P.Caption>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileRef}
                onChange={handleFileSelect}
                multiple
            />

            <P.ImgRegisterGuide>
                <P.Li>
                    <P.Accent>썸네일은 첫번째 이미지</P.Accent>로 등록됩니다.
                </P.Li>
                <P.Li>
                    이미지의 해상도는 <P.Accent>1920X1080</P.Accent> 사이즈를
                    권장하며, 더 작은 이미지는 깨져서 보일 수 있습니다.
                </P.Li>
            </P.ImgRegisterGuide>

            {images.length === 0 ? (
                <P.ImageMent>프로젝트 이미지를 추가해주세요</P.ImageMent>
            ) : (
                <P.Images>
                    {images.map((image, idx) => (
                        <P.Img key={`img-${idx}`} src={image.saved}>
                            <P.DeleteBtn
                                isFirst={idx === 0}
                                onClick={() => remove(idx)}
                            >
                                <P.ImgNumber>{idx + 1}</P.ImgNumber>
                                <img
                                    src={idx === 0 ? FirstVertical : Vertical}
                                    alt="vertical"
                                />
                                <img src={Cancel} alt="cancel" />
                            </P.DeleteBtn>
                        </P.Img>
                    ))}
                </P.Images>
            )}
            <P.Form onSubmit={handleSubmit}>
                <P.Field>
                    <P.Label>활동유형</P.Label>
                    <DropDown
                        placeholder="활동 선택"
                        options={thon}
                        onChange={handleSelectChange('thon')}
                    />
                    {activeThonEtc ? (
                        <P.Input
                            type="text"
                            placeholder="활동 이름을 입력해주세요."
                            value={formState.thonEtc}
                            onChange={event =>
                                handleInputChange('thonEtc', event)
                            }
                        />
                    ) : null}
                </P.Field>
                <P.Field>
                    <P.Label>아웃풋 형태</P.Label>
                    <DropDown
                        placeholder="아웃풋 형태 선택"
                        options={output}
                        onChange={handleSelectChange('outPut')}
                    />
                    {activeOutPutEtc ? (
                        <P.Input
                            type="text"
                            placeholder="아웃풋 형태를 입력해주세요."
                            value={formState.outPutEtc}
                            onChange={event =>
                                handleInputChange('outPutEtc', event)
                            }
                        />
                    ) : null}
                </P.Field>
                <P.Field>
                    <P.Label>제작 기간</P.Label>
                    <P.FlexField>
                        <P.PeriodInput
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={
                                formState.startDate
                                    ? formState.startDate
                                          .toString()
                                          .substring(0, 10)
                                    : ''
                            }
                            onChange={event =>
                                handleInputChange('startDate', event)
                            }
                        />
                        <img src={Hyphen} alt="hyphen" />
                        <P.PeriodInput
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={
                                formState.endDate
                                    ? formState.endDate
                                          .toString()
                                          .substring(0, 10)
                                    : ''
                            }
                            onChange={event =>
                                handleInputChange('endDate', event)
                            }
                        />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>서비스 이름</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스의 이름을 입력해주세요."
                        value={formState.serviceName}
                        onChange={event =>
                            handleInputChange('serviceName', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>한줄 소개</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스의 한줄 소개를 입력해주세요."
                        value={formState.description}
                        onChange={event =>
                            handleInputChange('description', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>상세 소개</P.Label>
                    <AutoHeightTextarea
                        placeholder="서비스의 상세 소개를 입력해주세요."
                        value={formState.content}
                        onChange={event => handleInputChange('content', event)}
                    />
                </P.Field>
                <P.Field>
                    <P.Label>서비스 링크</P.Label>
                    <P.Input
                        type="text"
                        placeholder="서비스로 연결되는 링크를 입력해주세요."
                        value={formState.projectUrl}
                        onChange={event =>
                            handleInputChange('projectUrl', event)
                        }
                    />
                </P.Field>
                <P.Field>
                    <P.Label>기술 스택</P.Label>
                    <P.CheckBoxDiv>
                        <P.CheckEtc>
                            <Checkbox
                                checkboxId={0}
                                label={'기타 직접 입력'}
                                value={0}
                                checked={etcCheck}
                                onChange={() => setEtcCheck(prev => !prev)}
                            />
                        </P.CheckEtc>
                        <P.TechGrid>
                            {checkboxList.map(checkbox => (
                                <Checkbox
                                    checkboxId={checkbox.id}
                                    label={checkbox.label}
                                    value={checkbox.id}
                                    checked={checkbox.isChecked}
                                    onChange={event =>
                                        handleCheckboxChange(
                                            checkbox.id,
                                            event.target.checked,
                                        )
                                    }
                                />
                            ))}
                        </P.TechGrid>
                    </P.CheckBoxDiv>
                    {etcCheck ? (
                        <P.Input
                            type="text"
                            placeholder="기술 스택을 입력해주세요."
                            value={formState.techEtc}
                            onChange={event =>
                                handleInputChange('techEtc', event)
                            }
                        />
                    ) : null}
                </P.Field>
                <P.Field>
                    <P.Label>기수/학교</P.Label>
                    <P.FlexField>
                        <DropDown
                            placeholder="기수 선택"
                            options={genOptions}
                            onChange={handleSelectChange('generation')}
                        />
                        <P.Gap />
                        <SchoolDropDown
                            onChange={handleSelectChange('university')}
                        />
                    </P.FlexField>
                </P.Field>
                <P.Field>
                    <P.Label>팀원</P.Label>
                    <P.Input
                        type="text"
                        placeholder="팀원 이름을 작성해주세요."
                        value={formState.members}
                        onChange={event => handleInputChange('members', event)}
                    />
                </P.Field>
                <P.RegisterBtn type="submit" active={isFill}>
                    등록하기
                </P.RegisterBtn>
            </P.Form>
        </P.Container>
    );
};

export default ProjectRegister;
