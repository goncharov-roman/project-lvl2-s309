import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;

test('tree format json test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'tree')}\n`;

  expect(result).toBe(expected);
});

test('plain format json test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'plain')}\n`;

  expect(result).toBe(expected);
});

test('json format json test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected-json.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'json')}\n`;

  expect(result).toBe(expected);
});

test('tree format yaml test', () => {
  const file1 = `${dir}/before.yml`;
  const file2 = `${dir}/after.yml`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'tree')}\n`;

  expect(result).toBe(expected);
});

test('plain format yaml test', () => {
  const file1 = `${dir}/before.yml`;
  const file2 = `${dir}/after.yml`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'plain')}\n`;

  expect(result).toBe(expected);
});

test('json format yaml test', () => {
  const file1 = `${dir}/before.yml`;
  const file2 = `${dir}/after.yml`;

  const expected = fs.readFileSync(`${dir}/expected-json.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'json')}\n`;

  expect(result).toBe(expected);
});

test('tree format ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'tree')}\n`;

  expect(result).toBe(expected);
});

test('plain format ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'plain')}\n`;

  expect(result).toBe(expected);
});

test('json format ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected-json.txt`, 'utf-8');
  const result = `${genDiff(file1, file2, 'json')}\n`;

  expect(result).toBe(expected);
});
