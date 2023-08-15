- Official tsconfig Docs
  https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Official Compiler Options Docs
  https://www.typescriptlang.org/docs/handbook/compiler-options.html

Hint: Lib[] allows you to specify which default object and features TypeScript knows.

"lib": [
"dom",
"es6",
"dom.iterable",
"scripthost"
],

Hint: "sourceMap": true. Helps us with debugging and development... sourceMap() is very useful in large project because it simplifies debugging and also helps you to see both your .js and .ts file in the source file in your console.

"outDir": "./dist", /_ Redirect output structure to the directory. _/

"rootDir": "./src", / Specify the root directory of input files. Use to control the output directory structure with --outDir. \*/

"noEmitOnError": true,This will ensure that no .js or .ts file will be emitted if there is an error.

"strict": true, /_ Enable all strict type-checking options. _/
