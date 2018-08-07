import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;

test('genDiff test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = genDiff(file1, file2);

  expect(result).toBe(expected);
});
