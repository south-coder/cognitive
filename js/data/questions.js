
export const QUESTIONS = [
  {
    id: "high_aadl_1",
    category: "aadl",
    domain: 1,
    difficulty: "high",
    type: "image_choice",

    title: "AADL - 시지각",
    description: "기본적인 일상생활에서 눈으로 본 정보를 인식하고 구별하는 능력을 평가합니다.",
    question: "빨래 바구니가 올바르게 놓여진 그림은 무엇인가?",

    images: [
      "question/high/aadl/1/high_aadl_1_1.png",
      "question/high/aadl/1/high_aadl_1_2.png",
      "question/high/aadl/1/high_aadl_1_3.png",
      "question/high/aadl/1/high_aadl_1_4.png"
    ],

    answer: 4
  },

  {
    id: "high_aadl_2",
    category: "aadl",
    domain: 2,
    difficulty: "high",
    type: "image_choice",

    title: "AADL - 지남력",
    description: "기본적인 일상생활에서 시간, 장소, 상황을 올바르게 인지하는 능력을 평가합니다.",
    question: "주방에서 하는 활동",

    images: [
      "question/high/aadl/2/high_aadl_2_1.png",
      "question/high/aadl/2/high_aadl_2_2.png",
      "question/high/aadl/2/high_aadl_2_3.png",
      "question/high/aadl/2/high_aadl_2_4.png"
    ],

    answer: 1
  },

  {
    id: "high_aadl_3",
    category: "aadl",
    domain: 3,
    difficulty: "high",
    type: "number_choice",

    title: "AADL - 계산력",
    description: "기본적인 일상생활에서 간단한 수와 계산을 이해하고 처리하는 능력을 평가합니다.",
    question: "하루에 약을 3번 먹습니다. 7일 동안 총 몇 번 먹습니까?",

    image: "question/high/aadl/3/high_aadl_3_1.png",

    choices: ["18번", "20번", "21번", "24번"],

    answer: 3
  },

  {
    id: "high_aadl_4",
    category: "aadl",
    domain: 4,
    difficulty: "high",
    type: "image_choice",

    title: "AADL - 기억력",
    description: "기본적인 일상생활에서 필요한 정보를 기억하고 활용하는 능력을 평가합니다.",
    question: "다음 상황을 읽고 기억하세요. 세수 -> 양치 -> 옷입기. 김씨는 아침에 일어나서 세수를 하고 양치를 한 뒤 000를 하였습니다. 000에 들어갈 답은 무엇일까요?",

    images: [
      "question/high/aadl/4/high_aadl_4_1.png",
      "question/high/aadl/4/high_aadl_4_2.png",
      "question/high/aadl/4/high_aadl_4_3.png",
      "question/high/aadl/4/high_aadl_4_4.png"
    ],

    answer: 2
  },

  {
    id: "high_aadl_5",
    category: "aadl",
    domain: 5,
    difficulty: "high",
    type: "image_choice",

    title: "AADL - 실행력",
    description: "기본적인 일상생활에서 계획을 세우고 순서에 맞게 행동을 수행하는 능력을 평가합니다.",
    question: "다음 TV보기 중 제일 먼저 해야할 일은?",

    images: [
      "question/high/aadl/5/high_aadl_5_1.png",
      "question/high/aadl/5/high_aadl_5_2.png",
      "question/high/aadl/5/high_aadl_5_3.png",
      "question/high/aadl/5/high_aadl_5_4.png"
    ],

    answer: 2
  },

  {
    id: "high_iadl_1",
    category: "iadl",
    domain: 1,
    difficulty: "high",
    type: "number_choice",

    title: "IADL - 시지각",
    description: "복잡한 상황에서 시각 정보를 이해하고 판단하는 능력을 평가합니다.",
    question: "아래 그림 전화기에서 숫자 3의 위치는?",

    image: "question/high/iadl/1/high_iadl_1_1.png",

    choices: ["1번 위", "6번 오른쪽", "2번 오른쪽", "9번 아래"],

    answer: 3
  },

  {
    id: "high_iadl_2",
    category: "iadl",
    domain: 2,
    difficulty: "high",
    type: "image_choice",

    title: "IADL - 지남력",
    description: "시간과 상황을 정확하게 파악하는 능력을 평가합니다.",
    question: "집에서 필요한 식료품을 살려면 어디로 갈까요?",

    images: [
      "question/high/iadl/2/high_iadl_2_1.png",
      "question/high/iadl/2/high_iadl_2_2.png",
      "question/high/iadl/2/high_iadl_2_3.png",
      "question/high/iadl/2/high_iadl_2_4.png"
    ],

    answer: 1
  },

  {
    id: "high_iadl_3",
    category: "iadl",
    domain: 3,
    difficulty: "high",
    type: "number_choice",

    title: "IADL - 계산력",
    description: "복잡한 계산을 수행하는 능력을 평가합니다.",
    question: "지갑에 15,000원이 있습니다. 식비 6,000원, 교통비 3,000원, 약값 5,000원을 쓰면 얼마가 남습니까?",

    image: "question/high/iadl/3/high_iadl_3_1.png",

    choices: ["1000", "2000", "3000", "4000"],

    answer: 1
  },

  {
    id: "high_iadl_4",
    category: "iadl",
    domain: 4,
    difficulty: "high",
    type: "image_choice",

    title: "IADL - 기억력",
    description: "정보를 기억하고 응용하는 능력을 평가합니다.",
    question: "장보기 목록 중 사과를 골라야 합니다. 무엇일까요?",

    images: [
      "question/high/iadl/4/high_iadl_4_1.png",
      "question/high/iadl/4/high_iadl_4_2.png",
      "question/high/iadl/4/high_iadl_4_3.png",
      "question/high/iadl/4/high_iadl_4_4.png"
    ],

    answer: 2
  },

  {
    id: "high_iadl_5",
    category: "iadl",
    domain: 5,
    difficulty: "high",
    type: "image_choice",

    title: "IADL - 실행력",
    description: "문제를 해결하고 행동을 수행하는 능력을 평가합니다.",
    question: "버스를 타기 위한 값을 지불하는 방법은?",

    images: [
      "question/high/iadl/5/high_iadl_5_1.png",
      "question/high/iadl/5/high_iadl_5_2.png",
      "question/high/iadl/5/high_iadl_5_3.png",
      "question/high/iadl/5/high_iadl_5_4.png"
    ],

    answer: 1
  },

  {
    id: "middle_aadl_1",
    category: "aadl",
    domain: 1,
    difficulty: "middle",
    type: "image_choice",

    title: "AADL - 시지각",
    description: "기본적인 일상생활에서 눈으로 본 정보를 인식하고 구별하는 능력을 평가합니다.",
    question: "다음 그림에서 밖에 나갈 때 필요한 것을 고르시오.",

    images: [
      "question/middle/aadl/1/middle_aadl_1_1.png",
      "question/middle/aadl/1/middle_aadl_1_2.png",
      "question/middle/aadl/1/middle_aadl_1_3.png",
      "question/middle/aadl/1/middle_aadl_1_4.png"
    ],

    answer: 2
  },

  {
    id: "middle_aadl_2",
    category: "aadl",
    domain: 2,
    difficulty: "middle",
    type: "image_choice",

    title: "AADL - 지남력",
    description: "기본적인 일상생활에서 시간, 장소, 상황을 올바르게 인지하는 능력을 평가합니다.",
    question: "지금 겨울입니다. 외출하려면 어떻게 해야할까요?",

    images: [
      "question/middle/aadl/2/middle_aadl_2_1.png",
      "question/middle/aadl/2/middle_aadl_2_2.png",
      "question/middle/aadl/2/middle_aadl_2_3.png",
      "question/middle/aadl/2/middle_aadl_2_4.png"
    ],

    answer: 2
  },

  {
    id: "middle_aadl_3",
    category: "aadl",
    domain: 3,
    difficulty: "middle",
    type: "number_choice",

    title: "AADL - 계산력",
    description: "기본적인 일상생활에서 간단한 수와 계산을 이해하고 처리하는 능력을 평가합니다.",
    question: "아침 식사 준비에 10분이 걸립니다. 설거지에 5분이 걸립니다. 총 몇 분입니까?",

    image: "question/middle/aadl/3/middle_aadl_3_1.png",

    choices: ["10분", "15분", "20분", "25분"],

    answer: 2
  },

  {
    id: "middle_aadl_4",
    category: "aadl",
    domain: 4,
    difficulty: "middle",
    type: "image_choice",

    title: "AADL - 기억력",
    description: "기본적인 일상생활에서 필요한 정보를 기억하고 활용하는 능력을 평가합니다.",
    question: "밥을 먹기 전 3번째 행동은 무엇인가요?",

    images: [
      "question/middle/aadl/4/middle_aadl_4_1.png",
      "question/middle/aadl/4/middle_aadl_4_2.png",
      "question/middle/aadl/4/middle_aadl_4_3.png",
      "question/middle/aadl/4/middle_aadl_4_4.png"
    ],

    answer: 3
  },

  {
    id: "middle_aadl_5",
    category: "aadl",
    domain: 5,
    difficulty: "middle",
    type: "image_choice",

    title: "AADL - 실행력",
    description: "기본적인 일상생활에서 계획을 세우고 순서에 맞게 행동을 수행하는 능력을 평가합니다.",
    question: "TV가 안 나온다.TV를 켜려면 무엇을 먼저 해야할까?",

    images: [
      "question/middle/aadl/5/middle_aadl_5_1.png",
      "question/middle/aadl/5/middle_aadl_5_2.png",
      "question/middle/aadl/5/middle_aadl_5_3.png",
      "question/middle/aadl/5/middle_aadl_5_4.png"
    ],

    answer: 1
  },

  {
    id: "middle_iadl_1",
    category: "iadl",
    domain: 1,
    difficulty: "middle",
    type: "image_choice",

    title: "IADL - 시지각",
    description: "복잡한 상황에서 시각 정보를 이해하고 판단하는 능력을 평가합니다.",
    question: "다음 중 나머지와 다른 것을 고르시오",

    images: [
      "question/middle/iadl/1/middle_iadl_1_1.png",
      "question/middle/iadl/1/middle_iadl_1_2.png",
      "question/middle/iadl/1/middle_iadl_1_3.png",
      "question/middle/iadl/1/middle_iadl_1_4.png"
    ],

    answer: 4
  },

  {
    id: "middle_iadl_2",
    category: "iadl",
    domain: 2,
    difficulty: "middle",
    type: "image_choice",

    title: "IADL - 지남력",
    description: "문제를 해결하고 행동을 수행하는 능력을 평가합니다.",
    question: "집에서 요리를 하려면 어디에서 해야할까요",

    images: [
      "question/middle/iadl/2/middle_iadl_2_1.png",
      "question/middle/iadl/2/middle_iadl_2_2.png",
      "question/middle/iadl/2/middle_iadl_2_3.png",
      "question/middle/iadl/2/middle_iadl_2_4.png"
    ],

    answer: 2
  },

  {
    id: "middle_iadl_3",
    category: "iadl",
    domain: 3,
    difficulty: "middle",
    type: "number_choice",

    title: "IADL - 계산력",
    description: "복잡한 계산을 수행하는 능력을 평가합니다.",
    question: "8,000원을 가지고 있습니다. 5,500원 물건을 샀습니다. 얼마가 남습니까?",

    image: "question/middle/iadl/3/middle_iadl_3_1.png",

    choices: ["1,500원", "2,000원", "2,500원", "3,000원"],

    answer: 3
  },

  {
    id: "middle_iadl_4",
    category: "iadl",
    domain: 4,
    difficulty: "middle",
    type: "image_choice",

    title: "IADL - 기억력",
    description: "정보를 기억하고 응용하는 능력을 평가합니다.",
    question: "다음 중 장보기 목록을 보고 기억하세요. 우유를 고르고 사과를 고르고 배를 고르고 계산합니다. 구매하지 않은것은 무엇인가요?",

    images: [
      "question/middle/iadl/4/middel_iadl_4_1.png",
      "question/middle/iadl/4/middel_IADL_4_2.png",
      "question/middle/iadl/4/middel_iadl_4_3.png",
      "question/middle/iadl/4/middel_iadl_4_4.png",
    ],

    answer: 3
  },

  {
    id: "middle_iadl_5",
    category: "iadl",
    domain: 5,
    difficulty: "middle",
    type: "image_choice",

    title: "IADL - 실행력",
    description: "문제를 해결하고 행동을 수행하는 능력을 평가합니다.",
    question: "버스가 목적지에 다와간다. 무엇을 먼저 해야할까?",

    images: [
      "question/middle/iadl/5/middle_iadl_5_1.png",
      "question/middle/iadl/5/middle_iadl_5_2.png",
      "question/middle/iadl/5/middle_iadl_5_3.png",
      "question/middle/iadl/5/middle_iadl_5_4.png"
    ],

    answer: 3
  },

  {
    id: "under_aadl_1",
    category: "aadl",
    domain: 1,
    difficulty: "under",
    type: "image_choice",

    title: "AADL - 시지각",
    description: "기본적인 일상생활에서 눈으로 본 정보를 인식하고 구별하는 능력을 평가합니다.",
    question: "화면에서 '전화' 아이콘과 똑같은 것을 찾으시오.",

    images: [
      "question/under/aadl/1/under_aadl_1_1.png",
      "question/under/aadl/1/under_aadl_1_2.png",
      "question/under/aadl/1/under_aadl_1_3.png",
      "question/under/aadl/1/under_aadl_1_4.png"
    ],

    answer: 3
  },

  {
    id: "under_aadl_2",
    category: "aadl",
    domain: 2,
    difficulty: "under",
    type: "image_choice",

    title: "AADL - 지남력",
    description: "기본적인 일상생활에서 시간, 장소, 상황을 올바르게 인지하는 능력을 평가합니다.",
    question: "지금 시간에 하는 활동이 무엇일까요? (새벽 2시)",

    images: [
      "question/under/aadl/2/under_aadl_2_1.png",
      "question/under/aadl/2/under_aadl_2_2.png",
      "question/under/aadl/2/under_aadl_2_3.png",
      "question/under/aadl/2/under_aadl_2_4.png"
    ],

    answer: 1
  },

  {
    id: "under_aadl_3",
    category: "aadl",
    domain: 3,
    difficulty: "under",
    type: "number_choice",

    title: "AADL - 계산력",
    description: "기본적인 일상생활에서 간단한 수와 계산을 이해하고 처리하는 능력을 평가합니다.",
    question: "칫솔이 3개 있습니다. 1개를 사용했습니다. 남은 것은 몇 개입니까?",

    image: "question/under/aadl/3/under_aadl_3_1.png",

    choices: ["1개", "2개", "3개", "4개"],

    answer: 2
  },

  {
    id: "under_aadl_4",
    category: "aadl",
    domain: 4,
    difficulty: "under",
    type: "image_choice",

    title: "AADL - 기억력",
    description: "기본적인 일상생활에서 필요한 정보를 기억하고 활용하는 능력을 평가합니다.",
    question: "다음 중 일어나자마자 하지 않을 상황은 어떤것인가요?",

    images: [
      "question/under/aadl/4/under_aadl_4_1.png",
      "question/under/aadl/4/under_aadl_4_2.png",
      "question/under/aadl/4/under_aadl_4_3.png",
      "question/under/aadl/4/under_aadl_4_4.png"
    ],

    answer: 4
  },

  {
    id: "under_aadl_5",
    category: "aadl",
    domain: 5,
    difficulty: "under",
    type: "image_choice",

    title: "AADL - 실행력",
    description: "기본적인 일상생활에서 계획을 세우고 순서에 맞게 행동을 수행하는 능력을 평가합니다.",
    question: "TV를 켜기 위해 필요한 것은?",

    images: [
      "question/under/aadl/5/under_aadl_5_1.png",
      "question/under/aadl/5/under_aadl_5_2.png",
      "question/under/aadl/5/under_aadl_5_3.png",
      "question/under/aadl/5/under_aadl_5_4.png"
    ],

    answer: 1
  },

  {
    id: "under_iadl_1",
    category: "iadl",
    domain: 1,
    difficulty: "under",
    type: "image_choice",

    title: "IADL - 시지각",
    description: "복잡한 상황에서 시각 정보를 이해하고 판단하는 능력을 평가합니다.",
    question: "플라스틱 병은 어디에 버려야 하는가?",

    images: [
      "question/under/iadl/1/under_iadl_1_1.png",
      "question/under/iadl/1/under_iadl_1_2.png",
      "question/under/iadl/1/under_iadl_1_3.png",
      "question/under/iadl/1/under_iadl_1_4.png"
    ],

    answer: 3
  },

  {
    id: "under_iadl_2",
    category: "iadl",
    domain: 2,
    difficulty: "under",
    type: "number_choice",

    title: "IADL - 지남력",
    description: "시간과 상황을 이해하고 적절한 행동을 판단하는 능력을 평가합니다.",
    question: "약을 아침, 점심, 저녁 3번 먹어야 합니다. 점심 12시면 어떻게 해야 할까요?",

    image: "question/under/iadl/2/under_iadl_2_1.png",

    choices: [
      "안 먹는다",
      "점심 약을 먹는다",
      "밤까지 기다린다",
      "두 번을 한꺼번에 먹는다"
    ],

    answer: 2
  },

  {
    id: "under_iadl_3",
    category: "iadl",
    domain: 3,
    difficulty: "under",
    type: "number_choice",

    title: "IADL - 계산력",
    description: "간단한 계산을 수행하는 능력을 평가합니다.",
    question: "물 1병은 1,000원입니다. 2병을 사면 얼마입니까?",

    image: "question/under/iadl/3/under_iadl_3_1.png",

    choices: [
      "1,000원",
      "2,000원",
      "3,000원",
      "4,000원"
    ],

    answer: 2
  },

  {
    id: "under_iadl_4",
    category: "iadl",
    domain: 4,
    difficulty: "under",
    type: "image_choice",

    title: "IADL - 기억력",
    description: "정보를 기억하고 구별하는 능력을 평가합니다.",
    question: "다음 중 장보기 목록에 없는 것은 무엇인가요? (목록) 우유, 사과, 식빵",

    images: [
      "question/under/iadl/4/under_iadl_4_1.png",
      "question/under/iadl/4/under_iadl_4_2.png",
      "question/under/iadl/4/under_iadl_4_3.png",
      "question/under/iadl/4/under_iadl_4_4.png"
    ],

    answer: 4
  },

  {
    id: "under_iadl_5",
    category: "iadl",
    domain: 5,
    difficulty: "under",
    type: "image_choice",

    title: "IADL - 실행력",
    description: "문제를 해결하고 행동을 수행하는 능력을 평가합니다.",
    question: "버스를 타기 위해 필요한 것을 고르시오.",

    images: [
      "question/under/iadl/5/under_iadl_5_1.png",
      "question/under/iadl/5/under_iadl_5_2.png",
      "question/under/iadl/5/under_iadl_5_3.png",
      "question/under/iadl/5/under_iadl_5_4.png"
    ],

    answer: 1
  }
]