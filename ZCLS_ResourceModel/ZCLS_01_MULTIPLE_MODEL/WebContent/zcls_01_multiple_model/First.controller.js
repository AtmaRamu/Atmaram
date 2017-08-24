sap.ui.controller("zcls_01_multiple_model.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_01_multiple_model.First
*/
	onInit: function() {
		
		var oModel1 = new sap.ui.model.json.JSONModel();
		var oModel2 = new sap.ui.model.json.JSONModel();
		//oModel.loadData("model/employeeData.json");
	
		oModel1.loadData("model/employeeData.json");
		oModel2.loadData("model/empDept.json");
		
		this.getView().setModel(oModel2, "M2");
		this.getView().setModel(oModel1);
		debugger;
	var oSimpleform = this.getView().byId("idSimform1");
	oSimpleform.bindElement("/customer/0/")
	oSimpleform.bindElement("M2>/product/0/ ")
	
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_01_multiple_model.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_01_multiple_model.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_01_multiple_model.First
*/
//	onExit: function() {
//
//	}

});