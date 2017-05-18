---
tags: development wiki
---

These are notes taken based on the article, "Notes on the Eclipse Plug-in Architecture", at <http://www.eclipse.org/articles/Article-Plug-in-architecture/plugin_architecture.html>

# Basics

-   A plug-in is embodied in an instance of a plug-in class.
-   The plug-in class "provides configuration and management support" for a plug-in instance.
-   All plug-in classes inherit from the same class, "an abstract class that provides generic facilities for managing plug-ins"; let's call it `WOPlugIn`.
-   Plug-ins are described in [XML](/wiki/XML) manifest files, which tell "the Eclipse runtime what it needs to know to activate the plug-in."
-   The parsed manifest files are cached in a plug-in registry.
-   Plug-ins are instantiated by using the plug-in registry [API](/wiki/API).
-   Plug-ins can also find out information about other plug-ins by using the registry API.
-   Each plug-in's manifest includes a unique identifier (using a reverse-dotted organization-based naming scheme, such as `com.wincent.foo.bar`).
-   The plug-in's identifier can be used in conjunction with the API to access its running instance.

# Instantiation

-   Custom behaviour can be implemented by subclassing `WOPlugIn` and implementing the activation and deactivation methods on the class (`startup` and `shutdown` respectively); the subclass name is included in the manifest file.

# Relationships

-   A plug-in may have a *dependency* relationship with another plug-in (the dependent plug-in depends on the functionality of the prerequisite plug-in).
-   A plug-in may also have an "extension" relationship with another plug-in (the host plug-in is extended by the extender plug-in).
-   Both types of relationship are specified in the manifest file, using the `requires` and `extension-point` specifiers.
-   In order to be activated a plug-in must be reachable from the core via a chain of dependency and/or extension relationships.

# Extension points

-   In the simple case, extension involves setting up a callback object through which the host and extender plug-ins communicate.
-   An extension point allows any number of extensions to be plugged into it.
-   Extension points are appended to their plug-in identifiers to yield fully-qualified names that plug-ins can use to refer to those extension points (for example, `com.wincent.foo.bar.extension_point`).
-   There is an XML schema for extension points that defines a syntax for declaring menus, menu items and buttons etc that are to be added to the UI.

# Callback objects

-   Callback objects tend to be "plain" objects (not plug-in instances) that are notified when certain events specified in the extension point definition take place.
-   The interface for callback objects is defined by the host plug-in.
-   The callback object is provided by the extender plug-in.
-   Because of this circular relationship the extender plug-in typically also depends on the host plug-in.
-   Although the extender plug-in declares the class of the callback object and provides the implementation of it, the callback object is not instantiated until needed, and the instantiation is performed by the host plug-in.

# Summary

-   An application may have multiple host plug-ins.
-   Each host plug-in may have multiple extension points.
-   A plug-in may simultaneously act as both a host plug-in (exposing extension points) and as an extender plug-in (extending other plug-ins).
-   Multiple plug-ins may extended a given extension point.
-   An extender plug-in may extend a given extension point more than once (although I am not sure why or when this would be useful).
-   A given extender plug-in may extend different extension points and even different host plug-ins.
-   Extending a single extension point may lead to the instantiation of multiple callback objects.
-   A plug-in can extend itself (defining extensions to its own extension points).
