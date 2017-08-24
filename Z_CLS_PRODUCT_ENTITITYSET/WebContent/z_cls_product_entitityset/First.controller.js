sap.ui.controller("z_cls_product_entitityset.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z_cls_product_entitityset.First
*/
	onInit: function() {
		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		/*var oCombo = this.getView().byId("idCombo");
		 * 
		 * 
		
		oCombo.bindAggregation()*/
		
		var oSim = this.getView().byId("idSim");
		
		var customerId = "ALFKI";
		oSim.bindElement("/Customers('"+customerId+"')");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf z_cls_product_entitityset.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf z_cls_product_entitityset.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf z_cls_product_entitityset.First
*/
//	onExit: function() {
//
//	}
	
	onChange:function(oEvent){
		//alert("oCombo");
		
		//var oCombovalue = oEvent.getSource().getProperty("selectedKey");
		var oCombo = this.getView().byId("idCombo").getSelectedItem().getText();
		alert(oCombo);
		debugger;
		
		
	//	if(oCombovalue==oCombovalue)
		
		var oSim = this.getView().byId("idSim");
		
		oSim.bindElement("/Customers('"+oCombo+"')");
		
		
		
		
		
		
		
		
		
	}

});