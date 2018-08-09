import treeRenderer from './renderer';
import plainRenderer from './plain';

const renderers = {
  tree: treeRenderer,
  plain: plainRenderer,
};

export default outputFormat => renderers[outputFormat];
