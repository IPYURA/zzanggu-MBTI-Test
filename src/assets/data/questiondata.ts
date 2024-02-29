export interface IQuestion {
  id: number;
  title: string;
  answera: string;
  answerb: string;
  type: string;
}

export const QuestionData: IQuestion[] = [
  {
    id: 1,
    title: "약속이 없는 주말에 나는",
    answera: "단톡에 연락해서 친구들과 약속을 잡는다.",
    answerb: "침대랑 하루종일 물아일체가 된다.",
    type: "EI",
  },
  {
    id: 2,
    title: "친구의 친구를 소개받으며 셋이 한 자리에 있는 상황일때 나는",
    answera: "먼저 말 걸면서 분위기를 띄운다.",
    answerb: "말을 걸어올 때까지 기다리고 본다.",
    type: "EI",
  },
  {
    id: 3,
    title: "나의 반려동물이 정말 이쁜 것 같다. 나의 행동은?",
    answera:
      "너무 이쁜 것 같아.. 사람들한테 자랑해야지..!! 하며 인스타를 만들어서 사진도 공유하고 소통도 한다.",
    answerb: "너무 이쁘다.. 사진찍어서 사진첩에 간직한다.",
    type: "EI",
  },
  {
    id: 4,
    title: "걷던 중 맛있어 보이는 밥집을 발견한 나는",
    answera: "유명하고 리뷰도 많으니까 맛은 보장되어 있겠군",
    answerb: "간판에서 맛집의 기운이 느껴진다 맛집 각이야!",
    type: "SN",
  },
  {
    id: 5,
    title: "오늘 본 영화를 궁금해하는 친구에게 나는",
    answera: "주인공이 좀비 바이러스가 퍼져서 치료하기 위한 영화야!",
    answerb: "좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어!",
    type: "SN",
  },
  {
    id: 6,
    title: "규칙이란 무엇인가? 라는 질문을 받은 나의 대답은?",
    answera: "지키라고 만든 것.",
    answerb: "나를 억압하는 것",
    type: "SN",
  },
  {
    id: 7,
    title:
      "비행기 옆자리에 마음에 드는 이상형이 있다. 어쩌다 대화를 시작한 나는",
    answera: "이것저것 궁금한 것을 질문한다.",
    answerb: "풍부한 공감과 리액션을 해준다.",
    type: "TF",
  },
  {
    id: 8,
    title: "나를 더 잘 표현하는 것은?",
    answera: "편견이 없고 심플하다",
    answerb: "따뜻하고 몽글몽글하다",
    type: "TF",
  },
  {
    id: 9,
    title: "나의 제안에 '생각해볼게' 라고 말하는 친구. 나의 생각은?",
    answera: "실제로 고민할 시간이 필요하다.",
    answerb: "거절의 의미가 약간 있다.",
    type: "TF",
  },
  {
    id: 10,
    title: "일에 변화가 생겼을 때 나의 대처는?",
    answera: "미리 계획된 방식에 따라 대처하며 안정성과 질서를 유지한다.",
    answerb: "상황을 파악하고 필요에 따라 즉흥적인 조치를 취하는 편",
    type: "JP",
  },
  {
    id: 11,
    title: "여행을 계획할 때 나는",
    answera: "상세한 일정과 계획을 세워 여행을 진행하는 편",
    answerb: "상황에 따라 유동적으로 일정을 조정하며 유연하게 여행하는 편",
    type: "JP",
  },
  {
    id: 12,
    title: "자기전 나는?",
    answera: "내일 할 일을 미리미리 정해놓고 잔다.",
    answerb: "누우면 장땡! 일단 눕고 생각한다.",
    type: "JP",
  },
];
