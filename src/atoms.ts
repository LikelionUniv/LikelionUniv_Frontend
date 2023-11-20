import { atom } from 'recoil';

export const imgBtnClickAtom = atom({
    key: 'isImgClick',
    default: false,
});

export const userNameAtom = atom({
    key: 'activeUserName',
    default: '',
});

export const loadingAtom = atom({
    key: 'loading',
    default: true,
});
