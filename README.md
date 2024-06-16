## Mixingstation-Chataigne-module

With this module you can control the Mixingstation-API. And so you can also control any wanted Mixer-Console that Mixingstation can remote (=> actually 17 different Mixer-Models)    

OSC-API must be enabled in the Mixingstation's Globals-Setup !    
Default OSC Out-Port is 3000 but can be changed in the Mixingstation Globals-Setup    
By the way you should also enable HTTP REST and set it's  Port to have accès to the API's HTTP interface. Default Port is 8080 .   

#### Important: you should use at least Mixingstation software Version 2.0.4 as there are a couple of bugs in the API of older software versions... !!

**Important** : The Default Number of Channels is set to 12. If you want to change this, just set the desired number in the Value-Field. But after changing the number you must save the session and reload it !   
keyboard-shortcuts for this are :  cmd-S and than : cmd-shift-O   

###  How to use this...?  
Launch Mixingstation and insert any given Mixer ! You can than (if you want) go "online" to the mixer  or stay "offline". It doesn't matter for the workaround with Chataigne, but be aware that, when Mixingstation is "online" to a given mixer, than every action in Chataigne will obviously also trigger actions directly  in the Hardware-Mixer !! While, in offline-mode the interaction concerns only the graphical interface (GUI) of Mixingstation !!    
This can be a way for example to remotely interact from an iPad (or any tablette or smartphone) to Chataigne and so also to any hardware or software that is connected to Chataigne...   
On the computer Mixingstation and Chataigne (with its MS-Module inserted) should be launched. Mixingstation's API should have been activated and any wanted Mixer should be inserted. On any other used device  (tablette, iPad etc etc), Mixingstation should be launched and have the same Mixer-Console as on the Computer. When the device is connected to the Computer, any Remote-Commands sent from the device to the computer are also received by Chataigne and can now be used for mapping-actions or others.... the inverses way works as well, obviously ! 

Please consider before building your workflow, what you wanna achieve and use the right tool (the right module).    
You just want to remote any given Mixer-Console ?? If such a Module exist, use this instead of the Mixingstation-Module. Be aware also that Chataigne is not really a good Remote-App for controlling Mixers. It would be better to use directly Mixingstation instead !    
If the specific Mixer-Module does not exist, the Mixingstation-Module can be the solution. And as already said, it is a quite good tool also for wireless remote in many many workarounds.        

When using the Mixingstation's-API-Module you should know that the API counts and indexes all available (in and out) channels and numbers them from 0 to "last" without any distinction between Mix-Channel, Aux, Bus, FX-Returns, Matrix, Main, DCA etc etc etc ! They are all just "Channels" => just as an example with an X18 mixer inserted to Mixingstation the four FX-Return-Channels are Channel 20 to 23 and the four DCA are 33 to 36 and the Main-LR Channel is number 32 etc etc...    
That means that regarding the Index there is no difference between INs and OUTs.... there all the same and the API indexes first the IN Channels, followed than by the OUT Channels       
Depending of what mixer is inserted, the number of available Channel can vary between 20 and 300 !!. So, if you insert à M32-Mixer, you now will have 79 available channels !! and when inserting a Midas Heritage HD96 Mixer you will have some 291 virtual channels available !!

After inserting a given mixer in Mixingstation (and before using the Chataigne-Module) you may first wanna see the number of the available channels and the available actions and functions... this can be done (and seen) on the Mixingstation's API-Web-Page (HTTPREST API must be enabled in the Global Setup of Mixingstation) and the following address  :   
http://localhost:8080/#   
http://localhost:8080/#/data-explorer   
http://localhost:8080/#/rest-api    

Please contact me if you have any suggestions, demands or requests and any help is always welcome !!   
Have Fun    

To learn more about Chataigne, please visit : http://benjamin.kuperberg.fr/chataigne/    
And Ben's Youtube channel where you can find tutorials : https://youtu.be/RSBU9MwJNLY
