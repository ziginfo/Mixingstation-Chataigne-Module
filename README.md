## Mixingstation-Chataigne-module

OSC-API must be enabled in the Mixingstation Globals-Setup !    
Default OSC Out-Port is 3000 but can be changed in the Mixingstation Globals-Setup 

important : after inserting this Mixingstation-Module for the first time into a Chataigne-Session, the Containers (Faders, Labels, Buttons etc) will not show up ! You must save the session and reload it !   
keyboard-shortcuts for this are :  cmd-S and than : cmd-shift-O   
the same thing (save and reload) must be done when you eventually want to change the number of the channels !

###  How to use this...?  
Launch Mixingstation and insert any given Mixer ! You can than (if you want) go "online" to the mixer  or stay "offline". It doesn't matter for the workaround with Chataigne, but be aware that, when Mixingstation is "online" to a given mixer, than every action in Chataigne will obviously also trigger actions directly  in the Hardware-Mixer !! While, in offline-mode the interaction concerns only the graphical interface (GUI) of Mixingstation !!    
This can be a way for example to remotely interact from an iPad (or any tablette or smartphone) to Chataigne and so also to any hardware or software that is connected to Chataigne...   

First of all you should know that when using directly the Mixingstation-Module instead of the concerned Mixer-Chataigne-Modules, than Mixingstation count all available (in and out) channels and numbers them from 0 to "last" without any distinction between Mix-Channel, Aux, Bus, FX-Returns, Matrix, Main, DCA etc etc etc ! They are all just "Channels" => just as an example with an X18 mixer inserted to Mixingstation the four FX-Return-Channels are Channe 20 to 23 and the four DCA are 33 to 36 and the Main-LR Channel is number 32 etc etc...   
Depending of what mixer is inserted, the number of available Channel can vary between 20 and 300 !!. So, if you insert à M32-Mixer, you now will have 79 available channels !! and when inserting a Midas Heritage HD96 Mixer you will have some 291 virtual channels available !!

After having inserted a given mixer in Mixingstation (and before using the Chataigne-Module) you may first wanna see the number of the available channels and the available actions and functions... this can be done (and seen) on the Mixingstation's API-Web-Page and the address :   
http://localhost:8080/#   
http://localhost:8080/#/data-explorer   
http://localhost:8080/#/rest-api    
