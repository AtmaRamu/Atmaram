sap.ui.jsview("zcls_project_notifications.First", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcls_project_notifications.First
	*/ 
	getControllerName : function() {
		return "zcls_project_notifications.First";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcls_project_notifications.First
	*/ 
	createContent : function(oController) {
		
		var oNotifi = new sap.m.NotificationListBase({
			title:"Listbase Notifications",
			authorName:"Atma ramu"
			
		});
		
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [
oNotifi
			
			]
		});
	}

});