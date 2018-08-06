install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

build:
	rm -rf dist
	npm run build

test:
	npm run test

publish:
	npm publish

lint:
	npm run eslint .
