BENCHES = `find . -name *.bench.js`

bench:
	@NODE_ENV=bench ./node_modules/.bin/matcha setup.js $(BENCHES)

.PHONY: bench
