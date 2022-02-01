.DEFAULT: build

PACKAGE_JSON = package.json $(wildcard packages/*/package.json)
TS_CONFIG = $(wildcard tsconfig*.json packages/*/tsconfig*.json)
TS_SRC = $(wildcard packages/*/src/**/*.ts)
TS_LIB = $(subst /src/,/lib/,$(TS_SRC))
TS_OUT = $(patsubst %.ts,%.js,$(TS_LIB))
TS_D_OUT = $(patsubst %.ts,%.d.ts,$(TS_LIB))

.PHONY: build
build: $(TS_OUT) $(TS_D_OUT)

.PHONY: clean
clean:
	@yarn run build:clean

.PHONY: debug
debug:
	@echo PACKAGE_JSON
	@echo $(PACKAGE_JSON)
	@echo TS_CONFIG
	@echo $(TS_CONFIG)
	@echo TS_SRC
	@echo $(TS_SRC)
	@echo TS_LIB
	@echo $(TS_LIB)
	@echo TS_OUT
	@echo $(TS_OUT)
	@echo TS_D_OUT
	@echo $(TS_D_OUT)

.PHONY: dotify
dotify: packages/lexer/lib/bin/dotify.js
	@node packages/lexer/lib/bin/dotify.js

node_modules: yarn.lock $(PACKAGE_JSON)
	@yarn
	@touch $@

.tsc.make-sentinel: $(PACKAGE_JSON) $(TS_CONFIG) $(TS_SRC) node_modules
	@yarn run build # runs: tsc --build
	@touch .tsc.make-sentinel

yarn.lock: $(PACKAGE_JSON)
	@yarn
	@touch $@

# Use dummy/sentinel file so that we can run `tsc` once and have it produce all
# output files (instead of running once for each out-of-date output file).
#
# See: https://www.cmcrossroads.com/article/rules-multiple-outputs-gnu-make
$(TS_OUT) $(TS_D_OUT): .tsc.make-sentinel
