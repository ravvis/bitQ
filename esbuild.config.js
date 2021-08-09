const esbuild = require("esbuild");

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const config = {
  entryPoints: ['./src/index.ts'],
  outfile: 'lib/index.js',
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'node14',
  plugins: [nodeExternalsPlugin()]
}

esbuild
  .build(config)
  .then(() => {
    console.log("WUHU, Successfully transpiled! ✨ 🎉")
  })
  .catch(() => process.exit(1))