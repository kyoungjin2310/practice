export type CList = {
  name: string;
  details: string;
  detailsDate: string;
  area: string;
};

export const careerList: CList[] = [
  {
    name: "삼성서울병원 의학정보시스템",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/10~2019/01",
    area: "반응형",
  },
  {
    name: "서강대학교 도서관 신규 홈페이지",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/07~2019/11",
    area: "반응형",
  },
  {
    name: "이천시립도서관 통합도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/10~2019/12",
    area: "반응형",
  },
  {
    name: "한화종합연구소 기술자료 관리 홈페이지",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/10~2019/12",
    area: "반응형",
  },
  {
    name: "전남도립대학교 전자도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/09~2019/10",
    area: "반응형",
  },
  {
    name: "한국노동연구원 통합전자 도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/08~2019/09",
    area: "반응형",
  },
  {
    name: "이화여자대학교 도서관 독서 프로파일링",
    details: "독서 프로파일링 페이지 퍼블리싱",
    detailsDate: "2019/11~2019/12",
    area: "비반응형",
  },
  {
    name: "인천연구원 전자도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/03~2019/04",
    area: "반응형",
  },
  {
    name: "선문대 중앙도서관 홈페이지 개편",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2019/01~2019/03",
    area: "반응형",
  },
  {
    name: "LG화학 전자도서관 시스템",
    details: "모바일 도서관 메인 퍼블리싱",
    detailsDate: "2018/12~2019/01",
    area: "기타",
  },
  {
    name: "한국뇌연구원 전자도서관 이용자서비스",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/11~2019/01",
    area: "반응형",
  },
  {
    name: "한국예술종합학교 반응형 전자도서관",
    details: "메인 수정, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/10~2018/11",
    area: "반응형",
  },
  {
    name: "한국에너지기술연구원 웹기반 통합 전자도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/07~2018/09",
    area: "반응형",
  },
  {
    name: "동국대학교 서울경주 첨단도서관",
    details: "동국대학교 서울 메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/04~2018/09",
    area: "반응형",
  },
  {
    name: "우즈베키스탄2016",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/02~2018/03",
    area: "반응형",
  },
  {
    name: "단국대학교 도서관 홈페이지 개편 및 전자도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2018/01~2018/05",
    area: "반응형",
  },
  {
    name: "한동대학교 도서전산 통합시스템",
    details: "메인, 서브 퍼블리싱",
    detailsDate: "2017/11~2018/01",
    area: "비반응형",
  },
  {
    name: "한국직업능력개발원 전자도서관 솔루션기능 개선및 운영지원",
    details: "메인, 서브 퍼블리싱",
    detailsDate: "2017/11~2017/12",
    area: "비반응형",
  },
  {
    name: "해양과학도서관",
    details: "메인, 서브 퍼블리싱",
    detailsDate: "2017/11~2017/12",
    area: "비반응형",
  },
  {
    name: "금융감독원 전자도서관",
    details: "메인, 서브 퍼블리싱 (반응형)",
    detailsDate: "2017/10~2017/11",
    area: "반응형",
  },
  {
    name: "한국청소년정책연구원 전자도서관",
    details: "메인, 서브 퍼블리싱",
    detailsDate: "2017/09~2017/10",
    area: "비반응형",
  },
  {
    name: "경일대학교 전자도서관",
    details: "메인, 서브 수정",
    detailsDate: "2020/04~2020/05",
    area: "기타",
  },
];

export type PList = {
  name: string;
  details?: string;
  url?: string;
  skills?: string[];
};

export const profile: PList[] = [
  {
    name: "Name",
    details: "오경진",
  },
  {
    name: "Phone",
    details: "010-6226-4422",
  },
  {
    name: "Email",
    details: "kyoungjn2310@gmail.com",
  },
  {
    name: "GitHub",
    details: "https://github.com/kyoungjin2310",
  },
  {
    name: "Skills",
    skills: [
      "Html5",
      "Css3",
      "Scss",
      "Jquery",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
    ],
  },
];
