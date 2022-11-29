- Typescript config
  tsc init

  npm init -y

mkdir src dist

Go to the tsconfig and set the "outDir":

outDir:"./dist

- To solve this error: error TS2688: Cannot find type definition file for 'keyv'.
  The file is in the program because:
  Entry point for implicit type library 'keyv'

npm install -D keyv

- Compile typescript and keep it running in watching mode

tsc -W

- Installing lite server
  npm i lite-server
  Then configure your script to use "npm start"

  "scripts":{
  "start":"lite-server"
  }
