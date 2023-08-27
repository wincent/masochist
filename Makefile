.DEFAULT_GOAL := build

PACKAGE_JSON = package.json $(wildcard packages/*/package.json)
PACKAGE_MAKEFILES = $(shell find packages -maxdepth 2 -type f -name Makefile)
PACKAGE_DIRS = $(dir $(PACKAGE_MAKEFILES))
TSC_SENTINEL = .tsc.make-sentinel
TS_CONFIG = $(wildcard tsconfig*.json packages/*/tsconfig*.json)
TS_SRC = $(wildcard packages/*/src/*.ts) $(wildcard packages/*/src/**/*.ts)
TS_LIB = $(subst /src/,/lib/,$(TS_SRC))
TS_OUT = $(patsubst %.ts,%.js,$(TS_LIB))
TS_D_OUT = $(patsubst %.ts,%.d.ts,$(TS_LIB))

.PHONY: build
build: $(TS_OUT) $(TS_D_OUT)

.PHONY: clean
clean:
	rm -f $(TSC_SENTINEL)
	@yarn run build:clean
	@for DIR in $(PACKAGE_DIRS); do \
		$(MAKE) -C $$DIR clean; \
	done

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

.PHONY: diagrams
diagrams: packages/graphql/lib/bin/dotify.js
	@node packages/graphql/lib/bin/dotify.js
	@$(MAKE) -C packages/graphql -j 4 diagrams

.PHONY: docs
docs: docs/packages-dark.png docs/packages-light.png

docs/packages-dark.dot: support/dotifyDependencyGraph.mjs $(PACKAGE_JSON)
	@DARK=1 node support/dotifyDependencyGraph.mjs > $@

docs/packages-dark.png: docs/packages-dark.dot
	@dot -Tpng $< -o $@

docs/packages-light.dot: support/dotifyDependencyGraph.mjs $(PACKAGE_JSON)
	@node support/dotifyDependencyGraph.mjs > $@

docs/packages-light.png: docs/packages-light.dot
	@dot -Tpng $< -o $@

.PHONY: graphql
graphql: packages/graphql/lib/bin/generateLexer.js packages/graphql/lib/bin/generateParsers.js
	@node packages/graphql/lib/bin/generateLexer.js
	@node packages/graphql/lib/bin/generateParsers.js

node_modules: yarn.lock $(PACKAGE_JSON)
	@yarn
	@touch $@

.PHONY: typescript
typescript: packages/typescript/lib/bin/generateLexer.js packages/typescript/lib/bin/generateParsers.js
	@node packages/typescript/lib/bin/generateLexer.js
	@node packages/typescript/lib/bin/generateParsers.js

$(TSC_SENTINEL): $(PACKAGE_JSON) $(TS_CONFIG) $(TS_SRC) node_modules
	@yarn run build # runs: tsc --build
	@touch $(TSC_SENTINEL)

yarn.lock: $(PACKAGE_JSON)
	@yarn
	@touch $@

# Use dummy/sentinel file so that we can run `tsc` once and have it produce all
# output files (instead of running once for each out-of-date output file).
#
# See: https://www.cmcrossroads.com/article/rules-multiple-outputs-gnu-make
$(TS_OUT) $(TS_D_OUT): .tsc.make-sentinel
