sap.ui.controller("com.smax.empreg.routing.controller.EmpRegistrationPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemp_reg_app_1.EmpRegistrationPage
*/
	onInit: function() {
		that = this;
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/EmployeeData.json");
		this.getView().setModel(oModel);
		//below is the element binding for the simple form with Id "empRegForm" in the view
		this.getView().byId("empRegForm").bindElement("/Employee/Personal/");
	},
	onRegister: function(){
		debugger;
//		var app = this.getView().getParent();
//		app.to("__xmlview0--idSplitAppPage");
		
		this.getOwnerComponent().getRouter().navTo("slitappRoute");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemp_reg_app_1.EmpRegistrationPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemp_reg_app_1.EmpRegistrationPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemp_reg_app_1.EmpRegistrationPage
*/
//	onExit: function() {
//
//	}

});