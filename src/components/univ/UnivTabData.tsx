import chungang from '../../img/univ/chungang.png';
import chungnam from '../../img/univ/chungnam.png';
import hongik from '../../img/univ/hongik 1.png';
import duksung from '../../img/univ/duksung.png';
import dongduk from '../../img/univ/dongduk.png';
import dongguk from '../../img/univ/dongguk.png';
import eulji from '../../img/univ/eulji.png';
import ewha from '../../img/univ/ewha.png';
import hanbat from '../../img/univ/hanbat.png';
import handong from '../../img/univ/handong.png';
import hangkong from '../../img/univ/hangkong.png';
import hansung from '../../img/univ/hansung.png';
import hanyang from '../../img/univ/hanyang.png';
import hanyang_w from '../../img/univ/hanyang_w.png';
import hufs from '../../img/univ/hufs.png';
import incheon from '../../img/univ/incheon.png';
import inha from '../../img/univ/inha.png';
import jeonbuk from '../../img/univ/jeonbuk.png';
import joongbu from '../../img/univ/joongbu.png';
import kangnam from '../../img/univ/kangnam.png';
import keimyung from '../../img/univ/keimyung.png';
import kookmin from '../../img/univ/kookmin.png';
import kwangwoon from '../../img/univ/kwangwoon.png';
import myongji_lib from '../../img/univ/myongji_lib.png';
import myongji_nat from '../../img/univ/myongji_nat.png';
import namseoul from '../../img/univ/namseoul.png';
import sangmyung_cheonan from '../../img/univ/sangmyung_cheonan.png';
import sangmyung_seoul from '../../img/univ/sangmyung_seoul.png';
import sejong from '../../img/univ/sejong.jpeg';
import seokeong from '../../img/univ/seokeong.png';
import seoul from '../../img/univ/seoul.png';
import seoul_w from '../../img/univ/seoul_w.png';
import sogang from '../../img/univ/sogang.png';
import sookmyung from '../../img/univ/sookmyung.png';
import soongsil from '../../img/univ/soongsil.png';
import sungkyul from '../../img/univ/sungkyul.jpeg';
import sungkyunkwan from '../../img/univ/sungkyunkwan.png';
import sungshin from '../../img/univ/sungshin.png';
import yeungnam from '../../img/univ/yeungnam.png';
import yonsei from '../../img/univ/yonsei.png';
import hallym from '../../img/univ/hallym.png';

export interface ITabData {
    school: string;
    region: string;
    website: string;
    logo?: string;
}

export const tabData: { [key: string]: ITabData[] } = {
    서울: [
        {
            school: '홍익대학교',
            region: '서울',
            website: 'https://likelionhongik.com/',
            logo: hongik,
        },
        {
            school: '광운대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_kwangwoon',
            logo: kwangwoon,
        },
        {
            school: '고려대학교',
            region: '서울',
            website: '',
        },
        {
            school: '강남대학교',
            region: '서울',
            website: 'https://www.knu-likelion.org/',
            logo: kangnam,
        },
        {
            school: '국민대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_kmu/',
            logo: kookmin,
        },
        {
            school: '단국대학교',
            region: '서울',
            website: 'https://www.instagram.com/dku_likelion11th/',
        },
        {
            school: '동국대학교',
            region: '서울',
            website: 'https://likeliondgu.oopy.io/',
            logo: dongguk,
        },
        {
            school: '동덕여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/dongduk_likelion',
            logo: dongduk,
        },
        {
            school: '중앙대학교',
            region: '서울',
            website: 'https://cau-likelion.org/',
            logo: chungang,
        },
        {
            school: '가톨릭대학교',
            region: '서울',
            website:
                'https://likelioncuk.notion.site/likelioncuk/ade52330317b445998c7b066071bbff4',
        },
        {
            school: '서울여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_swu/',
            logo: seoul_w,
        },
        {
            school: '성균관대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_skku/',
            logo: sungkyunkwan,
        },
        {
            school: '세종대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sejong/',
            logo: sejong,
        },
        {
            school: '덕성여자대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion_ds/',
            logo: duksung,
        },
        {
            school: '한성대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion_hansung',
            logo: hansung,
        },
        {
            school: '건국대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion.ku',
        },
        {
            school: '상명대학교(서울)',
            region: '서울',
            website: 'https://www.instagram.com/likelion_smu/',
            logo: sangmyung_seoul,
        },
        {
            school: '성공회대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_skhu/',
        },
        {
            school: '서강대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sg/',
            logo: sogang,
        },
        {
            school: '연세대학교',
            region: '서울',
            website: 'https://yonseilikelion.pythonanywhere.com/',
            logo: yonsei,
        },
        {
            school: '숙명여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/sookmyung_likelion/',
            logo: sookmyung,
        },
        {
            school: '숭실대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_ssu/',
            logo: soongsil,
        },
        {
            school: '한국외국어대학교(서울)',
            region: '서울',
            website: 'https://www.instagram.com/likelion_hufs/',
            logo: hufs,
        },
        {
            school: '서경대학교',
            region: '서울',
            website: 'https://nowjiin.github.io/likelionsku.github.io/',
            logo: seokeong,
        },
        {
            school: '서울대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_snu/',
            logo: seoul,
        },
        {
            school: '명지대학교(서울)',
            region: '서울',
            website: 'https://www.instagram.com/likelion_mju/',
            logo: myongji_lib,
        },
        {
            school: '삼육대학교',
            region: '서울',
            website: 'https://syulion11th.github.io/likelionpage-front/',
        },
        {
            school: '성신여자대학교',
            region: '서울',
            website: 'https://www.instagram.com/likelion_sswu/',
            logo: sungshin,
        },
        {
            school: '이화여자대학교',
            region: '서울',
            website: 'https://linktr.ee/likelion.ewha',
            logo: ewha,
        },
        {
            school: '한양여자대학교',
            region: '서울',
            website: 'https://instagram.com/likelion_hywoman',
            logo: hanyang_w,
        },
    ],

    부산: [
        {
            school: '부산외국어대학교',
            region: '부산',
            website: 'https://www.instagram.com/likelion_bufs/',
        },
    ],
    대구: [
        {
            school: '계명대학교',
            region: '대구',
            website: 'https://www.instagram.com/likelion.kmu',
            logo: keimyung,
        },
    ],
    인천: [
        {
            school: '인천대학교',
            region: '인천',
            website: 'https://www.instagram.com/inu_likelion/',
            logo: incheon,
        },
        {
            school: '인하대학교',
            region: '인천',
            website: 'https://www.instagram.com/likelion_inha/',
            logo: inha,
        },
    ],
    대전: [
        {
            school: '한밭대학교',
            region: '대전',
            website: 'http://hanbat-likelion.kr/',
            logo: hanbat,
        },
        {
            school: '을지대학교',
            region: '대전',
            website: 'https://linktr.ee/likelion_eulji',
            logo: eulji,
        },
        { school: '한남대학교', region: '대전', website: '' },
    ],

    경기: [
        {
            school: '고려대학교(세종)',
            region: '경기',
            website: 'https://www.instagram.com/likelion_ku_sejong/',
        },
        {
            school: '성결대학교',
            region: '경기',
            website: 'https://linktr.ee/likelion_sku',
            logo: sungkyul,
        },
        {
            school: '한국항공대학교',
            region: '경기',
            website: 'https://www.instagram.com/kau_likelion/',
            logo: hangkong,
        },
        {
            school: '한양대학교(에리카)',
            region: '경기',
            website: 'https://linktr.ee/likelion_erica',
            logo: hanyang,
        },
        {
            school: '한국외국어대학교(글로벌)',
            region: '경기',
            website:
                'https://hufsglobal.notion.site/ece28870debd4c50b943266433f284cc',
        },
        {
            school: '명지대학교(자연)',
            region: '경기',
            website: 'https://mju-likelion.org/',
            logo: myongji_nat,
        },
        { school: '아주대학교', region: '경기', website: '' },
    ],
    강원: [
        {
            school: '강원대학교',
            region: '강원',
            website: 'https://www.instagram.com/likelion_kangwon/',
        },
        {
            school: '한림대학교',
            region: '강원',
            website: 'https://www.instagram.com/likelion_hallym/',
            logo: hallym,
        },
    ],
    충북: [
        {
            school: '한국교통대학교',
            region: '충북',
            website: 'http://knut.likelion.org/',
        },
    ],
    충남: [
        {
            school: '상명대학교(천안)',
            region: '충남',
            website: 'https://www.instagram.com/likelion_smuc/',
            logo: sangmyung_cheonan,
        },
        { school: '중부대학교', region: '충남', website: '', logo: joongbu },
        {
            school: '순천향대학교',
            region: '충남',
            website: 'https://www.instagram.com/schlikelion/',
        },
        {
            school: '남서울대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelionnsu/',
            logo: namseoul,
        },
        {
            school: '한서대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelion_hsu/',
        },
        {
            school: '충남대학교',
            region: '충남',
            website: 'https://www.instagram.com/likelion._.cnu/',
            logo: chungnam,
        },
    ],
    전남: [{ school: '순천대학교', region: '전남', website: '' }],
    전북: [
        {
            school: '전북대학교',
            region: '전북',
            website:
                'https://likelionjbnu.notion.site/11-a32d1db7bba2467eb985f9a4d97e7a77',
            logo: jeonbuk,
        },
    ],
    경북: [
        {
            school: '금오공과대학교',
            region: '경북',
            website: 'https://www.instagram.com/likelionkumoh/',
        },
        {
            school: '영남대학교',
            region: '경북',
            website: 'https://linktr.ee/likelion_yu',
            logo: yeungnam,
        },
        { school: '한동대학교', region: '경북', website: '', logo: handong },
        {
            school: '경북대학교',
            region: '경북',
            website: 'https://www.instagram.com/likelion_knu/',
        },
    ],
    경남: [
        {
            school: '경상국립대학교',
            region: '경남',
            website: 'https://www.instagram.com/likelion_gnu/',
        },
        { school: '경남대학교', region: '경남', website: '' },
    ],
};
// 탭 메뉴
export const regionTab: string[] = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',

    '대전',

    '경기',
    '강원',
    '충북',
    '충남',
    '전남',
    '전북',
    '경남',
];

// 학교 이름만 필요할 때
export const schoolList = Object.values(tabData).flatMap(tab =>
    tab.map(value => value.school),
);
