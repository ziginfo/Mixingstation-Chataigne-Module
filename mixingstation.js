// ========================== VARS ===========================
var myParameters = {};


//====================================================================
//						INITIAL FUNCTIONS 
//====================================================================

function init() {
  script.log("Custom module init");

// =====================================================================
// 						CREATE CONTAINERS
// =====================================================================
			
// Faders Container>>>>>>>>>>>>>>>>>>>>>		
	faders = local.values.addContainer("Faders");
		faders.setCollapsed(true);
		faders.addTrigger("Reset", "Reset All Values" , false);
		faders.addTrigger("Sync Faders", "Get Fader Values from the Console" , false);	
		for (var n = 1; n < 37; n++) {
			var fade = faders.addFloatParameter("Fader "+n, "", 0, 0, 1); 
//			fade.setAttribute("readonly" ,true);
			}   
  
}

//============================================================
//							VALUE CHANGE EVENTS
//============================================================

function moduleValueChanged(value) {

  	if (value.name == "syncFaders"){ 
  	}
  
	if (value.name == "reset"){ 
   	for (var n = 0; n < 36; n++) {
   	var no = n + 1 ;
	local.values.faders.getChild('fader'+no).set(0.0);} }
   
   
}

//============================================================
//				KEEP ALIVE -> X-Remote Loop
//============================================================
function update(deltaTime) {
		var now = util.getTime();
		if(now > TSSendAlive) {
		TSSendAlive = now + 5;
		keepAlive(); }
}
function keepAlive() {
		local.send("/hi/n"); 
}


//============================================================
//							OSC EVENTS
//============================================================

function oscEvent(address, args) {
	
	for (var n = 0; n < 36; n++) {
	var no = n+1 ;
	var addr = "/con/n/ch."+n+".mix.lvl" ;
	var child = "fader"+no ;
	if (address == addr) {
	local.values.faders.getChild('fader'+no).set(args[0]); } }
	
	
}

//=========================================================
//					 REGULAR FUCNTIONS
//=========================================================