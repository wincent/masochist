.DEFAULT: png

DOT = $(wildcard diagrams/*.dot)
PNG = $(patsubst %.dot,%.png,$(DOT))

.PHONY: clean
clean:
	rm -f diagrams/*

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
