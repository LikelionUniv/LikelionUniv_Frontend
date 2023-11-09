import React from 'react';
import LoginImage from '../../../img/login/Login.png';
import * as ML from './MLogin.style';
import MMoreInfo from './MMoreInfo';
import MLoginComplete from './MLoginComplete';

const MLogin = () => {
    return (
        <>
            <ML.Container>
                <ML.Text>
                    멋쟁이사자처럼에
                    <br />
                    오신 걸 환영합니다.
                </ML.Text>
                <ML.Item src={LoginImage} alt="login" />

                <ML.Box>
                    <ML.GoogleBtn>
                        <span>Google 계정으로 로그인</span>
                    </ML.GoogleBtn>
                    <ML.KakaoBtn>
                        <span>카카오 로그인</span>
                    </ML.KakaoBtn>
                </ML.Box>
            </ML.Container>
            <MMoreInfo />
            <MLoginComplete />
        </>
    );
};

export default MLogin;
