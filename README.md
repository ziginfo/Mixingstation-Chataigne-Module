## Mixingstation-Chataigne-module

With this module you can control the Mixingstation-API. And so you can also control any wanted Mixer-Console that Mixingstation can handle and remote => actually 17 different Mixer-Models are available in the App.    

OSC-API must be enabled in the Mixingstation's Globals-Setup !    
Default OSC Remote-Port is 3000 but can be changed in the Mixingstation Globals-Setup.    
By the way you should also enable HTTP REST and set it's  Port to have accès to the API's HTTP interface. Default Port is 8080 .   

#### Important: you should use at least Mixingstation software Version 2.0.4 as there are a couple of bugs in the API of older software versions... !!

*The Default Number of Channels is set to 12. If you want to change this, just set the desired number in the Value-Field. But after changing the number you must save the session and reload it !*   
keyboard-shortcuts for this are :  cmd-S and than : cmd-shift-O  

###  How to use this Module...?      
Launch Mixingstation and insert any given Mixer ! You can than (if you want) go "online" to the mixer  or stay "offline" (and use just only the graphical interface of MS). It doesn't matter for the workaround with Chataigne, but be aware that, when Mixingstation is "online" to a given mixer, than every action in Chataigne will obviously also trigger actions directly  in the Hardware-Mixer !! While, in offline-mode the interaction concerns only the graphical interface (GUI) of Mixingstation !!    
This can be a way for example to remotely interact from an iPad (or any tablette or smartphone) to Chataigne and so also to any hardware or software that is connected to Chataigne... For exemple a Mixingstation-Layout can be used to remote any other Chataigne Module by mapping or actions etc       
On the computer(s) Mixingstation and Chataigne (with its MS-Module inserted) should be launched. By default they are "linked" on localhost, but can also be "linked" by any wired or wireless Network !  Mixingstation's API should have been activated and any wanted Mixer should be inserted. On any other used device  (tablette, iPad, phone, labtop, etc etc), Mixingstation should be launched and have the same Mixer-Console as on the (Parent) Computer. When the device is connected to the Computer, any Remote-Commands sent from the device to the computer are also received by Chataigne and can now be used for mapping-actions or others.... the reverse way works as well, obviously ! 

Before building your workflow, please consider , what you wanna achieve, and so use the right tool (the right module).    
You just want to remote any given Mixer-Console ?? If such a Mixer-Module exist, use this instead of the Mixingstation-Module. Be aware also that Chataigne is not really a good Remote-App for controlling Mixers. In most case of "pure Remote , it would be better to use directly Mixingstation instead !    
If the specific Mixer-Module does not exist in Chataigne, the Mixingstation-Module can be the solution. And as already said, it is a quite good tool also for wireless remote for many workarounds.        

When using the Mixingstation's-API-Module you should know that the API counts and indexes all available (in and out) channels and numbers them from 0 to the "last" without any distinction between Mix-Channel, Aux, Bus, FX-Returns, Matrix, Main, DCA etc etc etc ! They are all just "Channels" => just as an example with an X18 mixer inserted to Mixingstation the four FX-Return-Channels are Channel 17 to 20; the 6 Busses are Channels 21 to 26 and the four DCA are 32 to 35 and the Main-LR Channel is number 31 etc etc...(so : XR18 has 36 Channels =>Ch0 to CH35 !!)       
That means that regarding the Index there is no difference between INs and OUTs.... they are all the same and the API indexes first the IN Channels, followed than by the OUT Channels       
Depending of what mixer is inserted, the number of available Channel can vary between 20 and 300 !! So, if you insert a M32-Mixer, you now will have 79 available channels !! and when inserting a Midas Heritage HD96 Mixer you will have some 291 virtual channels available !!

After inserting a given mixer in Mixingstation (and before using the Chataigne-Module) you may first wanna see the number of the available channels and the available actions and functions... this can be done (and seen) on the Mixingstation's API-Web-Page (HTTP-REST API must be enabled in the Global Setup of Mixingstation) and the following address  :   
http://localhost:8080/#   
http://localhost:8080/#/data-explorer   
http://localhost:8080/#/rest-api    

If this Module is useful for you just let me know.     
Please contact me if you have any suggestions, demands or requests and any help is always welcome !!   
Have Fun    

To learn more about Chataigne, please visit : http://benjamin.kuperberg.fr/chataigne/    
And Ben's Youtube channel where you can find tutorials : https://youtu.be/RSBU9MwJNLY
