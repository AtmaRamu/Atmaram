sap.ui.controller("com.smax.empreg.routing.controller.LinksPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemp_reg_app_1.LinksPage
*/
	onInit: function() {

	},
	
	onGotoRegDetailsPg: function(){
		var oSplitApp = this.getView().getParent().getParent();
		oSplitApp.toDetail("__xmlview0--idSplitAppPage--idEmpRegDetailsPg");
	},
	
	onGotoWorkExpDetailsPg: function(){
		//debugger;
		//var oSPlitApp = this.getView().getParent();
		//oSPlitApp.toDetail("idSplitAppPage--idWorkExpDetailsPg");
		//var oSPlitApp = this.getView().getParent().getParent();
		//oSPlitApp.toDetail("__xmlview0--idSplitAppPage--idWorkExpDetailsPg");
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("workExpRoute");
		
	},
	
	onGotoBankDetailsPg: function(){
		//debugger;
		//this.getView().getParent().getParent().toDetail("__xmlview0--idSplitAppPage--idBankDetailsPg");
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("bankRoute");
		
	},
	onGotoContactDetailsPg: function(){
		//this.getView().getParent().getParent().toDetail("__xmlview0--idSplitAppPage--idContactDetailsPg");
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("contactsRoute");
	},
	onGotoSummaryPg: function(){
		//debugger;
		//this.getView().getParent().getParent().toDetail("__xmlview0--idSplitAppPage--idSummaryPage");		
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("summaryRoute");
		
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemp_reg_app_1.LinksPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemp_reg_app_1.LinksPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemp_reg_app_1.LinksPage
*/
//	onExit: function() {
//
//	}

});