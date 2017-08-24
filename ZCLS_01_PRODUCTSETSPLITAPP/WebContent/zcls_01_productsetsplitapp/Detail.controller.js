sap.ui.controller("zcls_01_productsetsplitapp.Detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_01_productsetsplitapp.Detail
*/
	onInit: function() {
		
		var oEventBus = sap.ui.getCore().getEventBus();
		var that = this;
		oEventBus.subscribe("buschannel", "eventId", function(channelId,eventId,data){
			debugger;
			var customerId = data.CustomerId;
			var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
			that.getView().setModel(oModel);
		var oSimple = that.getView().byId("idSimple");
			oSimple.bindElement("/ProductSet('"+customerId+"')");
			
			
		} 
		
		);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_01_productsetsplitapp.Detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_01_productsetsplitapp.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_01_productsetsplitapp.Detail
*/
//	onExit: function() {
//
//	}
	
	onPress: function()
	{
		var that = this
		var oDialog = new sap.m.Dialog({title: "CreateProduct",
			content:[
			         new sap.m.Label({text:"Product Id"}),
			         new sap.m.Input("idinput1"),
			         new sap.m.Label({text:"Product Name"}),
			         new sap.m.Input("idinput2")
			        ],
		buttons : [
		           new sap.m.Button({
		               text: "Save", press:function(){
		            	   debugger;
		            	 //  var that = this;
		            	 //  var oModel=that.getView().getModel();
		            	  // var that = this;
		            	   
		            var data =	 { 
		            	   ProductID :  this.getParent().getContent()[1].getValue(),
		            	Name : this.getParent().getContent()[3].getValue()
		            	 }
		            	   
		          //  var input1 = this.getContent().byId("idinput1");
		            	 
		            	 that.getView().getModel().create("/ProductSet",data,{
		         			
		                     success:function(){sap.m.MessageToast.show("Data Created")},
		                     error: function(){sap.m.MessageToast.show("Data not Created")}


		                     
		                     
		                      })
		            	   
		            	   
		            	   
		               }
		               
		           }),
		           new sap.m.Button({
		               text: "Cancel",press:function(){
		            	   oDialog.close();
		            	   
		                                   }
		                })
		           
		]
		          
			
			
		})
		
		oDialog.open();
		
		//alert("hi");
		
		
	},
	
	/*onSave: function(){
		
		alert("hi");
		
		
		
	},
	
	closeDialog: function(){
		
		this.oDialog.close();
		
		
	}*/
	

});