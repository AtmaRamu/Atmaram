sap.ui.controller("zcls_pen_project.Second", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_pen_project.Second
*/
	onInit: function() {
		
		 var json = new sap.ui.model.json.JSONModel("model/empData.json")
		  var tabId = this.getView().byId("tabId");
		  tabId.setModel(json);
		  
		  tabId.bindItems("/Records", function(Id, path) {
			   var key = path.getProperty("key");
			   if (key === "R") {
			    return new sap.m.ColumnListItem({
			     cells : [ new sap.m.Text({
			      text : "{name}"
			     }), 
			    new sap.m.Text({text:"{mobile}"}), 
			     new sap.m.Text({
			      text : "{email}"
			     }).addStyleClass("greenclass") ]
			    })
			   } 
			  
			   else if (key === "Y") {
				   
			    return new sap.m.ColumnListItem({
			     cells : [ new sap.m.Text({
			      text : "{name}"
			     }), new sap.m.Text({
			      text : "{mobile}"
			     }), new sap.m.Text({
			      text : "{email}"
			     }) ]
			    }).addStyleClass("yellowclass")
			   } 
			   else {
				   
			    return new sap.m.ColumnListItem({
			     cells : [ new sap.m.Link({
			      text : "{name}"
			     }), new sap.m.Text({
			      text : "{mobile}"
			     }), new sap.m.Text({
			      text : "{email}"
			     }) ]
			    })
			   }
			   
			 });

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_pen_project.Second
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_pen_project.Second
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_pen_project.Second
*/
//	onExit: function() {
//
//	}

});