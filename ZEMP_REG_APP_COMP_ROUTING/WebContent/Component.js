//defining a component

sap.ui.core.UIComponent.extend("com.smax.empreg.routing.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
})