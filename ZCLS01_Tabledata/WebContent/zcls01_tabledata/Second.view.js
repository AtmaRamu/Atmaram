sap.ui.jsview("zcls01_tabledata.Second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcls01_tabledata.Second
	*/ 
	getControllerName : function() {
		return "zcls01_tabledata.Second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcls01_tabledata.Second
	*/ 
	createContent : function(oController) {
		
		
	
 		return new sap.m.Page({
 			
 			
 			
			title: "Title",
			content: [
			
			]
		});
	}

});