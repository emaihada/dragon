import { Waves, CloudLightning, Flame, Sparkles } from 'lucide-react';
import { StorySectionData, SectionType } from './types';

export const STORY_DATA: StorySectionData[] = [
  {
    id: SectionType.IMUGI,
    title: "이무기",
    subtitle: "",
    icon: Waves,
    themeColor: "text-oriental-600",
    content: [
      {
        heading: "정체와 외형",
        description: [
          "한국 전설에만 등장하는 독특한 영물",
          "용이 되기 전 단계의 거대한 뱀",
          "깊은 호수, 연못, 혹은 바다에서 서식",
          "천 년 동안 수행을 쌓음",
          "뿔이 없거나 짧고, 비늘이 칙칙함",
          "지상이나 물속에 묶여 있는 '짐승'의 상태"
        ]
      },
      {
        heading: "왜 용이 되려 하는가?",
        description: [
          "하늘의 기운을 다스리는 신(神)으로 승격",
          "비와 구름을 다스려 농경 사회의 생사여탈권을 가짐",
          "절대적인 권능과 불멸의 삶을 얻기 위해"
        ]
      }
    ]
  },
  {
    id: SectionType.TRAGEDY,
    title: "비극의 순간",
    subtitle: "",
    icon: CloudLightning,
    themeColor: "text-purple-400",
    content: [
      {
        heading: "승천의 과정",
        description: [
          "천 년의 수행 후 안개와 구름을 타고 솟구침",
          "반드시 인간이 이 광경을 목격하게 됨"
        ]
      },
      {
        heading: "부정의 말 한마디",
        description: [
          "\"와! 용이다!\"라고 하면 용이 됨",
          "\"저거 봐, 큰 뱀이다!\"라고 하면 승천 중단",
          "공중에서 추락하며 독기와 원한으로 뒤섞임",
          "몸이 타오르며 괴물로 변이"
        ]
      }
    ]
  },
  {
    id: SectionType.KKANGCHEOL,
    title: "깡철이",
    subtitle: "",
    icon: Flame,
    themeColor: "text-oriental-flame",
    content: [
      {
        heading: "강철(剛鐵)같은 재앙",
        description: [
          "승천의 실패로 인해 깡철이로 변이",
          "불을 뿜는 가뭄의 요괴",
          "\"강철처럼 단단하고 뜨겁다\"는 뜻",
          "지나가는 곳마다 공기가 메마름",
          "논바닥이 갈라지고 싹이 타 죽음"
        ]
      },
      {
        heading: "파괴적인 성격",
        description: [
          "\"깡철이 간 데는 가을도 없다\"는 속담",
          "농민들에게는 공포의 대상",
          "반작용으로 열기(火氣)를 내뿜음",
          "세상을 원망하는 파괴적인 성격"
        ]
      }
    ]
  },
  {
    id: SectionType.REDEMPTION,
    title: "다시 용이 되는 길",
    subtitle: "",
    icon: Sparkles,
    themeColor: "text-oriental-gold",
    content: [
      {
        heading: "독기(火氣)를 빼는 수행",
        description: [
          "다시 용이 되는 것은 수만 배 더 어려움",
          "차가운 폭포 아래서 수백 년간 수행",
          "큰 도인의 도움을 받아 원한을 씻어냄"
        ]
      },
      {
        heading: "인간의 참회와 희생",
        description: [
          "목격자 혹은 후손의 진심 어린 참회와 제사",
          "자신의 기운을 써서 가뭄을 해결하고 희생",
          "하늘이 감동하여 용으로 승천"
        ]
      }
    ]
  }
];