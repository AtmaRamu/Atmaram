sap.ui.controller("zcls_01_filteroperation.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_01_filteroperation.First
*/
	onInit: function() {
		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_01_filteroperation.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_01_filteroperation.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_01_filteroperation.First
*/
//	onExit: function() {
//
//	}
	
	onSearch : function(oControlEvent)
	{
		
		//alert("hi");
		var query = oControlEvent.getParameters().query;
		
		// do the filter operation
		var filters = [];
		
		var filter1 = new sap.ui.model.Filter("Country",sap.ui.model.FilterOperator.EQ,query);
		
		var oTable = this.getView().byId("idTable");
		
		oTable.getBinding("items").filter(filter1);
		
		
		
		
	},
	itemPressed: function(oControlEvent)
	{
		
		//alert("hi");
		debugger;
		//var oTable = oControlEvent.getParameters().listItem;
		var oTable = this.getView().byId("idTable").getSelectedItem();
		//var oTable = oControlEvent.getSource().byId("idTable");
		//alert(oTable);
		var query = oTable.getCells();
		var oCell = query[0].getText();
		
		var oSim = this.getView().byId("idSim");
		oSim.bindElement("/Customers ('"+oCell+"')");
		
		//oSim.bindElement("/Customers('"+oCell+"')");
		
		
		
	//	alert()
		
		
		
	}

});