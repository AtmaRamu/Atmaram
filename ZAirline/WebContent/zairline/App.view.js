sap.ui.jsview("zairline.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zairline.App
	*/ 
	getControllerName : function() {
		return "zairline.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zairline.App
	*/ 
	createContent : function(oController) {
		
		 //alert("app started");
		  // to avoid scroll bars on desktop the root view must be set to block display
		  this.setDisplayBlock(true);
		  // create app
		  //this.app = new sap.m.App();
		  this.app = new sap.m.SplitApp().setMode(sap.m.SplitAppMode.HideMode);
		  // load the master page
		  var master = sap.ui.xmlview("Master", "sap.ui.demo.myFiori.view.Master");
		  master.getController().nav = this.getController();
		  this.app.addPage(master, true); // true means this is the master page
		  // load the detail page
		  var detail = sap.ui.xmlview("Detail", "sap.ui.demo.myFiori.view.Detail");
		  detail.getController().nav = this.getController();
		  this.app.addPage(detail, false);
		  // done
		  return this.app;
		  
 		
	}

});