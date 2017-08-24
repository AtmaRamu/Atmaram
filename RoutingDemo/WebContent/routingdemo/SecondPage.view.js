sap.ui.jsview("routingdemo.SecondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf routingdemo.SecondPage
	*/ 
	getControllerName : function() {
		return "routingdemo.SecondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf routingdemo.SecondPage
	*/ 
	createContent : function(oController) {
		var flexbox=new sap.m.FlexBox({direction:"Column"});
		  flexbox.addItem( new sap.m.Text({text : "{/myName}"}));
		  flexbox.addItem( new sap.m.Text({text : "{/myPass}"}));
		  flexbox.setAlignItems("Center");
		        flexbox.setJustifyContent("Center");
		                  
		        var page2 =new sap.m.Page({
		                       
		                            content:flexbox,
		                            showNavButton: true,
		                            navButtonPress: function(){ oController.handleNavBack(); },
		                       
		        });
		            
		        return page2;
	}

});