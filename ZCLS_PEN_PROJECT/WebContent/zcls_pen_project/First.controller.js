sap.ui.controller("zcls_pen_project.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_pen_project.First
*/	
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/recordData.json");
		 /* this.table_Id = this.byId("tab_IDD");
		  this.table_Id.setModel(this.JSOnModel);*/
		this.getView().setModel(oModel);
	var oTable =	this.getView().byId("tab_IDD");
		
	oTable.setModel(oModel);
	
	var SORTKEY = "recog";
	  var DESCENDING = false;
	  var GROUP = true;
	  var oBinding = oTable.getBinding("items");
	  var aSorter = [];
	  
	  var sorter = new sap.ui.model.Sorter(SORTKEY, DESCENDING, GROUP)
	  aSorter.push(sorter);
	  oBinding.sort(aSorter);
	  

	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_pen_project.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_pen_project.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_pen_project.First
*/
//	onExit: function() {
//
//	}

});