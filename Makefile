.DEFAULT_GOAL := build

PACKAGE_JSON = package.json $(wildcard packages/*/package.json)
PACKAGE_MAKEFILES = $(shell find packages -maxdepth 2 -type f -name Makefile)
PACKAGE_DIRS = $(dir $(PACKAGE_MAKEFILES))
TSC_SENTINEL = .tsc.make-sentinel
TS_CONFIG = $(wildcard tsconfig*.json packages/*/tsconfig*.json)
TS_SRC = $(shell find packages/*/src support -type f -name '*.ts')
TS_LIB = $(subst /src/,/lib/,$(TS_SRC))
TS_D_OUT = $(TS_LIB:.ts=.d.ts)

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
	@echo $(PACKAGE_JSON) | sed 's/ /\n/g'
	@echo
	@echo TS_CONFIG
	@echo $(TS_CONFIG) | sed 's/ /\n/g'
	@echo
	@echo TS_SRC
	@echo $(TS_SRC) | sed 's/ /\n/g'
	@echo
	@echo TS_LIB
	@echo $(TS_LIB) | sed 's/ /\n/g'
	@echo
	@echo TS_D_OUT
	@echo $(TS_D_OUT) | sed 's/ /\n/g'

.PHONY: diagrams
diagrams: packages/graphql/src/bin/dotify.ts
	@bun packages/graphql/src/bin/dotify.ts
	@bun packages/typescript/src/bin/dotify.ts
	@$(MAKE) -C packages/graphql -j 4 diagrams
	@$(MAKE) -C packages/typescript -j 4 diagrams

.PHONY: docs
docs: docs/packages-dark.png docs/packages-light.png

docs/packages-dark.dot: support/dotifyDependencyGraph.ts $(PACKAGE_JSON)
	@DARK=1 bun support/dotifyDependencyGraph.ts > $@

docs/packages-dark.png: docs/packages-dark.dot
	@dot -Tpng $< -o $@

docs/packages-light.dot: support/dotifyDependencyGraph.ts $(PACKAGE_JSON)
	@bun support/dotifyDependencyGraph.ts > $@

docs/packages-light.png: docs/packages-light.dot
	@dot -Tpng $< -o $@

.PHONY: graphql
graphql: packages/graphql/src/lex.ts packages/graphql/src/parseDocument.ts packages/graphql/src/parseSchema.ts
	@bun packages/graphql/src/bin/generateLexer.ts
	@bun packages/graphql/src/bin/generateParsers.ts
	@bun format $^

node_modules: bun.lockb $(PACKAGE_JSON)
	@bun install
	@touch $@

.PHONY: typescript
typescript: packages/typescript/src/lex.ts packages/typescript/src/parseExpression.ts packages/typescript/src/parseStatement.ts
	@bun packages/typescript/src/bin/generateLexer.ts
	@bun packages/typescript/src/bin/generateParsers.ts
	@bun format $^

$(TSC_SENTINEL): $(PACKAGE_JSON) $(TS_CONFIG) $(TS_SRC) node_modules
	@bun run tsc
	@touch $@

# Use dummy/sentinel file so that we can run `tsc` once and have it produce all
# output files (instead of running once for each out-of-date output file).
#
# See: https://www.cmcrossroads.com/article/rules-multiple-outputs-gnu-make
$(TS_D_OUT): $(TSC_SENTINEL)
