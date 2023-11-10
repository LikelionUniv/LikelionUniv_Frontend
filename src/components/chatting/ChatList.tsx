import * as L from './ChatListStyle';
import { useState } from 'react';
import dummy from './db/userdata.json';
import ProfileImg from '../../img/chatting/user_profile.svg';
import SplitDot from '../../img/chatting/split_dot.svg';

const ChatList = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <L.Container>
            <L.Header>
                <L.HeaderText>채팅</L.HeaderText>
            </L.Header>
            {dummy.user.map(user => (
                <L.ListContainer>
                    <L.UserChat
                        className={isActive ? 'active' : ''}
                        onClick={handleClick}
                    >
                        <L.UserProfile>
                            <img
                                src={ProfileImg}
                                alt="profile"
                                style={{
                                    border: '1px solid #eaeaea',
                                    borderRadius: '50%',
                                }}
                            />
                        </L.UserProfile>
                        <L.UserChatInfo>
                            <L.UserName>{user.name}</L.UserName>
                            <L.DetailInfo>
                                <L.UserDetail>{user.cardinal}기</L.UserDetail>
                                <img src={SplitDot} alt="dot" />
                                <L.UserDetail>{user.track}</L.UserDetail>
                            </L.DetailInfo>
                        </L.UserChatInfo>
                    </L.UserChat>
                </L.ListContainer>
            ))}
        </L.Container>
    );
};

export default ChatList;
