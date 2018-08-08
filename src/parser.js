import yaml from 'js-yaml';

const parseFunctions = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.yaml': yaml.safeLoad,
};

export default extension => parseFunctions[extension];
