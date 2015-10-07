import getBabelRelayPlugin from 'babel-relay-plugin';

const plugin = getBabelRelayPlugin(require('../schema.json').data);

export default plugin;
