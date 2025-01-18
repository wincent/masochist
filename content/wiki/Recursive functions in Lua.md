---
tags: wiki lua
title: Recursive functions in Lua
---

# Self-recursion

Use this form:

```lua
local function e()
    -- code that calls e()
end
```

Not this one, which triggers a "Need check nil" diagnostic:

```lua
local e = nil

e = function()
    -- code that calls e()
end
```

Nor this one, which triggers an "Undefined global" diagnostic:

```lua
local e = function()
    -- code that calls e()
end
```

# Mutual recursion

None of the above forms work well for mutual recursion. The only one that avoids both "Need check nil" and "Undefined global" is to use a forward declaration that _does not_ assign `nil`. That is, this will work:

```lua
local a
local b

local a = function()
    -- code that calls b()
end

local b = function()
    -- code that calls a()
end
```

Note that the following alternative would be desirable, due to consistency with the recommended pattern for self-recursive functions, but it has problems of its own; namely, it leads to a "Redefined local" diagnostic:

```lua
local a
local b

local function a()
    -- code that calls b()
end

local function b()
    -- code that calls a()
end
```

# References

Commits where I figured this out:

- [wincent/command-t@dc2ab99dce50](https://github.com/wincent/command-t/commit/dc2ab99dce50598549fc353b83e4c0a8788f6b22)
- [wincent/command-t@07160ebd7d5278b4](https://github.com/wincent/command-t/commit/07160ebd7d5278b41042c6e8ffee981e950604ed)
