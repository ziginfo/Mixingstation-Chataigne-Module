## Mixingstation-Chataigne-module

OSC-API must be enabled in the Mixingstation Globals-Setup !    
Default OSC Out-Port is 3000 but can be changed in the Mixingstation Globals-Setup 

Please note that there seems to be a bug currently in the OSC-API of Mixingstation ! After sending a message with an argument to Mixingstation, this argument seems to stay as a sort of "global-arg" in Mixingstation, and than any request from Mixingstation (=> sending a message without argument) turns automatically into an "arg-command", which is "not wanted" behaviour !   
I contacted the developer about that, and it is a bug in the actual Version 2.0.3 Mixingstation and will be fixed in 2.0.4 !   
Once that bug is fixed I will add more commands to the module !
### Important News: since today (31/01) there is a new software Version 2.0.4 out (for instance still in Beta). And David fixed this ugly Bug! So when you use MixingStation 2.0.4 you can now use ALL the features in this module... !!

**Important** : The Default Number of Channels is set to 12. If you want to change this, just set the desired number in the Value-Field. But after changing the number you must save the session and reload it !   
keyboard-shortcuts for this are :  cmd-S and than : cmd-shift-O   

###  How to use this...?  
Launch Mixingstation and insert any given Mixer ! You can than (if you want) go "online" to the mixer  or stay "offline". It doesn't matter for the workaround with Chataigne, but be aware that, when Mixingstation is "online" to a given mixer, than every action in Chataigne will obviously also trigger actions directly  in the Hardware-Mixer !! While, in offline-mode the interaction concerns only the graphical interface (GUI) of Mixingstation !!    
This can be a way for example to remotely interact from an iPad (or any tablette or smartphone) to Chataigne and so also to any hardware or software that is connected to Chataigne...   

First of all you should know that when using directly the Mixingstation-Module instead of the concerned Mixer-Chataigne-Modules, than Mixingstation count all available (in and out) channels and numbers them from 0 to "last" without any distinction between Mix-Channel, Aux, Bus, FX-Returns, Matrix, Main, DCA etc etc etc ! They are all just "Channels" => just as an example with an X18 mixer inserted to Mixingstation the four FX-Return-Channels are Channe 20 to 23 and the four DCA are 33 to 36 and the Main-LR Channel is number 32 etc etc...   
Depending of what mixer is inserted, the number of available Channel can vary between 20 and 300 !!. So, if you insert à M32-Mixer, you now will have 79 available channels !! and when inserting a Midas Heritage HD96 Mixer you will have some 291 virtual channels available !!

After having inserted a given mixer in Mixingstation (and before using the Chataigne-Module) you may first wanna see the number of the available channels and the available actions and functions... this can be done (and seen) on the Mixingstation's API-Web-Page (HTTPREST API must be enabled in the Global Setup of Mixinstation) and the address  :   
http://localhost:8080/#   
http://localhost:8080/#/data-explorer   
http://localhost:8080/#/rest-api    
