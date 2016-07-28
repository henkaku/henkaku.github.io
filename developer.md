---
layout: page
title: Developer
permalink: /developer/
weight: 3
---

Vita homebrew are written with the [unoffical SDK](https://github.com/vitasdk), which is a modified ARM EABI toolchain. You get access to all the same public APIs found in the official SDK (which is available only to Sony licensed developers) as well as many private APIs (allowing, for example, to change the CPU clock speed).

Setup
===============================================================================
1. Get the toolchain
   1. Use the [prebuilt toolchain](https://goo.gl/QpX5zM), available for Linux, OSX, and Windows
   2. Alternatively, you may build the toolchain from scratch using the [buildscripts](https://github.com/vitasdk/buildscripts)
2. Install the toolchain to a directory of your choice
   1. We recommend `/usr/local/vitasdk` for Linux and `/opt/vitasdk` for OSX
   2. On Windows, it is recommended you install [Cygwin](https://cygwin.com) and `make` in order to use Makefiles and install the toolchain to `C:\cygwin\usr\local\vitasdk`.
3. Setup the `$VITASDK` path variable to point to where the toolchain is installed
   1. On Linux/OSX you can add `export VITASDK=/path/to/toolchain` to your Bash profile.

Building
===============================================================================
You can find various sample code [here](https://github.com/vitasdk/samples). Build them and play around with the code to familiarize yourself with the environment. You can also look at the [showcase](/showcase/) to see some more advanced code. Unfortunately, there currently does not exist comprehensive documentation for the unoffical SDK. If you have the time, please help us with that!

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
Running into SDK related issues? Need help setting up the toolchain? Want advice on how to do something with vitasdk? You can find the community of developers on FreeNode IRC at [#vitasdk](irc://chat.freenode.net/vitasdk). Please only join for development related support! General support can be found at [#henkaku](irc://chat.freenode.net/henkaku).
