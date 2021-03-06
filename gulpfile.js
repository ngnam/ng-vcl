'use strict';
/**
 * Load the TypeScript compiler, then load the TypeScript gulpfile which simply loads all
 * the tasks. The tasks are really inside tools/gulp/tasks.
 */

// Register TS compilation.
require('ts-node').register({
  project : 'scripts/tsconfig.scripts.json'
});

require('./scripts/gulpfile.ts');
