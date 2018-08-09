import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;

test('tree json test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain json test', () => {
  const file1 = `${dir}/before.json`;
  const file2 = `${dir}/after.json`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('tree yaml test', () => {
  const file1 = `${dir}/before.yml`;
  const file2 = `${dir}/after.yml`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain yaml test', () => {
  const file1 = `${dir}/before.yml`;
  const file2 = `${dir}/after.yml`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('tree ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'tree');

  expect(result).toBe(expected);
});

test('plain ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected-plain.txt`, 'utf-8');
  const result = genDiff(file1, file2, 'plain');

  expect(result).toBe(expected);
});

test('defalt (tree) ini test', () => {
  const file1 = `${dir}/before.ini`;
  const file2 = `${dir}/after.ini`;

  const expected = fs.readFileSync(`${dir}/expected.txt`, 'utf-8');
  const result = genDiff(file1, file2);

  expect(result).toBe(expected);
});
