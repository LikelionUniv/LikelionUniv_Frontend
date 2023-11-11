import styled from 'styled-components';
import ChatBox from './ChatBox';
// import { imgBtnClickAtom } from './../../atoms';
// import { useRecoilValue } from 'recoil';
// import ImgModal from './ImgAttachment';

const Home = styled.div`
    height: 1080px;
    display: flex;
    padding-top: 40px;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: center;
    background: var(--Grey-200, #f2f4f6);
`;

const ChatHome = () => {
    // const isImgClick = useRecoilValue(imgBtnClickAtom);

    return (
        <Home>
            <ChatBox />

            {/* {isImgClick ? <ImgModal /> : null} */}
        </Home>
    );
};

export default ChatHome;
