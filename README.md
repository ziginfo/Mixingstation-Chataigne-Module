## Mixingstation-Chataigne-module

OSC-API must be enabled in the Mixingstation Globals-Setup !    
Default OSC Out-Port is 3000 but can be changed in the Mixingstation Globals-Setup    

###  How to use this...?  
Launch Mixingstation and insert any given Mixer ! You can than go "Online" to the mixer (if you want) or stay "offline". It doesn't matter for the workaround with Chataigne, but be aware that, when Mixingstation is "online" to a given mixer, than every action in Chataigne will act directly also in the Mixer !! While, in offline-mode the interaction concerns only the graphical interface (GUI) of Mixingstation !! This can be a way for example to remotely interact from an iPad (or any tablette or smartphone) to Chataigne and so to any hardware or software that is connected to Chataigne...   

First of all you should know that when using directly the Mixingstation-Module instead of the concerned Mixer-Chataigne-Modules, than Mixingstation count all available channels and numbers them from 0 to "last" without any distinction between Mix-Channel, Aux, Bus, Matrix, Main, DCA etc etc etc ! They are all just Channels => just as an example with an X18 mixer inserted to Mixingstation the four FX-Return-Channels are Channe 20 to 23 and the four DCA are 33 to 36 and the Main-LR Channel is number 32 etc etc... 

after having inserted a given mixer in Mixingstation (and before using the Chataigne-Module) you might first see the number of the available channels and the the available actions and functions... this can be done (and seen) on the Mixingstation's API-Web-Page and the address : 
http://localhost:8080/# and http://localhost:8080/#/data-explorer