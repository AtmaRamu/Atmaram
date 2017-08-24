sap.ui.controller("com.sap.northwind.controller.OrdersPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.OrdersPage
*/
	onInit: function() {
		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc/"
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.OrdersPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.OrdersPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.OrdersPage
*/
//	onExit: function() {
//
//	}
	
	onItemSelect : function(oEvent){
		var OrderId = oEvent.getSource().getBindingContext().getObject().OrderID;
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("orderDetailRoute",{OrderID : OrderId});
	},
	
	onEmployeeLinkPress : function(oEvent){
		//debugger;
		var empId = oEvent.getSource().getBindingContext().getObject().EmployeeID;
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("empDetailRoute",{EmployeeID : empId});
	},
	onCreateCustomer : function(oEvent){
		this.getOwnerComponent().getRouter().navTo("createCustomerRoute");
	}

});