---
layout: page
title: Developer
permalink: /developer/
weight: 3
---

Vita homebrew are written with the [unoffical SDK](https://github.com/vitasdk), which is a modified ARM EABI toolchain. You get access to all the same public APIs found in the official SDK (which is available only to Sony licensed developers) as well as many private APIs which allows, for example:

* Change device clock speed from the default 333MHz up to 444MHz
* Access the memory card, internal user partition, and other filesystems
* Allocate executable memory for JIT or dynamic recompilation

Setup
===============================================================================

Visit the [VitaSDK](https://vitasdk.org/) site for more information.

Showcase
===============================================================================
You can request to add your homebrew to the [showcase](/showcase/).

1. To do so, first fork the website on [GitHub](https://github.com/henkaku/henkaku.github.io).
2. Create a new file `_homebrew/x-name.md` where `x` is a unique id which you should choose as the next available number and `name` is a short-name for your homebrew.
3. Fill the contents of `_homebrew/x-name.md` appropriately. Look at one of the other entries as a template. The fields should be self explanatory.
4. Take a screenshot of the homebrew, make sure it is a PNG file and copy it to `assets/homebrew/x-name.md` where `id` and `name` should be the same as above. For the best results, make sure your screenshot is 240x136.
5. Commit the changes and send a pull request.

Support
===============================================================================
Running into SDK related issues? Need help setting up the toolchain? Want advice on how to do something with vitasdk? You can find the community of developers on FreeNode IRC at [#vitasdk](irc://chat.freenode.net/vitasdk). Please only join for development related support! General support can be found at [#henkaku](irc://chat.freenode.net/henkaku). We also have a [forum for developers](https://forums.vitasdk.org).
