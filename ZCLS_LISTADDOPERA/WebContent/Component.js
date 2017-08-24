sap.ui.core.UIComponent.extend("smax.route.Component",{
	metadata:{
		manifest:"json"
	},
	 init:function(){
		 //initialize the router
		 
		 sap.ui.core.UIComponent.prototype.init.apply(this);
		 
		 //var  oRouter
		 this.getRouter().initialize();
		 
	 }
	
	
})

