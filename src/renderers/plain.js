import { flatten, isPlainObject } from 'lodash';

const formatValue = value => (!isPlainObject(value) ? `${value}` : '[complex value]');

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
        const formattedOldValue = formatValue(oldValue);
        const formattedNewValue = formatValue(newValue);
        return `${startLine} changed. From ${formattedOldValue} to ${formattedNewValue}`;
      }
      case 'complex': return render(children, [...path, key]);
      default: throw new Error('Undefined type');
    }
  });
  return flatten(plained).join('\n');
};

export default render;
