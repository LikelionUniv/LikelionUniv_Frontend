import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc(100% - 204px);
    flex-shrink: 0;
    padding: 24px;
    background-color: #fff;
    border-radius: var(--Percent, 0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NoticeText = styled.span`
    color: var(--Grey-900, #212224);
    text-align: center;

    /* Title/24_Bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
`;

const Loading = () => {
    return (
        <Container>
            <NoticeText>현재 채팅 중인 채팅방이 없어요.</NoticeText>
        </Container>
    );
};

export default Loading;
