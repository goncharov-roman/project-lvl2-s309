import { isPlainObject, flatten } from 'lodash';

const stringify = (value, l) => {
  if (!isPlainObject(value)) return value;
  const margin = '    '.repeat(l + 1);
  const result = JSON.stringify(value, null, 1).replace(/"/g, '');
  return `{\n${margin.slice(0, -1)}${result.slice(2, -2)}\n${margin.slice(0, -4)}}`;
};

const render = (ast, l = 0) => {
  const diff = ast.map((item) => {
    const {
      key, type, newValue, oldValue, children,
    } = item;
    switch (type) {
      case 'complex':
        return `    ${key}: ${render(children, l + 1)}`;
      case 'actual':
        return `    ${key}: ${stringify(oldValue, l + 1)}`;
      case 'changed':
        return [`  - ${key}: ${stringify(oldValue, l + 1)}`,
          `  + ${key}: ${stringify(newValue, l + 1)}`];
      case 'deleted':
        return `  - ${key}: ${stringify(oldValue, l + 1)}`;
      case 'added':
        return `  + ${key}: ${stringify(newValue, l + 1)}`;
      default:
        throw new Error('Undefined type');
    }
  });
  console.log(diff);
  const margin = '    '.repeat(l);
  const result = flatten(diff).join(`\n${margin}`);
  return `{\n${margin}${result}\n${margin}}`;
};

export default render;
