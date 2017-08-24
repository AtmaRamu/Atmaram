sap.ui.controller("navigation.MAIN", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf navigation.MAIN
*/
	onInit: function() {
   this.getView().setModel(
	new sap.ui.model.odata.v2.ODataModel("proxy/http/services.odata.org/Northwind/Northwind.svc/")	   
   
   )
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf navigation.MAIN
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf navigation.MAIN
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf navigation.MAIN
*/
//	onExit: function() {
//
//	}
onchange :function(oEvent){
	debugger;
	this.getView().byId("idtable").bindAggregation(
			"items","/Customers('"+oEvent.getParameters().value+"')/Orders",
			new sap.m.ColumnListItem({
				cells :[
				        new sap.m.Text({text : "{OrderID}"}),
				        new sap.m.Text({text : "{CustomeID}"}),
				        new sap.m.Text({text : "{EmployeeID}"}),
				        new sap.m.Text({text : "{OrderDate}"})
				        
				        ]
		}));
	
}

});