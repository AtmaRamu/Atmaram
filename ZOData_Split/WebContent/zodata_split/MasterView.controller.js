sap.ui.controller("zodata_split.MasterView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodata_split.MasterView
*/
	/*onInit: function() {
		var  URL="proxy/http/services.odata.org/Northwind/Northwind.svc/"
			var oModel=new sap.ui.model.odata.v2.ODataModel(URL);
			this.getView().setModel(oModel);

	},*/

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodata_split.MasterView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodata_split.MasterView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodata_split.MasterView
*/
//	onExit: function() {
//
//	}
	
	Onpress : function(oEvent){
		
		var pItem=oEvent.getSource().getProperty("selectedKey");
		//var pItem=oEvent.getSource().getParameters.item.getKey()
		debugger;
		//var oRef=this.getView().getParent()
		var oRef=this.getView().getParent().getParent();
		//oRef.toDetail("idSplit1--idDetail");
		//"idSplit1--idDetail"
		//debugger
		//var oSF= sap.ui.getCore().byId("idSF");
		debugger;
		oRef.bindElement("/Customers('"+pItem+"')");
		//debugger;
		
	},

});