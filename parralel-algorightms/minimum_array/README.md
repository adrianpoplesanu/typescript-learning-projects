npm init
npm install -D typescript@3.3.3
npm install -S express@4.16.4
npm install -D @types/express@4.16.1
echo '''
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
''' >> tsconfig.json

node_modules/typescript/bin/tsc
node build/index.js
