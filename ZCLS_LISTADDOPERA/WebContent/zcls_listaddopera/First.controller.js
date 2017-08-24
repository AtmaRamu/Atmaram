sap.ui.controller("zcls_listaddopera.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_listaddopera.First
*/
	onInit: function() {
/*var oModel = new sap.ui.model.json.JSONModel();
oModel.loadData("model/Data.json");
this.getView().setModel(oModel);*/

},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_listaddopera.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_listaddopera.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_listaddopera.First
*/
//	onExit: function() {
//
//	}

OnAddClick: function(){

var oModel = this.getView().getModel();
var oData = oModel.getData();
oData.items.unshift({
"Title": "Gionee",
"Price" : "6000"
});
oModel.setData(oData);
//sap.ui.getCore().setData(oData);
//this.getView().setModel(oData);
},

onDelete: function(oEvent){
	debugger;
	this.getView().byId("list");
	// calculating the index of the selected list item
	var sPath = oEvent.mParameters.listItem.oBindingContexts;
	//var iLength = sPath.length;
	//var iIndex = sPath.slice(sPath - 1);
	// Removing the selected list item from the model based on the index
	// calculated
	var oModel = this.getView().getModel();
	var oData = oModel.oData;
	var removed = oData.items.splice(sPath, 1);
	oModel.setData(oData);
	}

});
	