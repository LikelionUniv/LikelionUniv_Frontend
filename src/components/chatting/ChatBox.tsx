import styled from 'styled-components';
import ChatList from './ChatList';
import Pannel from './Pannel';

const Container = styled.div`
    border: 1px solid var(--Grey-300, #eaecee);
    border-radius: 8px;
    min-width: 768px;
    min-height: 320px;
    max-height: 944px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    margin: 40px 0;
    background-color: white;
    box-sizing: border-box;

    @media (max-width: 1279px) {
        width: 100%;
        margin: 0;
    }

    @media (max-height: 1080px) {
        height: 944px;
    }
`;

const ChatBox = () => {
    return (
        <Container>
            <ChatList />
            <Pannel />
        </Container>
    );
};

export default ChatBox;
