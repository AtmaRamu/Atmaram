sap.ui.jsview("view.masterpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.masterpage
	*/ 
	getControllerName : function() {
		return "view.masterpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.masterpage
	*/ 
	createContent : function(oController) {
		
		   var list = new sap.m.List("lists", 
				   {
               items : {
                     path : "/Product",
                     template : new sap.m.ObjectListItem("abc", {

                           title : "{ProductName}",
                           number : "{Price}",
                           intro : "{Plant}",
                          
                           type : "Active",

                           attributes : [ {
                                 text : "{ProductID}"
                           }, {
                                 text : "{value}"
                           } ],

                           firstStatus : {

                                 text : "{Status}"
                           },

                           press : function(oEvent) {
                                 oController.itempressed();
                           }})
}
        
});
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [
list
			]
		});
	}

});