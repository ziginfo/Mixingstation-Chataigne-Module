// ========================== VARS ===========================
var myParameters = {};
var count ;
var champs ;
var ChanNo ;
var nom ;
var trackP = {	
	"label" : ["Label", "s","/con/n/ch.", ".cfg.name"],	
	"level" : ["Level", "f","/con/n/ch.", ".mix.lvl"],
	"track.on" : ["Track on", "b","/con/n/ch." , ".mix.on"],	
	
	"eq.on" : ["Eq on", "b","/con/n/ch." , ".peq.on"],
	"eq.b1.gain" : ["Band 1 Gain", "f", "/con/n/ch.", ".peq.bands.0.gain"],
	"eq.b1.freq" : ["Band 1 Freq", "f", "/con/n/ch.", ".peq.bands.0.freq"],	
	"eq.b1.q" : ["Band 1 Q", "f", "/con/n/ch.", ".peq.bands.0.q"],
	
	"eq.b2.gain" : ["Band 2 Gain", "f", "/con/n/ch.", ".peq.bands.1.gain"],
	"eq.b2.freq" : ["Band 2 Freq", "f", "/con/n/ch.", ".peq.bands.1.freq"],	
	"eq.b2.q" : ["Band 2 Q", "f", "/con/n/ch.", ".peq.bands.1.q"],
	
	"eq.b3.gain" : ["Band 3 Gain", "f", "/con/n/ch.", ".peq.bands.2.gain"],
	"eq.b3.freq" : ["Band 3 Freq", "f","/con/n/ch.", ".peq.bands.2.freq"],
	"eq.b3.q" : ["Band 3 Q", "f", "/con/n/ch.", ".peq.bands.2.q"],
	
	"eq.b4.gain" : ["Band 4 Gain", "f", "/con/n/ch.", ".peq.bands.3.gain"],
	"eq.b4.freq" : ["Band 4 Freq", "f", "/con/n/ch.", ".peq.bands.3.freq"],
	"eq.b4.q" : ["Band 4 Q", "f", "/con/n/ch.", ".peq.bands.3.q"],
	
	"eq.b5.gain" : ["Band 5 Gain", "f", "/con/n/ch.", ".peq.bands.4.gain"],
	"eq.b5.freq" : ["Band 5 Freq", "f", "/con/n/ch.", ".peq.bands.4.freq"],
	"eq.b5.q" : ["Band 5 Q", "f", "/con/n/ch.", ".peq.bands.4.q"],
	
	"eq.b6.gain" : ["Band 6 Gain", "f", "/con/n/ch.", ".peq.bands.5.gain"],
	"eq.b6.freq" : ["Band 6 Freq", "f", "/con/n/ch.", ".peq.bands.5.freq"],
	"eq.b6.q" : ["Band 6 Q", "f", "/con/n/ch.", ".peq.bands.5.q"],
	
	"hpf.on" : ["LoCut on", "b","/con/n/ch.", ".preamp.filter.0.on"],	
	"hpf.freq" : ["LoCut Freq", "f","/con/n/ch.", ".preamp.filter.0.freq"],
	"lpf.on" : ["HiCut on", "b","/con/n/ch." , ".preamp.filter.1.on"],
	"lpf.freq" : ["HiCut Freq", "f","/con/n/ch.", ".preamp.filter.1.freq"]};

var eqval = {	
	"hpf.on" : ["LoCut on", "b","/con/n/ch.", ".preamp.filter.0.on"],	
	"hpf.freq" : ["LoCut Freq", "ff","/con/v/ch.", ".preamp.filter.0.freq"],
	
	"eq.on" : ["Eq on", "b","/con/n/ch." , ".peq.on"],
	"eq.b1.gain" : ["Band 1 Gain", "f", "/con/n/ch.", ".peq.bands.0.gain"],
	"eq.b1.freq" : ["Band 1 Freq", "ff", "/con/v/ch.", ".peq.bands.0.freq"],	
	"eq.b1.q" : ["Band 1 Q", "f", "/con/n/ch.", ".peq.bands.0.q"],
	
	"eq.b2.gain" : ["Band 2 Gain", "fg", "/con/v/ch.", ".peq.bands.1.gain"],
	"eq.b2.freq" : ["Band 2 Freq", "ff", "/con/v/ch.", ".peq.bands.1.freq"],	
	"eq.b2.q" : ["Band 2 Q", "f", "/con/n/ch.", ".peq.bands.1.q"],
	
	"eq.b3.gain" : ["Band 3 Gain", "fg", "/con/v/ch.", ".peq.bands.2.gain"],
	"eq.b3.freq" : ["Band 3 Freq", "ff","/con/v/ch.", ".peq.bands.2.freq"],
	"eq.b3.q" : ["Band 3 Q", "f", "/con/n/ch.", ".peq.bands.2.q"],
	
	"eq.b4.gain" : ["Band 4 Gain", "fg", "/con/v/ch.", ".peq.bands.3.gain"],
	"eq.b4.freq" : ["Band 4 Freq", "ff", "/con/v/ch.", ".peq.bands.3.freq"],
	"eq.b4.q" : ["Band 4 Q", "f", "/con/n/ch.", ".peq.bands.3.q"],
	
	"eq.b5.gain" : ["Band 5 Gain", "fg", "/con/v/ch.", ".peq.bands.4.gain"],
	"eq.b5.freq" : ["Band 5 Freq", "ff", "/con/v/ch.", ".peq.bands.4.freq"],
	"eq.b5.q" : ["Band 5 Q", "f", "/con/n/ch.", ".peq.bands.4.q"],
	
	"eq.b6.gain" : ["Band 6 Gain", "fg", "/con/v/ch.", ".peq.bands.5.gain"],
	"eq.b6.freq" : ["Band 6 Freq", "ff", "/con/v/ch.", ".peq.bands.5.freq"],
	"eq.b6.q" : ["Band 6 Q", "f", "/con/n/ch.", ".peq.bands.5.q"],
	
	"lpf.on" : ["HiCut on", "b","/con/n/ch." , ".preamp.filter.1.on"],
	"lpf.freq" : ["HiCut Freq", "ff","/con/v/ch.", ".preamp.filter.1.freq"]};

// ==================================================
//			INITIAL FUNCTIONS 
// ==================================================

function init() {

// ==================================================
// 			CREATE CONTAINERS
// ==================================================
		
		count = local.values.numberOfChannels.get() ;  
		
// Faders Container>>>>>>>>>>>>>>>>>>>>>
		
		faders = local.values.addContainer("Faders");
		faders.setCollapsed(true);	
		faders.addTrigger("Reset Values", "Reset All Values" , false);
		faders.addTrigger("Sync Faders", "Get Fader Values from Mixingstation" , false);	
		for (var n = 1; n <= count; n++) {
			var fade = faders.addFloatParameter("Fader "+n, "", 0, 0, 1);  }
			
// Pan Container>>>>>>>>>>>>>>>>>>>>>
		
		pan = local.values.addContainer("Pan");
		pan.setCollapsed(true);	
		pan.addTrigger("Reset Pans", "Reset All Values" , false);
		pan.addTrigger("Sync Pans", "Get Pan Values from Mixingstation" , false);	
		for (var n = 1; n <= count; n++) {
			var fade = pan.addFloatParameter("Pan "+n, "", 0, 0, 1); }
			
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

 //Track Container >>>>>>>>>>>>>>>>>>>>>>				
		track = local.values.addContainer("Track");
		track.setCollapsed(true);
		track.addIntParameter("Select Track No","Select the Track Number",1,1) ;
		track.addTrigger("Reset Track Fields", "" , false);
		track.addTrigger("Click to Sync Track", "" , false);		
		champs = util.getObjectProperties(trackP);
		for (var n = 0; n < champs.length; n++) {
			if (trackP[champs[n]][1] == "f") {
			track.addFloatParameter(trackP[champs[n]][0], "", 0, 0, 1); }
			else if (trackP[champs[n]][1] == "b") {
			track.addBoolParameter(trackP[champs[n]][0], "", false); }
			else if (trackP[champs[n]][1] == "s") {
			track.addStringParameter(trackP[champs[n]][0], "", ""); }  }	
			
/*
//PEQ-VAL Container >>>>>>>>>>>>>>>>>>>>>>				
		eqcont = local.values.addContainer("PEQ");
		eqcont.setCollapsed(true);
		eqcont.addIntParameter("Select Track No","Select the Track Number",1,1) ;
		eqcont.addTrigger("Reset EQ Fields", "" , false);
		eqcont.addTrigger("Click to Sync Eq", "" , false);		
		var champs = util.getObjectProperties(eqval);
		for (var n = 0; n < champs.length; n++) {
			if (eqval[champs[n]][1] == "f") {
			eqcont.addFloatParameter(eqval[champs[n]][0], "", 0, 0, 1); }
			else if (eqval[champs[n]][1] == "ff") {
			eqcont.addFloatParameter(eqval[champs[n]][0], "", 20, 20, 20000); }
			else if (eqval[champs[n]][1] == "fg") {
			eqcont.addFloatParameter(eqval[champs[n]][0], "", 0, -15, 15); }
			else if (eqval[champs[n]][1] == "b") {
			eqcont.addBoolParameter(eqval[champs[n]][0], "", false); }
			else if (eqval[champs[n]][1] == "in") {
			eqcont.addIntParameter(eqval[champs[n]][0], "", 0); } 
			else if (eqval[champs[n]][1] == "s") {
			eqcont.addStringParameter(eqval[champs[n]][0], "", ""); } }
*/			
				
}

//============================================================
//			VALUE CHANGE EVENTS
//============================================================

function moduleValueChanged(value) {

  	if (value.name == "syncFaders"){ 
  	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
  	local.send("/con/n/ch."+n+".mix.lvl"); } }
  	
  	if (value.name == "syncPans"){ 
  	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
  	local.send("/con/n/ch."+n+".mix.pan"); 	} }
   	
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
	
	if (value.name == "resetPans"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.pan.getChild('pan'+no).set(0.5); } }
	
   	if (value.name == "resetLabels"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.labels.getChild('label'+no).set("");  } }
	
   	if (value.name == "resetButtons"){ 
   	for (var n = 0; n < count; n++) {
   	var no = n + 1 ;
	local.values.buttons.getChild('on'+no).set(0);
	local.values.buttons.getChild('solo'+no).set(0);  } }
	
	if (value.name == "resetTrackFields"){
	var champs = util.getObjectProperties(trackP);
		for (var n = 0; n < champs.length; n++) {
		var child = trackP[champs[n]][0].split(" ").join("");
		local.values.track.getChild(child).set(0); } }
	
	if (value.name == "clickToSyncTrack"){
	var champs = util.getObjectProperties(trackP);
	var chanNo = local.values.track.selectTrackNo.get() ;
	chanNo = chanNo -1 ;
		for (var n = 0; n < champs.length; n++) {
		var addr = trackP[champs[n]][2]+chanNo+trackP[champs[n]][3];
		local.send(addr);  }  } 
}

//============================================================
//			KEEP ALIVE -> X-Remote Loop
//============================================================

function update(deltaTime) {
		var now = util.getTime();
		if(now > TSSendAlive) {
		TSSendAlive = now + 10;
		keepAlive(); }
}

function keepAlive() {
		local.send("/hi/n"); 
}
		
/*
function keepAlive() {
		if (val == 0){
		local.send("/hi/n");
		val= val+1; }
		else {local.send("/hi/v");
		val=0 ;}
}
*/

//============================================================
//			OSC EVENTS
//============================================================

function oscEvent(address, args) {
	
	for (var n = 0; n < count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.lvl" ;
	var child = "fader"+no ;
	if (address == addr) {
	local.values.faders.getChild('fader'+no).set(args[0]); } }
	
	for (var n = 0; n < count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.pan" ;
	var child = "pan"+no ;
	if (address == addr) {
	local.values.pan.getChild('pan'+no).set(args[0]); } }
	
	for (var n = 0; n < count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".cfg.name" ;
	var child = "label"+no ;
	if (address == addr) {
	local.values.labels.getChild('label'+no).set(args[0]); } }
	
	for (var n = 0; n < count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.on" ;
	var child = "on"+no ;
	if (address == addr) {
	local.values.buttons.getChild('on'+no).set(args[0]);} }
	
	for (var n = 0; n < count; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".solo" ;
	var child = "solo"+no ;
	if (address == addr) {
	local.values.buttons.getChild('solo'+no).set(args[0]);} }
	
	var champs = util.getObjectProperties(trackP);
	var chanNo = local.values.track.selectTrackNo.get() ;
	chanNo = chanNo -1 ;
		for (var n = 0; n < champs.length; n++) {
		var addr = trackP[champs[n]][2]+chanNo+trackP[champs[n]][3];
		var child = trackP[champs[n]][0].split(" ").join("");
		if (address == addr) {
		local.values.track.getChild(child).set(args[0]); } }
	
	
}


//=========================================================
//			REGULAR FUCNTIONS
//=========================================================

//  ============== CHANNEL ========================

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
	local.send("/con/n/ch."+chanNo+".cfg.name", val); 
}

// ================ EQ =====================

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
	local.send("/con/v/ch."+chanNo+".peq.bands.0.freq", 60);
	local.send("/con/v/ch."+chanNo+".peq.bands.1.freq", 100);
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

// =========== LO CUT ------>>>>>

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

// ========== HI CUT ------>>>>>

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
