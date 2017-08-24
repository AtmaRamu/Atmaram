sap.ui.controller("zcls_resourcemodel.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_resourcemodel.First
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/employeeData.json");
		this.getView().setModel(oModel);
		var oTable = this.getView().byId("idProductsTable");
		var oTemplate = new sap.m.ColumnListItem({
			cells :[
			       new sap.m.Text({text: "{ProductID}"}),
			       new sap.m.Text({text:"{Price}"}),
			       new sap.m.Text({text:"{ProductName}"}),
			       new sap.m.Text({text:"{value}"}),
			       new sap.m.Text({text:"{Plant}"}),
			       new sap.m.Text({text:"{Status}"}),
			       
			        
			        ]
		});
		
		oTable.bindAggregation("items","/Product",oTemplate);
		
	/*var oModel1 =	new sap.ui.model.resource.ResourceModel({
		                                                      bundleName:"i18n.mySource"
			                                                 });
	this.getView().setModel(oModel1,"i18n");*/
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_resourcemodel.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_resourcemodel.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_resourcemodel.First
*/
//	onExit: function() {
//
//	}

});