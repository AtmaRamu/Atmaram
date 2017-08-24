sap.ui.controller("smax.empReg.view.Emplyoee_reg", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf emp_reg_with_data.Emplyoee_reg
*/
/*	onInit: function() {
		
		//create a model
       var oModel = new sap.ui.model.json.JSONModel();
       oModel.loadData("model/emplyoeedata.json");
         
       //setting model to view
       this.getView().setModel(oModel);
       
       
       var oInput = this.getView().byId("idempname");
       oInput.bindProperty("value","/empData/name");
       
       var oInput = this.getView().byId("idemail");
       oInput.bindProperty("value","/empData/email");
       
       var oInput = this.getView().byId("idpan");
       oInput.bindProperty("value","/empData/pan");
       
       var oInput = this.getView().byId("idzip");
       oInput.bindProperty("value","/empData/zipcode");
	},*/
	
	
	/*GoNext : function(){
		
		var app = this.getView().getParent();
		app.to("__xmlview0--idsplit");
	}*/

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf emp_reg_with_data.Emplyoee_reg
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf emp_reg_with_data.Emplyoee_reg
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf emp_reg_with_data.Emplyoee_reg
*/
//	onExit: function() {
//
//	}

	GoNext:function(){
	   this.getOwnerComponent().getRouter().navTo("route2");
   }

   


});