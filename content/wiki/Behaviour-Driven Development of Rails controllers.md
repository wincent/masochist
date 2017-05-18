---
tags: rspec rails wiki
---

Of the three components in the [Model-View-Controller](/wiki/Model-View-Controller) paradigm I think that [controllers](/wiki/controllers) are the hardest to test in an isolated, independent fashion. This is because by definition their job is to mediate between [views](/wiki/views) and [models](/wiki/models). Testing them either requires involving the other classes (good for [integration testing](/wiki/integration_testing), not so good when isolated testing is your goal) or setting up potentially complicated [mock object](/wiki/mock_object) structures.

# See also

-   [Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)
