import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 937px;
    height: 72px;
    align-items: center;
    padding: var(--Percent, 8px) var(--Percent, 15px) var(--Percent, 16px)
        var(--Percent, 16px);
    gap: var(--Percent, 8px);
    border-radius: var(--Percent, 0px) var(--Percent, 0px) 8px
        var(--Percent, 0px);
    background: var(--White, #fff);

    @media (max-width: 1280px) {
        width: 100%;
    }
`;

export const Message = styled.div`
    width: 848px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--Grey-300, #eaecee);
    display: flex;
    align-items: center;
`;

export const MessageInput = styled.input`
    color: var(--Grey-900, #212224);
    width: 100%;

    /* Body/14_Medium */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */

    &::-ms-input-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
    &::-webkit-input-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
    &::-moz-placeholder {
        color: var(--Grey-600, #adb3ba);

        /* Body/14_Medium */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
`;

export const SendMsg = styled.div`
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--Percent, 0px);
    flex-shrink: 0;

    /* 비어있을 때 */
    border-radius: 8px;
    background: var(--Grey-600, #adb3ba);
`;
