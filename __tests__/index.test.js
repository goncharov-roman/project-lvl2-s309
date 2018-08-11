import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;
const readFilesAndExpected = (extension, outputFormat) => {
  const file1 = `${dir}/before.${extension}`;
  const file2 = `${dir}/after.${extension}`;
  let outputFormatInExpected = '';
  if (outputFormat === 'json') {
    outputFormatInExpected = '-json';
  } else if (outputFormat === 'plain') {
    outputFormatInExpected = '-plain';
  } else {
    outputFormatInExpected = '';
  }
  const expected = fs.readFileSync(`${dir}/expected${outputFormatInExpected}.txt`, 'utf-8').trim();
  return { file1, file2, expected };
};

test('tree format json test', () => {
  const { file1, file2, expected } = readFilesAndExpected('json', 'tree');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain format json test', () => {
  const { file1, file2, expected } = readFilesAndExpected('json', 'plain');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('json format json test', () => {
  const { file1, file2, expected } = readFilesAndExpected('json', 'json');
  const result = genDiff(file1, file2, 'json');

  expect(result).toBe(expected);
});

test('tree format yaml test', () => {
  const { file1, file2, expected } = readFilesAndExpected('yml', 'tree');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain format yaml test', () => {
  const { file1, file2, expected } = readFilesAndExpected('yml', 'plain');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('json format yaml test', () => {
  const { file1, file2, expected } = readFilesAndExpected('yml', 'json');
  const result = genDiff(file1, file2, 'json');

  expect(result).toBe(expected);
});

test('tree format ini test', () => {
  const { file1, file2, expected } = readFilesAndExpected('ini', 'tree');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain format ini test', () => {
  const { file1, file2, expected } = readFilesAndExpected('ini', 'plain');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('json format ini test', () => {
  const { file1, file2, expected } = readFilesAndExpected('ini', 'json');
  const result = genDiff(file1, file2, 'json');

  expect(result).toBe(expected);
});
