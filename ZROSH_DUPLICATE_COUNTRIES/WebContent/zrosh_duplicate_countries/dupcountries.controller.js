
sap.ui.controller("zrosh_duplicate_countries.dupcountries", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_duplicate_countries.dupcountries
*/
	onInit: function() {
   var omodel = new sap.ui.model.json.JSONModel();
	omodel.loadData("proxy/http/services.odata.org/Northwind/Northwind.svc/Customers?$select=Country/");
	
	var that = this;
	omodel.attachRequestCompleted( function(oEvent){
		var omodel2 = new sap.ui.model.json.JSONModel();
		var country = oEvent.getSource().getData()['value'];
		debugger;
		var a=[]; b=[];
		for(var i=0; i<country.length; i++ ){
			if(a.indexOf(country[i].Country)=== -1){
				a.push(country[i].Country);	
			}
		}
		for (var j=0; j<a.length; j++){
			var object = {};
			object.Country = a[j];
			b.push(object);
			
		}	
		debugger;
		var omodel2 = new sap.ui.model.json.JSONModel();
		omodel2.setData(b);
		that.getView().byId("idCombo").setModel(omodel2);
		that.getView().byId("idCombo").bindAggregation("items","/",new sap.ui.core.Item({text : "{Country}"}));
		
	}
			);
	
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_duplicate_countries.dupcountries
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_duplicate_countries.dupcountries
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_duplicate_countries.dupcountries
*/
//	onExit: function() {
//
//	}

});