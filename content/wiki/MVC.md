---
tags: development wiki
---

[MVC](/wiki/MVC) or [Model-View-Controller](/wiki/Model-View-Controller) is an approach to [object-oriented programming](/wiki/object-oriented_programming) which divides the concerns of an application into three separate types, each corresponding to a class:

-   [Model](/wiki/Model): a class that describes the *what* or thing being modelled.
-   [View](/wiki/View): a class that provides a user with a way of interacting with the thing being modelled; it both shows a representation of the model and (possibly) allows the user to make changes to the model. Multiple different views may simultaneously offer different representations of the same underlying model object.
-   [Controller](/wiki/Controller): a class that mediates between the model and its view or views.

The key benefits of applying the [MVC](/wiki/MVC) approach stem from maintaining a separation of concerns; this in turn leads to greater readability, modularity and maintainability. It also helps break the design into segments that can be independently tested (see "[Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)").

Examples of popular systems that are designed to use the [MVC](/wiki/MVC) pattern include:

-   [Apple](/wiki/Apple)'s [Cocoa](/wiki/Cocoa) [API](/wiki/API), as seen in [Mac OS X](/wiki/Mac_OS_X)
-   [Ruby on Rails](/wiki/Ruby_on_Rails)
