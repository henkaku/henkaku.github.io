---
layout: page
permalink: /changes/
---

Each time you install HENkaku from this site, you will get the latest version. To update HENkaku, simply reboot your Vita and install again.

If you are using the offline installer and wish to update HENkaku, you must first install HENkaku again using the online installer (this website). Next, while still connected to the internet, run the offline installer bubble (not Email) and install the payload again.

Release 10 (May 26, 2017)
-------------------------------------------------------------------------------
* Moved files to ur0:tai, taiHEN can run without memory card on original Vitas now
* If molecularShell is removed manually, will not attempt to reinstall by 
default
* Support loading plugins from `ur0:tai/config.txt` if `ux0:tai/config.txt` 
cannot be found
* If you are using Ensō, you _must_ redownload the installer and reinstall 
configuration in order to use the new path
* (06/06/2017) Added setting options to refresh config.txt and reboot (thanks The_FloW)
* (06/06/2017) Added setting options to unlink memory card and download DRM-free packages
* (06/06/2017) Fixed bug where HENkaku Settings and spoofed version string do not show up
* (24/06/2017) Various translation fixes (thanks to all who contributed)
* (24/06/2017) Skip all plugin loading by holding L1 during installation (or boot if using Ensō)

Release 9 (May 11, 2017)
-------------------------------------------------------------------------------
* Fixed a bug in one of the patch that may crash SceShell
* Disabled triggering of (nonworking) force reinstall in offline mode
* Fixed slow file reading in molecularShell
* Fixed crash in installing VPK (thanks d3m3vilurr)
* Moved HENkaku settings to the official Settings application (thanks The_FloW)
* Fixed problem of molecularShell corrupting VitaShell theme and settings (thanks The_FloW)
* (12/05/2017) Added helper menu for users confused with the settings move
* (13/05/2017) Added translations for HENkaku settings (thanks everyone who helped)
* (13/05/2017) Fixed problem of menu item not showing up in Settings widget
* (13/05/2017) Bypassed SCE bug preventing > 2 plugins from loading for a game
* (14/05/2017) Minor settings language tweak

Release 8 (March 26, 2017)
-------------------------------------------------------------------------------
* PSN spoofing works again (it will be fixed by Sony in the future so use it while you can. You can also disable PSN spoofing in molecularShell settings menu.
* First boot of molecularShell will alert the user to unsafe homebrew and how to enable it.
* (29/03/2017) Improved stability of the payload.

Release 7 (December 26, 2016)
-------------------------------------------------------------------------------
* [taiHENkaku](https://yifan.lu/2016/11/01/taihen-cfw-framework-for-ps-vita/) brings plugin support
* Tons of stability improvements and refactored codebase to be more streamlined
* [VitaShell 1.43](https://github.com/TheOfficialFloW/VitaShell/releases/tag/1.43) fixed problem with built in updater

Release 6 (September 12, 2016)
-------------------------------------------------------------------------------
* Whitelisted `scePowerSetGpuClockFrequency`, `scePowerRequestColdReset`, `scePowerRequestStandby`, and `scePowerRegisterCallback`
* Fixed rare bug which crashes modded SceShell. _There is still no PSN spoofing for modded SceShell_
* Removed "welcome" message when triggering exploit (was used for debugging and is no longer needed)

Release 5 (September 6, 2016)
-------------------------------------------------------------------------------
This update improves the quality of the system performance.

* Changed how PSN spoofing is done. This should fix problems a minority of users experience regarding game saves.
* **Modded vs0:shell/shell.self is not supported.**
* Removed update blocking features as a side effect of above.
* Update to [VitaShell 0.91](https://github.com/TheOfficialFloW/VitaShell/releases/tag/0.91). This is the last VitaShell update bundled into HENkaku. Please use VitaShell's built in network update feature to update VitaShell as a standalone component.

Release 4 (August 30, 2016)
-------------------------------------------------------------------------------
* Fixed issue where YouTube website did not work
* Added support for PSTV and Vita Slim internal storage
* Updated to [VitaShell 0.86](https://github.com/TheOfficialFloW/VitaShell/releases/tag/0.86)

Release 3 (August 27, 2016)
-------------------------------------------------------------------------------
* **PSN spoofing**: You can access PSN without updating to 3.61!
* Safe homebrew support: Developers can optionally mark their homebrews as "safe" and it will _not_ gain restricted API access. We highly recommend developers who are not using such features to update their packages as safe.
* [VitaShell 0.8](https://github.com/TheOfficialFloW/VitaShell): Read the release notes from The_FloW for the list of changes to VitaShell.
* Version string: A callback to the PSP days where every hack would change the system version string. We do that too now (see the screenshot) so we can provide better support to our users.
* Update blocking: In HENkaku mode, firmware updates using the official servers are blocked. That way you won't accidentally install 3.61 and it won't download in the background regardless of your settings.

Release 2 (August 4, 2016)
-------------------------------------------------------------------------------
* **Dynarec support**: Developers can generate ARM code and execute it directly. This aids in JIT engines for emulators.
* [Offline installer](https://github.com/henkaku/offline-installer/releases): HENkaku can now run without a network connection thanks to work by xyz. He also made a nice [writeup](https://blog.xyz.is/2016/henkaku-offline-installer.html) that you should check out if you're interested in the technical details.
* [VitaShell 0.7](https://bitbucket.org/TheOfficialFloW/vitashell/): When we originally released HENkaku, we forked VitaShell to molecularShell because we didn't want to spend too much time writing our own file manager. Thanks to The_FloW, our changes have been merged to the official VitaShell codebase and we no longer need molecularShell. This release had added many new features and bug fixes to the shell.

Release 1 (July 29, 2016)
-------------------------------------------------------------------------------
* First release
