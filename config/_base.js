import path from 'path'

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isProd = env === 'production';

let pathBase = path.resolve(__dirname, '../');

let config = {
  env : env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: pathBase,
  path_dist: pathBase + '/dist',
  path_client: pathBase + '/app',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : 'localhost',
  server_port : process.env.PORT || 5085,
  webpack_port : process.env.PORT || 5086,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool   : !isProd ? 'eval-source-map' : null,
  compiler_enable_hmr: false,
  compiler_public_path: '',

  // ------------------------------------
  // Environment
  // ------------------------------------
  globals: {
    'process.env'  : {
      'NODE_ENV' : JSON.stringify(env)
    },
    'NODE_ENV'     : env,
    '__DEV__'      : !isProd,
    '__PROD__'     : isProd,
    '__DEBUG__'    : !isProd,
    '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
  }

};

export default config;
