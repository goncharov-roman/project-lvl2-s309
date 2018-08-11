import { compact, flattenDeep, isPlainObject } from 'lodash';

const render = (ast, path = []) => {
  const plained = ast.map((item) => {
    const {
      key,
      newValue,
      oldValue,
      type,
      children,
    } = item;
    const newPath = [...path, key];
    const startLine = `Property '${newPath.join('.')}' was`;
    switch (type) {
      case 'added': {
        const value = !isPlainObject(newValue) ? `${newValue}` : '[complex value]';
        return `${startLine} added with value: ${value}`;
      }
      case 'deleted':
        return `${startLine} deleted`;
      case 'changed': {
        const checkedOldValue = !isPlainObject(oldValue) ? `${oldValue}` : '[complex value]';
        const checkedNewValue = !isPlainObject(newValue) ? `${newValue}` : '[complex value]';
        return `${startLine} changed. From ${checkedOldValue} to ${checkedNewValue}`;
      }
      case 'complex':
        return render(children, newPath);
      case 'actual':
        return '';
      default:
        throw new Error('Undefined type');
    }
  });
  return compact(flattenDeep(plained)).join('\n');
};

export default render;
