import styled from 'styled-components';
import ChatList from './ChatList';
import Pannel from './Pannel';

const Container = styled.div`
    width: 1200px;
    height: 944px;
    border: 1px solid var(--Grey-300, #eaecee);
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
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
