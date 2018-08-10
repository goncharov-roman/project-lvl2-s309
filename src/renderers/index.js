import treeRenderer from './renderer';
import plainRenderer from './plain';
import jsonRenderer from './json';

const renderers = {
  tree: treeRenderer,
  plain: plainRenderer,
  json: jsonRenderer,
};

export default outputFormat => renderers[outputFormat];
