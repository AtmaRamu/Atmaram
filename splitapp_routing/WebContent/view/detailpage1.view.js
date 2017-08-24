sap.ui.jsview("view.detailpage1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.detailpage1
	*/ 
	getControllerName : function() {
		return "view.detailpage1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.detailpage1
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "2nd detailpage",
			
			showNavButton: true,
			navButtonPress:function(){
                var oRouter = sap.ui.core.routing.Router.getRouter("appRouter"); 
                window.history.go(-1);
          },
			content: [
			
			]
		});
	}

});