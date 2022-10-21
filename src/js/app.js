import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load(saving) {
    try {
      const data = await read(saving);
      const dataJson = await json(data);
      return await new GameSaving(JSON.parse(dataJson));
    } catch (error) {
      return 'data is not valid';
    }
  }
}