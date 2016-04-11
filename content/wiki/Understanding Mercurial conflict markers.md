---
tags: hg
---

When using the `ui.merge = internal:merge3` configuration [described here](https://www.mercurial-scm.org/wiki/MergeToolConfiguration), your merge conflict during a rebase will look like this:

```
    it(
      'registers created dataIDs in the garbage collector if it has been ' +
      'initialized',
      () => {
<<<<<<< dest:   e386ac907f43  - glh: Don't apply optimistic update as a side-...
        RelayGarbageCollector.prototype.register = jest.genMockFunction();
        const response = {node: {id: 0}};
||||||| base
        RelayGarbageCollector.prototype.register = jest.genMockFunction();
        const response = {node: {id: '123'}};
=======
        RelayGarbageCollector.prototype.register = jest.fn();
        const response = {node: {id: '123'}};
>>>>>>> source: 3038a435f33a  fn - glh: Replace jest.genMockFunction and rela...
        const data = new RelayStoreData();
        data.initializeGarbageCollector();
        const query = getNode(Relay.QL`query{node(id:"a") {id}}`);
        const garbageCollector = data.getGarbageCollector();

        expect(garbageCollector.register).not.toBeCalled();
        data.handleQueryPayload(query, response);
        expect(garbageCollector.register).toBeCalled();
        expect(garbageCollector.register.mock.calls[0][0]).toBe('a');
      }
    );
```

In this case:

1. The first section, between `<<<<<<< dest` and `||||||| base`: Shows how the upstream looks now.
2. The second section, between `||||||| base` and `=======`: Shows how things used to look at the merge base.
3. The third section, between `=======` and `>>>>>>> source`: Shows your proposed change.

# See also

* [Understanding Git conflict markers](/wiki/Understanding_Git_conflict_markers)
