sap.ui.controller("zcls01_tabledata.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls01_tabledata.First
*/
onInit: function() {
	
	 var naughtyList = [
	                    {lastName: "Dente", name: "Al", stillNaughty: true},
	                    {lastName: "Friese", name: "Andy", stillNaughty: true},
	                    {lastName: "Mann", name: "Anita", stillNaughty: false}
	                  ];
	 var oModel = new sap.ui.model.json.JSONModel();
	  oModel.setData(naughtyList);
	  var oTable =  sap.ui.getCore().byId("id1");
	  this.getView().setModel(oModel);
	  debugger;
	  oTable.bindRows("/");
	//  sap.ui.getCore().setModel(naughtyList);
	
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls01_tabledata.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls01_tabledata.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls01_tabledata.First
*/
//	onExit: function() {
//
//	}

});