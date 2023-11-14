import styled from 'styled-components';
import { ReactComponent as IconDownload } from '../../img/landing/icon_download.svg';
import { ReactComponent as IconArrowUpRightBlack } from '../../img/landing/arrow_up_right_black.svg';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f4f6;
`;

export const Recruit = styled.div`
    width: 100%;
    height: 595px;
    @media (max-width: 720px) {
        height: auto;
        padding: 90px 0;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212224;

    .container {
        position: relative;
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 720px) {
            flex-direction: column;
        }

        .left {
            width: 35%;
            @media (max-width: 1090px) {
                width: 356px;
            }
            @media (max-width: 720px) {
                width: calc(100% - 80px);
            }

            .title {
                display: flex;
                align-items: center;
                color: #fff;
                font-family: Pretendard;
                font-size: 48px;
                font-weight: 700;
                @media (max-width: 957px) {
                    font-size: 4vw;
                }
                @media (max-width: 720px) {
                    font-size: 28px;
                }

                svg {
                    width: 48px;
                    margin-right: 3%;
                    margin-left: 1%;
                    @media (max-width: 957px) {
                        width: 4.8vw;
                        height: 4.8vw;
                    }
                    @media (max-width: 720px) {
                        width: 30px;
                        height: 30px;
                        margin-right: 2%;
                    }
                }
            }

            .text {
                color: #fff;
                font-family: Pretendard;
                font-size: 20px;
                font-weight: 500;
                line-height: 150%;
                margin: 20px 0 50px 0;
                word-break: keep-all;
                @media (max-width: 957px) {
                    font-size: 2.2vw;
                }
                @media (max-width: 720px) {
                    font-size: 16px;
                }
            }

            .btn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 32px;
                background-color: #ff7710;
                border-radius: 8px;
                color: #fff;
                font-family: Pretendard;
                font-size: 20px;
                font-weight: 600;
                word-break: keep-all;
                text-decoration: none;
                border: none;
                outline: none;
                //width: 100%;
                cursor: pointer;
                &:hover {
                    background-color: #eb6500;
                }
                @media (max-width: 957px) {
                    font-size: 2vw;
                }
                @media (max-width: 720px) {
                    font-size: 16px;
                }
                @media (max-width: 500px) {
                    font-size: 3.4vw;
                }

                svg {
                    height: 30px;
                    @media (max-width: 957px) {
                        height: 3vw;
                    }
                    @media (max-width: 720px) {
                        height: 20px;
                    }
                }
            }
        }

        .img-rect {
            height: 320px;
            margin-left: 30px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: #fff;
            @media (max-width: 1090px) {
                width: 57%;
                height: auto;
            }
            @media (max-width: 957px) {
                width: auto;
                height: 272px;
            }
            @media (max-width: 720px) {
                width: calc(100% - 80px);
                height: auto;
                margin-left: 0;
                margin-top: 20px;
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width: 957px) {
                width: 100%;
                height: auto;
            }
        }
    }
`;

export const Makers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    position: relative;

    img {
        height: 200px;
    }

    .container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }

        .text {
            color: #212224;
            font-family: Pretendard;
            font-size: 28px;
            font-weight: 700;
            text-align: center;
            word-break: keep-all;
            @media (max-width: 1000px) {
                font-size: 2.75vw;
            }
            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

        .btn {
            width: 234px;
            @media (max-width: 1000px) {
                width: 25%;
            }
            @media (max-width: 768px) {
                width: 40%;
            }
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            background-color: #212224;
            border-radius: 8px;
            color: #fff;
            word-break: keep-all;
            &:hover {
                color: #ff7710;
                svg {
                    fill: #ff7710;
                }
            }
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;

            svg {
                fill: #fff;
            }
        }
    }
`;

export const Info = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #f2f4f6;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        position: relative;
        width: 1200px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            width: calc(100% - 60px);
        }

        .left {
            .title {
                color: #212224;
                font-size: 28px;
                font-weight: 700;
                font-family: Pretendard;
                margin-bottom: 10px;
            }
            .text {
                color: #212224;
                font-family: Pretendard;
                font-size: 12px;
                font-weight: 500;
                margin-top: 5px;
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8%;
            @media (max-width: 720px) {
                flex-direction: column;
                align-items: flex-end;
                gap: 10px;
                padding: 20px 0;
            }

            a {
                display: flex;
                align-items: center;
                color: #212224;
                font-family: Pretendard;
                font-size: 14px;
                font-weight: 500;
                text-decoration: none;
                flex-shrink: 0;
                svg {
                    width: 16px;
                    height: 16px;
                    margin-left: 3px;
                }
            }

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 40px;
                border-radius: 40px;
                background-color: #212224;
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none;
                margin-right: 0;
            }
        }
    }
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    background-color: #f2f4f6;
    width: 1200px; // Info 섹션과 동일한 너비
    margin-left: auto; // 오른쪽 정렬
    margin-right: auto; // 왼쪽 정렬


    @media (max-width: 1280px) {
    width: calc(100% - 60px); // 화면이 1280px보다 작을 때 너비 조정
    }

    a {
        display: inline-block;
        text-decoration: none;
    }

    svg {
        height: 40px;
        width: auto;
    }

    @media (max-width: 1280px) {
        gap: 15px;
    }

    @media (max-width: 720px) {
        flex-direction: row;
        gap: 10px;
    }
`;


export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  background-color: #f2f4f6;
  width: 1200px; // SocialMediaWrapper와 동일한 너비
  margin-left: auto; // 가운데 정렬
  margin-right: auto; // 가운데 정렬

  @media (max-width: 1280px) {
    width: calc(100% - 60px); // 미디어 쿼리에서 화면이 1280px 이하일 때 조정
    padding-left: 30px; // SocialMediaWrapper와 동일한 패딩
    padding-right: 30px;
  }
`;


export const FamilySiteSection = styled.div`
  margin-bottom: 20px; // 섹션 간 간격을 주기 위한 마진
`;

export const PolicySection = styled.div`
  margin-bottom: 20px; // 섹션 간 간격을 주기 위한 마진
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem; // 타이틀 폰트 크기
  font-weight: bold;
  color: #212224; // 타이틀 색상
  margin-bottom: 10px; // 타이틀과 링크 리스트 간 간격
`;
export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0; // 기본 마진 제거
`;

export const LinkItem = styled.a`
  display: block; // 각 링크가 새로운 줄에 표시되도록 설정
  font-size: 1rem;
  color: #212224;
  text-decoration: none; // 링크 밑줄 제거
  padding: 5px 0; // 위아래 패딩 추가하여 링크 사이에 공간을 줌

  &:hover {
    text-decoration: underline; // 마우스 호버 시 밑줄 표시
  }
`;


export const StyledIconDownload = styled(IconDownload)`
  margin-left: 1px; // 아이콘과 텍스트 사이의 간격
`;

export const StyledIconArrowUpRightBlack = styled(IconArrowUpRightBlack)`
  margin-left: 1px; // 아이콘과 텍스트 사이의 간격
`;

export const LinkItemWithIcon = styled(LinkItem)`
  display: flex; // flexbox를 사용하여 아이콘과 텍스트를 같은 줄에 배치
  align-items: center; // 중앙 정렬
  text-decoration: none; // 텍스트 밑줄 제거

  &:hover {
    text-decoration: underline; // 호버 시 밑줄을 표시
  }
`;