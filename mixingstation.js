// ========================== VARS ===========================
var myParameters = {};
var count ;

//====================================================================
//			INITIAL FUNCTIONS 
//====================================================================

function init() {

// =====================================================================
// 			CREATE CONTAINERS
// =====================================================================
			
// Faders Container>>>>>>>>>>>>>>>>>>>>>
		
		faders = local.values.addContainer("Faders");
		faders.setCollapsed(true);
		count = local.values.numberOfChannels.get() ;  	
		faders.addTrigger("Reset Values", "Reset All Values" , false);
		faders.addTrigger("Sync Faders", "Get Fader Values from Mixingstation" , false);	
		for (var n = 1; n <= count; n++) {
			var fade = faders.addFloatParameter("Fader "+n, "", 0, 0, 1); 
//			fade.setAttribute("readonly" ,true);
			}
			
//Labels Container >>>>>>>>>>>>>>>>>>>>>>		
		labels=local.values.addContainer("Labels");
		labels.setCollapsed(true);
		labels.addTrigger("Reset Labels", "Reset All Labels" , false);
		labels.addTrigger("Sync Labels", "Get Labels from Mixingstation" , false);	
		for (var n = 1; n <= count; n++) {
			labels.addStringParameter("Label "+n, "", ""); }
		 
 //Buttons Container >>>>>>>>>>>>>>>>>>>>>>		
		buttons=local.values.addContainer("Buttons");
		buttons.setCollapsed(true);
		buttons.addTrigger("Reset Buttons", "Reset All Buttons" , false);
		buttons.addTrigger("Sync Buttons", "Get Buttons from Mixingstation" , false);	
		for (var n = 1; n <= count; n++) {
			buttons.addBoolParameter("On "+n, "", false); }
		for (var n = 1; n <= count; n++) {
			buttons.addBoolParameter("Solo "+n, "", false);  }
}

//============================================================
//		VALUE CHANGE EVENTS
//============================================================

function moduleValueChanged(value) {

  	if (value.name == "syncFaders"){ 
  	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
  	local.send("/con/n/ch."+n+".mix.lvl"); 	} }
   	
 	if (value.name == "syncLabels"){ 
  	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
   	local.send("/con/n/ch."+n+".cfg.name"); } }
   	
   	if (value.name == "syncButtons"){ 
  	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
   	local.send("/con/n/ch."+n+".mix.on");
   	local.send("/con/n/ch."+n+".solo"); } }
   	
	if (value.name == "resetValues"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.faders.getChild('fader'+no).set(0.0); } }
	
   	if (value.name == "resetLabels"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.labels.getChild('label'+no).set("");  } }
	
   	if (value.name == "resetButtons"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.buttons.getChild('on'+no).set(0);
	local.values.buttons.getChild('solo'+no).set(0);  } }
}

//============================================================
//		KEEP ALIVE -> X-Remote Loop
//============================================================
function update(deltaTime) {
		var now = util.getTime();
		if(now > TSSendAlive) {
		TSSendAlive = now + 6;
		keepAlive(); }
}
function keepAlive() {
		local.send("/hi/n");
}


//============================================================
//		OSC EVENTS
//============================================================

function oscEvent(address, args) {
	
	for (var n = 0; n <= count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.lvl" ;
	var child = "fader"+no ;
	if (address == addr) {
	local.values.faders.getChild('fader'+no).set(args[0]); } }
	
	for (var n = 0; n <= count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".cfg.name" ;
	var child = "label"+no ;
	if (address == addr) {
	local.values.labels.getChild('label'+no).set(args[0]); } }
	
	for (var n = 0; n <= count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.on" ;
	var child = "on"+no ;
	if (address == addr) {
	local.values.buttons.getChild('on'+no).set(args[0]);} }
	
	for (var n = 0; n <= count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".solo" ;
	var child = "solo"+no ;
	if (address == addr) {
	local.values.buttons.getChild('solo'+no).set(args[0]);} }
}

/*
//=========================================================
//		REGULAR FUCNTIONS
//=========================================================

//  ================ CHANNEL ========================

function mix_fader(chanNo, val) {
	var chanNo = chanNo-1 ;	
	local.send("/con/n/ch."+chanNo+".mix.lvl", val);
}

function mix_on(chanNo, val) {
	chanNo = chanNo-1 ;	
	val=1-val ;
	local.send("/con/n/ch."+chanNo+".mix.on", val);
}

function mix_st(chanNo, val) {
	chanNo = chanNo-1 ;		
	local.send("/con/n/ch."+chanNo+".mix.stOn", val);	
}

function mix_pan(chanNo, val) {
	chanNo = chanNo-1 ;	
	local.send("/con/n/ch."+chanNo+".mix.pan", val);
}

function ch_solo(chanNo, val) {
	chanNo = chanNo-1 ;	
	local.send("/con/n/ch."+chanNo+".solo", val);
}

function mix_send_level(chanNo, mix, val) {	
	chanNo = chanNo-1 ;	
	mix = mix-1 ;	
	local.send("/con/n/ch."+chanNo+".mix.sends."+mix+".lvl", val); 
}


function ch_label(chanNo, val) {
	chanNo = chanNo-1 ;
	local.send("/con/v/ch."+chanNo+".cfg.name", val); 
}

// ============== EQ =====================

function full_ch_eq (chanNo, val, val1, band, val2, val3, val4) {
	chanNo = chanNo-1 ;
	band = band -1 ;	
	local.send("/con/n/ch."+chanNo+".peq.on", val1);
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".gain", val2);
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".freq", val3);
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".q", val4);
}

function ch_eq_reset(chanNo) {
	chanNo = chanNo-1 ;
	local.send("/con/v/ch."+chanNo+".peq.bands.0.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.1.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.2.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.3.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.4.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.5.gain", 0);
	local.send("/con/v/ch."+chanNo+".peq.bands.0.freq", 50);
	local.send("/con/v/ch."+chanNo+".peq.bands.1.freq", 80);
	local.send("/con/v/ch."+chanNo+".peq.bands.2.freq", 500);
	local.send("/con/v/ch."+chanNo+".peq.bands.3.freq", 1000);
	local.send("/con/v/ch."+chanNo+".peq.bands.4.freq", 3000);
	local.send("/con/v/ch."+chanNo+".peq.bands.5.freq", 10000);
}

function eq_on(chanNo, val) {
	chanNo = chanNo-1 ;
	local.send("/con/n/ch."+chanNo+".peq.on", val);
}


function eq_f(chanNo, band, val) { 
	chanNo = chanNo-1 ;
	band = band -1 ;
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".freq", val);
}

function eq_g(chanNo, band, val) {
	chanNo = chanNo-1 ;
	band = band -1 ; 
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".gain", val);
}

function eq_q(chanNo, band, val) {
	chanNo = chanNo-1 ;
	band = band -1 ; 
	local.send("/con/v/ch."+chanNo+".peq.bands."+band+".q", val);
}

// ================ LO CUT ------>>>>>

function hipass (chanNo, val1, val2) {
	chanNo = chanNo-1 ;
	local.send("/con/n/ch."+chanNo+".preamp.filter.0.on", val1);
	local.send("/con/v/ch."+chanNo+".preamp.filter.0.freq", val2);
}

function preamp_hpon(chanNo, val) {
	chanNo = chanNo-1 ;
	local.send("/con/n/ch."+chanNo+".preamp.filter.0.on", val);
}

function preamp_hpf(chanNo, val) {
	chanNo = chanNo-1 ;  

	local.send("/con/v/ch."+chanNo+".preamp.filter.0.freq", val);
}

// ================ HI CUT ------>>>>>

function lopass (chanNo, val1, val2) {
	chanNo = chanNo-1 ;
	local.send("/con/n/ch."+chanNo+".preamp.filter.1.on", val1);
	local.send("/con/v/ch."+chanNo+".preamp.filter.1.freq", val2);
}

function preamp_lpon(chanNo, val) {
	chanNo = chanNo-1 ;
	local.send("/con/n/ch."+chanNo+".preamp.filter.1.on", val);
}

function preamp_lpf(chanNo, val) {
	chanNo = chanNo-1 ;  

	local.send("/con/v/ch."+chanNo+".preamp.filter.1.freq", val);
}

*/
