import { StoryDictionary } from '@src/types';

export const STORY_DICTIONARY: StoryDictionary = {
  EXECUTION: {
    msg: (name) => `투표로 ${name}이(가) 죽었어요!`,
    imgSrc: '/assets/images/vote-kill.png',
    type: 'execution',
  },
  NO_VOTE: {
    msg: () => `오늘은 처형식이 없는 날이네요!`,
    imgSrc: '/assets/images/citizen.png',
  },
  PUBLISH_VICTIM: {
    msg: (name) => `탕! ${name}이(가) 죽었어요!`,
    imgSrc: '/assets/images/mafia-kill.mp4',
  },
  NO_KILL: {
    msg: () => `오늘 밤은 총소리가 들리지 않았어요!`,
    imgSrc: '/assets/images/citizen.png',
  },
  PUBLISH_SURVIVOR: {
    msg: (name) => `의사의 활약으로 ${name}이(가) 마피아의 공격에서 살아남았습니다!`,
    imgSrc: '/assets/images/doctor-heal.mp4',
  },
  POLICE_ABILITY: {
    msg: (name, isMafia) => `${name}은(는) 마피아가 ${isMafia ? `맞습니다!` : `아닙니다!`}`,
    imgSrc: '/assets/images/police.png',
  },
  NOTICE_MAFIA: {
    msg: (name, isMafia, mafiaList) => `${mafiaList?.join(', ')}은(는) 마피아 입니다.`,
    imgSrc: '/assets/images/mafia.png',
  },
};
