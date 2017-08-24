sap.ui.controller("bargraph.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bargraph.Main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf bargraph.Main
*/
//	onBeforeRendering: function() {
//
//	},
    addCommentMessage : function()
	{
		sap.m.MessageToast.show("Please add a Comment", {
		    duration: 3000,                  // default
		    width: "15em",                   // default
		    my: "center bottom",             // default
		    at: "center bottom",             // default
		    of: window,                      // default
		    offset: "0 0",                   // default
		    collision: "fit fit",            // default
		    onClose: null,                   // default
             autoClose: true,                 // default
		    animationTimingFunction: "ease", // default
		    animationDuration: 1000,         // default
		    closeOnBrowserNavigation: true   // default
		});
	},
	approveMessage : function()
	{
		sap.m.MessageToast.show("Request Approved", {
		    duration: 3000,                  // default
		    width: "15em",                   // default
		    my: "center bottom",             // default
		    at: "center bottom",             // default
		    of: window,                      // default
		    offset: "0 0",                   // default
		    collision: "fit fit",            // default
		    onClose: null,                   // default
		    autoClose: true,                 // default
		    animationTimingFunction: "ease", // default
		    animationDuration: 1000,         // default
		    closeOnBrowserNavigation: true   // default
		});
	},


/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf bargraph.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf bargraph.Main
*/
//	onExit: function() {
//
//	}
	
	

});