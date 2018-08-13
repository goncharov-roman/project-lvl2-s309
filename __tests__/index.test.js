import fs from 'fs';
import genDiff from '../src';

const dir = `${__dirname}/__fixtures__`;

['json', 'yml', 'ini'].forEach((format) => {
  ['tree', 'plain', 'json'].forEach(outputFormat => test(`${outputFormat} format ${format} test`, () => {
    const file1 = `${dir}/before.${format}`;
    const file2 = `${dir}/after.${format}`;
    const expected = fs.readFileSync(`${dir}/expected-${outputFormat}.txt`, 'utf-8').trim();
    const result = genDiff(file1, file2, outputFormat);
    expect(result).toBe(expected);
  }));
});
