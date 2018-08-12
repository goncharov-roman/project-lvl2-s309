import { compact, flattenDeep, isPlainObject } from 'lodash';

const checkValue = value => (!isPlainObject(value) ? `${value}` : '[complex value]');

const render = (ast, path = []) => {
  const plained = ast.filter(item => item.type !== 'actual').map((item) => {
    const {
      key, type, newValue, oldValue, children,
    } = item;
    const startLine = `Property '${[...path, key].join('.')}' was`;
    switch (type) {
      case 'added': {
        const value = !isPlainObject(newValue) ? `${newValue}` : '[complex value]';
        return `${startLine} added with value: ${value}`;
      }
      case 'deleted': return `${startLine} deleted`;
      case 'changed': {
        const checkedOldValue = checkValue(oldValue);
        const checkedNewValue = checkValue(newValue);
        return `${startLine} changed. From ${checkedOldValue} to ${checkedNewValue}`;
      }
      case 'complex': return render(children, [...path, key]);
      default: throw new Error('Undefined type');
    }
  });
  return compact(flattenDeep(plained)).join('\n');
};

export default render;
