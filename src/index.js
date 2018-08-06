import fs from 'fs';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const file1 = fs.readFileSync(path1, 'utf-8');
  const file2 = fs.readFileSync(path2, 'utf-8');

  const parsed1 = JSON.parse(file1);
  const parsed2 = JSON.parse(file2);

  const keys = _.union(Object.keys(parsed1), Object.keys(parsed2));

  const result = keys.reduce((acc, key) => {
    if (_.has(parsed1, key) && _.has(parsed2, key)) {
      if (parsed1[key] === parsed2[key]) {
        return `${acc}\n    ${key}: ${parsed1[key]}`;
      }
      return `${acc}\n  + ${key}: ${parsed2[key]}\n  - ${key}: ${parsed1[key]}\n`;
    }
    if (!_.has(parsed1, key)) {
      return `${acc}\n  + ${key}: ${parsed2[key]}`;
    }
    return `${acc}\n  - ${key}: ${parsed1[key]}`;
  }, '');

  return `{\n${result}\n}`;
};

export default genDiff();
