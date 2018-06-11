const webPackMerge = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env));
  return webPackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
