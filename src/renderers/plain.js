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
    const pathString = `${newPath.slice(0, -1).join('.')}.`;
    const pathToKey = path.length > 0 ? pathString : '';
    const startLine = `Property '${pathToKey}${key}' was`;
    if (type === 'added') {
      const value = !isPlainObject(newValue) ? `${newValue}` : '[complex value]';
      return `${startLine} added with value: ${value}`;
    }
    if (type === 'deleted') {
      return `${startLine} deleted`;
    }
    if (type === 'changed') {
      const checkedOldValue = !isPlainObject(oldValue) ? `${oldValue}` : '[complex value]';
      const checkedNewValue = !isPlainObject(newValue) ? `${newValue}` : '[complex value]';
      return `${startLine} changed. From ${checkedOldValue} to ${checkedNewValue}`;
    }
    if (type === 'actual') {
      return '';
    }
    return render(children, newPath);
  });
  return compact(flattenDeep(plained)).join('\n');
};

export default render;
