.DEFAULT_GOAL := build

PACKAGE_JSON = package.json $(wildcard packages/*/package.json)
PACKAGE_MAKEFILES = $(shell find packages -maxdepth 2 -type f -name Makefile)
PACKAGE_DIRS = $(dir $(PACKAGE_MAKEFILES))
TSC_SENTINEL = .tsc.make-sentinel
TS_CONFIG = $(wildcard tsconfig*.json packages/*/tsconfig*.json)
TS_SRC = $(wildcard packages/*/src/*.ts) $(wildcard packages/*/src/**/*.ts)
TS_LIB = $(subst /src/,/lib/,$(TS_SRC))
TS_D_OUT = $(pathsubst %.ts,%.d.ts,$(TS_LIB))

.PHONY: build
build: $(TS_D_OUT)

.PHONY: clean
clean:
	rm -f $(TSC_SENTINEL)
	@bun run build:clean
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
	@echo TS_D_OUT
	@echo $(TS_D_OUT)

.PHONY: diagrams
diagrams: packages/graphql/src/bin/dotify.ts
	@bun packages/graphql/src/bin/dotify.ts
	@$(MAKE) -C packages/graphql -j 4 diagrams

.PHONY: docs
docs: docs/packages-dark.png docs/packages-light.png

docs/packages-dark.dot: support/dotifyDependencyGraph.mjs $(PACKAGE_JSON)
	@DARK=1 bun support/dotifyDependencyGraph.mjs > $@

docs/packages-dark.png: docs/packages-dark.dot
	@dot -Tpng $< -o $@

docs/packages-light.dot: support/dotifyDependencyGraph.mjs $(PACKAGE_JSON)
	@bun support/dotifyDependencyGraph.mjs > $@

docs/packages-light.png: docs/packages-light.dot
	@dot -Tpng $< -o $@

.PHONY: graphql
graphql: packages/graphql/src/bin/generateLexer.ts packages/graphql/src/bin/generateParsers.ts
	@bun packages/graphql/src/bin/generateLexer.ts
	@bun packages/graphql/src/bin/generateParsers.ts

node_modules: bun.lockdb $(PACKAGE_JSON)
	@bun install
	@touch $@

.PHONY: typescript
typescript: packages/typescript/src/bin/generateLexer.ts packages/typescript/src/bin/generateParsers.ts
	@bun packages/typescript/src/bin/generateLexer.ts
	@bun packages/typescript/src/bin/generateParsers.ts

$(TSC_SENTINEL): $(PACKAGE_JSON) $(TS_CONFIG) $(TS_SRC) node_modules
	@bun run build # runs: tsc --build --emitDeclarationOnly
	@touch $(TSC_SENTINEL)

bun.lockb: $(PACKAGE_JSON)
	@bun install
	@touch $@

# Use dummy/sentinel file so that we can run `tsc` once and have it produce all
# output files (instead of running once for each out-of-date output file).
#
# See: https://www.cmcrossroads.com/article/rules-multiple-outputs-gnu-make
$(TS_D_OUT): .tsc.make-sentinel
