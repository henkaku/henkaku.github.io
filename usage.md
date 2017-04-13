---
layout: page
title: Usage
permalink: /usage/
weight: 1
---

Installing HENkaku
-------------------------------------------------------------------------------
You must run the installer *each time you reboot the device* before you can launch any homebrew application. You do *not* need to reinstall when you place the device into sleep mode. If you press the power button once, you are in sleep mode and do not need to reinstall HENkaku. If you hold the power button and then choose the option to Power Off, then you do need to reinstall HENkaku. You also need to reinstall if the battery runs out. Installing HENkaku requires an internet connection.

The first time you install HENkaku, a new bubble named "molecularShell" will show up in LiveArea. This application allows you to install other homebrew bubbles. However, once you reboot the device, molecularShell and any other homebrew bubbles you installed will not be able to be launched until you run the installer again.

{: .text-danger}
It is important that you never update your Vita past 3.60 if you ever wish to use HENkaku now or in the future. If you do update, all your installed homebrew will no longer work and you cannot install any homebrew in the future.

### Installation
1. {:class="text-warning"}Make sure your Vita is running firmware **3.60**
2. Open the Web Browser application and visit **{{ site.url }}**
3. Press the "Install" button
4. Once the installation is complete, the browser will be closed automatically

<div class="alert alert-info">
  <p>Hint: If you've installed HENkaku before, you can install it again directly from molecularShell's LiveArea. Just open the "shell" bubble and use the orange "install" button.</p>
</div>

### Troubleshooting

#### Error C1-6775-5 when launching molecularShell

You must run the HENkaku installer again. Follow the directions above.

#### The web browser shows grey "Please wait..." screen

This is normal. Just wait for it, eventually it should load the page and trigger the exploit.

#### The web browser crashes (error C2-12828-1) and an error report dialog appears

Press "OK" and try again. If the browser crashes more than three times in a row, you can quit the browser (Press the PS button and swipe the LiveArea page from the top right corner or hold the "O" or "X" button depending on your region). Then you can re-attempt installation.

If you quit the browser and this still happens more than three times in a row, you should reboot the system and try again.

If the web browser keeps crashing, and you've already rebooted your Vita at least five times in a row, try the following:

* Delete your cookies. To do that, open the web browser, open the menu and click on "Delete Cookies".
* Close all your web browser tabs, reboot PS Vita and try going to **{{ site.url }}/go/** directly, without visiting **{{ site.url }}**.
* Try switching to another internet connection: a firewall or your ISP could be interfering with the proper operation of the exploit.

#### The device freezes or reboots after trying to install

If the device froze, hold the power button for 15 seconds to manually power off the device and then press the power button again to restart the device. You can then attempt to install again.

#### The web browser automatically closed after installation

That is the expected behavior. HENkaku should now be installed. You can launch homebrew applications including molecularShell (see usage directions below).

#### The screen becomes black after the installation

Press the home/PS button and close the browser manually. Installation should be successful.

#### A bad plugin crashes device upon installation

You can force all configuration to be reset by holding R after the exploit successfully launches the bootstrap installer. This is when you see the animation where LiveArea comes up and the screen scrolls from the Web Browser tab to a new one and then launches this new app.

### Offline Installer

We now have a solution for people who do not have constant internet access. The HENkaku Offline Installer will hijack the Email application such that you can install HENkaku after reboot using the Email application instead of visiting the website. More details about this [here](/showcase/#/homebrew/0-offline).

Using molecularShell
-------------------------------------------------------------------------------
The first time you install HENkaku, the molecularShell bubble will be added to your LiveArea. This will be your portal to installing homebrew.

### Installing Homebrew
0. The homebrew package you wish to install should be a file with the **.vpk** extension.
0. Make sure Wifi is enabled and you are connected to the same network as the host computer.
0. Open "shell" by launching the bubble.
0. Press SELECT to start a FTP server. Please note that the FTP server is not password protected. Only run it on a trusted local network.
0. Note the IP address displayed in a message popup.
0. Open your FTP client on the host computer and connect to that IP address.
0. Navigate to "ux0" (this is the root of your memory card or internal storage) and you can upload the **.vpk** package here or in any subdirectory.
0. Once you upload all the packages you wish to install you can disconnect the client.
0. Back in molecularShell, press CIRCLE to stop the FTP server.
0. Navigate to "ux0:" and then to where you placed the packages. To install, select the package and press X.

### Troubleshooting

#### Error C1-6775-5 when launching molecularShell

You must run the HENkaku installer again. Follow the directions above.

#### FTP error

Check if you have a firewall on the host computer. Also make sure you're on the same network as the host.

#### Not all files/devices are shown

You need to enable unsafe homebrew mode. Open molecularShell and press Start. Then choose the option to enable unsafe homebrew. Back out of the menu, quit molecularShell, and relaunch it again.

Running Homebrew
-------------------------------------------------------------------------------
Once you installed HENkaku, running homebrew is as simple as launching the installed bubble directly from LiveArea!

Upgrading to 3.60
-------------------------------------------------------------------------------
Since only firmware 3.60 is supported, you can upgrade any Vita on a lower firmware version to 3.60 with these instructions. Be careful not to update to the latest version through official means or you will not be able to use HENkaku!

## Simple Instructions

Set your DNS to **{{ site.dns }}** and choose to update from Wi-Fi. Proceed **only** if the message says "A new version of the system software is available. Firmware 3.60 (変革 Compatible)". That's it!

## Detailed Instructions

1. Open the Settings app
2. Select "Network"
3. Select "Wi-Fi Settings"
4. If you are not connected to the internet, do so now. Select your current connection (there should be a green dot to the left).
5. Select "Advanced Settings"
6. Under "DNS Settings" choose "Manual"
7. Under "Primary DNS" set it to **{{ site.dns }}**
8. Leave "Secondary DNS" blank. Make sure "Proxy Server" is set to "Do Not Use". Press OK.
9. Back out to the main settings screen. Select "System Update" and then "Update Using Wi-Fi."
10. If you get an error saying your system is up to date, that means either your Vita is on 3.60 already *or your Vita is > 3.60 and is not supported by HENkaku*
11. Otherwise you will see a pop-up saying there is a new update. **Make sure the message says "3.60 (変革 Compatible)"!** If the message does not say that, **do not proceed** and try to repeat these steps to see if you missed something.
12. After ensuring you are updating to "3.60 (変革 Compatible)", proceed with the steps on screen to update.
13. After updating to 3.60, you can follow steps 1-5 again and then set "DNS Settings" back to "Automatic" to restore your DNS settings.

Support
-------------------------------------------------------------------------------
Running into problems? You can find us on FreeNode IRC at [#henkaku](irc://chat.freenode.net/henkaku). Community support will also be provided in the [forums](/forums/).
