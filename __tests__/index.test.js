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
  const result = genDiff(file1, file2, outputFormat);
  return { result, expected };
};

test('tree format json test', () => {
  const { result, expected } = readFilesAndExpected('json', 'tree');

  expect(result).toBe(expected);
});

test('plain format json test', () => {
  const { result, expected } = readFilesAndExpected('json', 'plain');

  expect(result).toBe(expected);
});

test('json format json test', () => {
  const { result, expected } = readFilesAndExpected('json', 'json');

  expect(result).toBe(expected);
});

test('tree format yaml test', () => {
  const { result, expected } = readFilesAndExpected('yml', 'tree');

  expect(result).toBe(expected);
});

test('plain format yaml test', () => {
  const { result, expected } = readFilesAndExpected('yml', 'plain');

  expect(result).toBe(expected);
});

test('json format yaml test', () => {
  const { result, expected } = readFilesAndExpected('yml', 'json');

  expect(result).toBe(expected);
});

test('tree format ini test', () => {
  const { result, expected } = readFilesAndExpected('ini', 'tree');

  expect(result).toBe(expected);
});

test('plain format ini test', () => {
  const { result, expected } = readFilesAndExpected('ini', 'plain');

  expect(result).toBe(expected);
});

test('json format ini test', () => {
  const { result, expected } = readFilesAndExpected('ini', 'json');

  expect(result).toBe(expected);
});
