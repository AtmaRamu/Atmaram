sap.ui.controller("zcls01_datapassing.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls01_datapassing.First
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls01_datapassing.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls01_datapassing.First
*/
	onAfterRendering: function() {
		
		 var oModel = new sap.ui.model.json.JSONModel();
		 sap.ui.getCore().setModel(oModel);

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls01_datapassing.First
*/
//	onExit: function() {
//
//	}
	
	onPress: function(){
		var json = {};
		
		json.fname  = this.getView().byId("idInput1").getValue();
		json.lname  = this.getView().byId("idInput2").getValue();
		
		
		sap.ui.getCore().getModel().setData(json);
		
		//alert(this.getView().getParent());
		var app = this.getView().getParent();
		
		
		app.to("idSecond");
		
		
		
	}

});