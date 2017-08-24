sap.ui.core.UIComponent.extend("smax.empReg.Component",{
	
	metadata : {manifest:"json"},
	
	init : function (){
		//intialize the router
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
});


