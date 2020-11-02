const pakageVersionUtil = require('./pakageVersionUtil');

module.exports = (inputPackageVersion) => {
  const packageVersion = inputPackageVersion || pakageVersionUtil.currentVersion;
  return [
    {
      moduleName: 'micro-dash',
      packageVersion,
      outputPath: 'dist/micro-dash',
      webpack: {
        entryPath: './src',
        target: {
          primary: 'node',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash',
      },
    },
    {
      moduleName: 'micro-dash.isnull',
      packageVersion,
      outputPath: 'dist/micro-dash.isnull/isNull',
      webpack: {
        entryPath: './src/isNull',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.isnull',
      },
    },
    {
      moduleName: 'micro-dash.isundefined',
      packageVersion,
      outputPath: 'dist/micro-dash.isundefined/isUndefined',
      webpack: {
        entryPath: './src/isUndefined',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.isundefined',
      },
    },
    {
      moduleName: 'micro-dash.isundefinedornull',
      packageVersion,
      outputPath: 'dist/micro-dash.isundefinedornull/isUndefinedOrNull',
      webpack: {
        entryPath: './src/isUndefinedOrNull',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.isundefinedornull',
      },
    },
    {
      moduleName: 'micro-dash.tolowercase',
      packageVersion,
      outputPath: 'dist/micro-dash.tolowercase/toLowerCase',
      webpack: {
        entryPath: './src/toLowerCase',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.tolowercase',
      },
    },
    {
      moduleName: 'micro-dash.touppercase',
      packageVersion,
      outputPath: 'dist/micro-dash.touppercase/toUpperCase',
      webpack: {
        entryPath: './src/toUpperCase',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.touppercase',
      },
    },
  ];
};
