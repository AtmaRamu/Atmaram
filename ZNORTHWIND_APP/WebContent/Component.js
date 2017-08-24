sap.ui.core.UIComponent.extend("com.sap.northwind.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		
//		var url = "proxy/http/services.odata.org/Northwind/Northwind.svc/"
//		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
//		this.setModel(oModel);
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
});