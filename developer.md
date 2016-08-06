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

## Automatic Installation

You can build the toolchain using [vdpm](https://github.com/vitadev/vdpm). This script lets you easily set up the toolchain from source and also install some common dependencies such as libpng/libjpeg/vita2dlib/etc. Follow the directions from there.

## Manual Installation

1. Get the toolchain
   1. Use the [prebuilt toolchain](https://goo.gl/QpX5zM), available for Linux, OSX, and Windows
   3. For those who want to do more work, you may build the toolchain from scratch using the [buildscripts](https://github.com/vitasdk/buildscripts) by following the directions there.
2. Install the toolchain to a directory of your choice
   1. We recommend `/usr/local/vitasdk` for both Linux and OSX
   2. On Windows, it is recommended you install [MSYS2](https://msys2.github.io/) and `make` (`pacman -S make`) in order to use Makefiles.
3. Setup the `$VITASDK` path variable to point to where the toolchain is installed
   1. On Linux/OSX you can add `export VITASDK=/path/to/toolchain` to your Bash profile.

Usage
===============================================================================
You can find various sample code [here](https://github.com/vitasdk/samples). Build them and play around with the code to familiarize yourself with the environment. You can also look at the [showcase](/showcase/) to see some more advanced code. Unfortunately, there currently does not exist comprehensive documentation for the unoffical SDK. If you have the time, please help us with that!

## Build process

You should look at the makefiles for the sample code, but here's a breakdown:

* Compile your `.c`/`.cpp` files to `.o` with `arm-vita-eabi-gcc -c -o file.obj file.c`
* Link your `.o` files into an `.elf` file, **using -Wl,-q option**: `arm-vita-eabi-gcc -Wl,-q -o homebrew.elf file1.o file2.o file3.o`
* Make a `.velf` file out of the `.elf` file: `vita-elf-create homebrew.elf homebrew.velf`
* Make a `eboot.bin` file out of the `.velf` file: `vita-make-fself homebrew.velf eboot.bin`

### Library usage

In order to use functions from the Vita's runtime library (beyond the C/C++ standard libraries and `SceKernel`), then in addition to including the required headers you also need to statically link against the corresponding modules' stub libraries. In some cases, it's also necessary to load the sysmodule and/or call the library's initialisation function before using any of its other functions.

For instance, to use the `sceNetConnect` function, you need to follow the following process:

* Find the header that declares this function and include it in your code: `#include <psp2/net/net.h>`
* Find the name of the module the function is in in [the import database](https://github.com/vitasdk/vita-headers/blob/master/db.json) and link against its stub library. In this case, it's `sceNet`, so the corresponding linker option would be `-lSceNet_stub`.
   * This name is usually also the function's prefix, but not always.
   * If you're building using a Makefile similar to the one in the [net/http sample](https://github.com/vitasdk/samples/blob/master/net/http/Makefile), the proper way to do this would be to append the option to the `LIBS` line (though of course the net/http sample already links against *this particular* library)
* Check [the list of sysmodules](https://github.com/vitasdk/vita-headers/blob/master/include/psp2/sysmodule.h) for a reference to your library. In this case, we need `SCE_SYSMODULE_NET`.
   * sceSysmodule is itself a library (though not a sysmodule) you need to include and link against as per these steps.
   * You need to ensure the sysmodule is loaded before calling any of its functions: `if(sceSysmoduleIsLoaded(SCE_SYSMODULE_NET) != SCE_SYSMODULE_LOADED) sceSysmoduleLoadModule(SCE_SYSMODULE_NET)`
* Look up the header for your library (so in this case [net/net.h](https://github.com/vitasdk/vita-headers/blob/master/include/psp2/net/net.h). If it has an initialisation function, you may need to call this before using any other functions.
   * In this case, see the aforementioned net/http sample for details.

## Making a .vpk

Homebrew installer uses a `.vpk` format which is just a ZIP file, start from [this template](https://github.com/xyzz/Vita_Doom/releases/download/1.0/vitadoom.vpk) (try installing it from the shell)
* replace `eboot.bin` with your `eboot.bin`
* you can also add `template.xml` and stuff like icon/background/etc that will be displayed in LiveArea, check out how it's done in molecularShell (launch it and go to `app0:`)
* make sure to run [pngquant](https://pngquant.org/) on all your png images
* to make `param.sfo`, use `vita-mksfoex -s TITLE_ID=XXXX00001 "homebrew name" output/param.sfo`

When developing homebrew instead of rebuilding the vpk and reinstalling it on every change, you can upload your new `eboot.bin` to `ux0:app/TITLE_ID/eboot.bin` over ftp

NB: all files you place to `.vpk` will be available as read-only inside `app0:`. For example, you can add `vpk/something.txt` and later in your app read `app0:something.txt`. In the same way, you can read `app0:sce_sys/param.sfo` and `app0:eboot.bin`.

## Future

The development community is still in its infancy. Do not be scared at all the new tools and terms. We are actively developing easier tools and templates to do the work, so the process will only be easier in the future. If you run into any issues, please check out the support options below.

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
