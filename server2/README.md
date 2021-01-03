run this:

node_modules/typescript/bin/tsc

initially, this command complained with this:

tests/test2.ts:1:26 - error TS7016: Could not find a declaration file for module 'express'. '/Users/adrianpoplesanu/Documents/git-projects/typescript-learning-projects/server2/node_modules/express/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/express` if it exists or add a new declaration (.d.ts) file containing `declare module 'express';`

after i ran this

npm i --save-dev @types/express

everything worked
