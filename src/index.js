import fs from 'fs';
import path from 'path';

import parser from './parser';
import genAst from './genAst';
import render from './renderer';

const genDiff = (path1, path2) => {
  const parse = parser(path.extname(path1));
  const parsed1 = parse(fs.readFileSync(path1, 'utf-8'));
  const parsed2 = parse(fs.readFileSync(path2, 'utf-8'));
  const ast = genAst(parsed1, parsed2);
  return `${render(ast)}\n`;
};

export default genDiff;
