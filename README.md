# typescript-learning-projects

mkdir test
cd test
npm init
npm install typescript
echo 'node_modules/typescript/bin/tsc $1' > compile.sh
echo "console.log('running...');" > test.ts
. compile.sh test.ts
node test.js
