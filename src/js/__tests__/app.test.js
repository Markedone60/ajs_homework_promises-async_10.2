import GameSavingLoader from '../app';
import GameSaving from '../gamesaving' 

const char = new GameSaving();

test('testing game saver functionality', async () => {
  const value = await GameSavingLoader.load();
  expect(value).toEqual(char);
})
