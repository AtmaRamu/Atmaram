sap.ui.controller("zodata_create.Create", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodata_create.Create
*/
	onInit: function() {

		var url="proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/"
		var oModel=sap.ui.model.odata.v2.ODataModel(url)
		oModel.setSizeLimit(1000)
		this.getView().setModel(oModel)
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodata_create.Create
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodata_create.Create
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodata_create.Create
*/
//	onExit: function() {
//
//	}
	
	onUpdate: function(){
		
		//if model is not created define and set the model
		//get the model
		
		var oModel=this.getView().getModel()
		
		var ProductID=this.getView().byId("idCombo").getValue();
		var data={
				
				
					Name:this.getView().byId("idProdName").getValue()
		}
		
		oModel.update("/ProductSet('"+ProductID+"')",data,{
			
			                             success:function(){sap.m.MessageToast.show("Data Updated")},
		                                 error: function(){sap.m.MessageToast.show("Data not Updated")}
			
			
		                                  }
		             )
		
		
		
		
	      },

});