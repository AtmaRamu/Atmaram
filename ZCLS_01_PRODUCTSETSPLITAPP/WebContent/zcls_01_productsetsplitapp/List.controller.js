sap.ui.controller("zcls_01_productsetsplitapp.List", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_01_productsetsplitapp.List
*/
	onInit: function() {
		//var that= this;
		
		
		
		
var olist = this.getView().byId("idList");
debugger;
		olist.attachUpdateFinished(function(){
			
			debugger;
			this.getItems()[0].firePress();
			//olist.getItems
			
			
		})
		
		
		
		/*var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/"
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);*/
		/*var oList = that.getView().byId("idlist");
		oList.attachUpdateFinished(function(){
			
			
			oList.getItems()[0].setSelected(true).firePress();
			
			
			
			
		});*/
		
		
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_01_productsetsplitapp.List
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_01_productsetsplitapp.List
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_01_productsetsplitapp.List
*/
//	onExit: function() {
//
//	}
	
	onPress: function(oControlEvent){
		debugger;
		
	var selectedId =	oControlEvent.getSource().getTitle();
	
	var oSplitApp = this.getView().getParent().getParent();
	
	//oSplitApp.bindElemnet()
	var oEventBus = sap.ui.getCore().getEventBus();
	oEventBus.publish("buschannel","eventId",{CustomerId:selectedId});
	//idSplitApp1--idSplitApp-Detail
	oSplitApp.toDetail("idSplitApp1--idDetailpage");
		
		
	},
	onChange : function(oControlEvent)
	{
		debugger;
		//var query = oControlEvent.getParameters().query;
	var query=	oControlEvent.getParameters().newValue;
		//alert("hi");
		//var query = oControlEvent.getParameters().newValue;
		//var query = oControlEvent.getParameters("newValue");
		// do the filter operation
		var filters = [];
		
		var filter1 = new sap.ui.model.Filter("ProductID",sap.ui.model.FilterOperator.EQ,query);
		
		var oList = this.getView().byId("idList");
		
		oList.getBinding("items").filter(filter1);
		
		
		
		
	}

});