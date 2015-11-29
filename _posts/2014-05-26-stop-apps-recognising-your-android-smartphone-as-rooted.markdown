---
layout: post
title:  "Stop apps recognising your Android smartphone as rooted"
date:   2014-05-26 10:01:08 +1300
categories: android hacks
coverimage: "ResizedImage19201280-nexus-5.jpg"
---

There is nothing more frustrating than downloading an app only to find it's functionality is limited because your phone has been rooted. There are a few reasons why developers would want to do this, the chief among them being it stops users from being able to download the content of the app, or it makes the device a lot less secure. But this is Android, the free, open-source platform, where there is a way around everything. This will quickly and easily walk you through making your device invisible to these apps.

* Download and install the Xposed Framework, which can be found [here][xposed-framwork]
* Open it and go through the prompts to install it
* After it's installed you'll need to restart your device
* Download the [Root Cloaker][root-cloaker] module
* Install it using the Xposed Framework app, and restart the device again
* Open the RootCloak app
* Tap Add/Remove Apps
* Tap the '+' in the upper-left corner
* Find the app you want to hide

After you have added the app to the 'blocked' list, you may need to force close the app before opening it again. Now the app should behave as normal. 

[root-cloaker]: http://repo.xposed.info/module/com.devadvance.rootcloak
[xposed-framwork]: http://repo.xposed.info/module/de.robv.android.xposed.installer