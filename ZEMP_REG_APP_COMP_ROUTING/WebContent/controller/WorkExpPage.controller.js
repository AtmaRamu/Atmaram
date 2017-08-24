sap.ui.controller("com.smax.empreg.routing.controller.WorkExpPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemp_reg_app_1.WorkExpPage
*/
	onInit: function() {

	},
	
	onAddEmployer: function(){
		//debugger;
		//var oSplitAppDetailCont = this.getView().getParent();
		//oSplitAppDetailCont.to("idSplitAppPage--idAddEmployerPg");
		
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("workExpAddRoute");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemp_reg_app_1.WorkExpPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemp_reg_app_1.WorkExpPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemp_reg_app_1.WorkExpPage
*/
//	onExit: function() {
//
//	}

});