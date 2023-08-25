.DEFAULT: png

DOT = $(wildcard lexer/diagrams/*.dot)
PNG = $(patsubst %.dot,%.png,$(DOT))

.PHONY: clean
clean:
	pwd
	rm -f lexer/diagrams/*

.PHONY: debug
debug:
	@echo DOT
	@echo $(DOT)
	@echo PNG
	@echo $(PNG)

.PHONY: diagrams
diagrams: $(PNG)

%.png: %.dot
	dot -Tpng $< -o $@
