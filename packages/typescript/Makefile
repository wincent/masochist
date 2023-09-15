.DEFAULT: svg

DOT = $(wildcard lexer/diagrams/*.dot)
SVG = $(patsubst %.dot,%.svg,$(DOT))

.PHONY: clean
clean:
	pwd
	rm -f lexer/diagrams/*

.PHONY: debug
debug:
	@echo DOT
	@echo $(DOT)
	@echo SVG
	@echo $(SVG)

.PHONY: diagrams
diagrams: $(SVG)

%.svg: %.dot
	dot -Tsvg $< -o $@
