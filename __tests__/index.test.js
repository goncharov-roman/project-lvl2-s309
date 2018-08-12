import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;

const templateTest = (extension, outputFormat) => {
  const file1 = `${dir}/before.${extension}`;
  const file2 = `${dir}/after.${extension}`;
  const expected = fs.readFileSync(`${dir}/expected-${outputFormat}.txt`, 'utf-8').trim();
  const result = genDiff(file1, file2, outputFormat);
  return { result, expected };
};

test('tree format json test', () => {
  const { result, expected } = templateTest('json', 'tree');
  expect(result).toBe(expected);
});

test('plain format json test', () => {
  const { result, expected } = templateTest('json', 'plain');
  expect(result).toBe(expected);
});

test('json format json test', () => {
  const { result, expected } = templateTest('json', 'json');
  expect(result).toBe(expected);
});

test('tree format yaml test', () => {
  const { result, expected } = templateTest('yml', 'tree');
  expect(result).toBe(expected);
});

test('plain format yaml test', () => {
  const { result, expected } = templateTest('yml', 'plain');
  expect(result).toBe(expected);
});

test('json format yaml test', () => {
  const { result, expected } = templateTest('yml', 'json');
  expect(result).toBe(expected);
});

test('tree format ini test', () => {
  const { result, expected } = templateTest('ini', 'tree');
  expect(result).toBe(expected);
});

test('plain format ini test', () => {
  const { result, expected } = templateTest('ini', 'plain');
  expect(result).toBe(expected);
});

test('json format ini test', () => {
  const { result, expected } = templateTest('ini', 'json');
  expect(result).toBe(expected);
});
