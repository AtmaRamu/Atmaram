sap.ui.controller("zls_buttonincrement.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zls_buttonincrement.First
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/Product.json");
		this.getView().setModel(oModel);
		//debugger;
		var oTable = this.getView().byId("idProductsTable");
		/*var oTemplate = new sap.m.ColumnListItem({
			cells :[
			       new sap.m.Text({text: "{ProductID}"}),
			       new sap.m.Text({text:"{Name}"}),
			       new sap.m.Text({text:"{Quantity}"}),
			       new sap.m.Text({text:"{value}"}),
			       new sap.m.Text({text:"{Total}"}),
			       new sap.m.Button({text:"{InValue}",press:onPress}),
			       new sap.m.Text({text:"{tax}"}),
			       
			        
			        ]
		});
		
		oTable.bindAggregation("items","/Product",oTemplate);*/

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zls_buttonincrement.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zls_buttonincrement.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zls_buttonincrement.First
*/
//	onExit: function() {
//
//	}
	
	onPress:function(){
		alert("hi");
		debugger;
		
	//var oVal =	this.getView().byId("id1").getText();
	alert(oVal);
	
	}

});