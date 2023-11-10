import profile_img from '../../img/chatting/chat_profile.svg';
import * as P from './PannelStyle';
import Messages from './Messages';
import Input from './Input';

const Pannel = () => {
    return (
        <P.Container>
            <P.Header>
                <P.ChatInfo>
                    <img
                        src={profile_img}
                        alt="chat profile"
                        style={{
                            border: '1px solid #eaeaea',
                            borderRadius: '50%',
                        }}
                    />
                    <P.ChatName>이름</P.ChatName>
                </P.ChatInfo>
            </P.Header>
            <P.Shadow />
            <Messages />
            <Input />
        </P.Container>
    );
};

export default Pannel;
