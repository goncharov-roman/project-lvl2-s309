import fs from 'fs';
import _ from 'lodash';
import path from 'path';

import parser from './parser';

const genDiff = (path1, path2) => {
  const parse = parser(path.extname(path1));
  const parsed1 = parse(fs.readFileSync(path1, 'utf-8'));
  const parsed2 = parse(fs.readFileSync(path2, 'utf-8'));

  const keys = _.union(Object.keys(parsed1), Object.keys(parsed2));

  const result = keys.reduce((acc, key) => {
    if (_.has(parsed1, key) && _.has(parsed2, key)) {
      if (parsed1[key] === parsed2[key]) {
        return `${acc}\n    ${key}: ${parsed1[key]}`;
      }
      return `${acc}\n  + ${key}: ${parsed2[key]}\n  - ${key}: ${parsed1[key]}`;
    }
    if (!_.has(parsed1, key)) {
      return `${acc}\n  + ${key}: ${parsed2[key]}`;
    }
    return `${acc}\n  - ${key}: ${parsed1[key]}`;
  }, '');

  return `{${result}\n}\n`;
};

export default genDiff;
