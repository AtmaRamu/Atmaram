sap.ui.controller("smax.empReg.view.Second_page", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf second_page.Second_page
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf second_page.Second_page
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf second_page.Second_page
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf second_page.Second_page
*/
//	onExit: function() {
//
//	}
	/*
	Towork: function(){
		this.getOwnerComponent().getRouter().navTo("route2.xmlview0--idsplit--idwork");
	},
	*/
	
	
	Towork: function(){
		debugger;
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idwork");
	},
	Toreg: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idreg");
	},
	Tocontact: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idcontact");
	},
Tobank: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idbank");
	},
	Tocertification: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idcertifiction");
	},
	Toupload: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idupload");
	},
	Tosummary: function(){
		
		var app = this.getView().getParent().getParent();
		app.toDetail("__xmlview0--idsplit--idsummary");
	},
	
	

});