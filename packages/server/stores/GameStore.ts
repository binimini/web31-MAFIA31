import { GameInfo, GameResult } from '@mafia/domain/types/game';
import { RoomVote } from '@mafia/domain/types/vote';

interface GameStoreType {
  [roomId: string]: GameInfo[];
}

interface DashBoard {
  mafia: number;
  citizen: number;
}

class GameStore {
  static instance: GameStoreType = {};

  constructor() {
    throw new Error('This is Singleton Class! Use getInstance()');
  }

  static getInstance() {
    return GameStore.instance;
  }

  static resetGame(roomId: string) {
    GameStore.instance[roomId] = [];
  }

  static initGame(roomId: string, gameInfoList: GameInfo[] = []) {
    GameStore.instance[roomId] = gameInfoList;
  }

  static resetVote(roomId: string) {
    GameStore.instance[roomId].map((gameInfo) => ({ ...gameInfo, voteFrom: [] }));
  }

  static get(roomId: string) {
    return GameStore.instance[roomId];
  }

  static getVoteInfos(roomId: string): RoomVote {
    return GameStore.instance[roomId].reduce(
      (prev, { userName, voteFrom }) => ({ ...prev, [userName]: voteFrom }),
      {},
    );
  }

  static getDashBoard(roomId: string): DashBoard {
    const mafia = GameStore.instance[roomId].filter(({ isDead, job }) => !isDead && job === 'mafia')
      .length;
    const citizen = GameStore.instance[roomId].filter(
      ({ isDead, job }) => !isDead && job === 'citizen',
    ).length;

    return { mafia, citizen };
  }

  static getGameResult(roomId: string, win: string): GameResult[] {
    return GameStore.instance[roomId].map(({ userName, job }) => ({
      userName,
      job,
      result: job === win,
    }));
  }
}

export default GameStore;