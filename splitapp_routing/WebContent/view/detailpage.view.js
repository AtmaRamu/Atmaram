sap.ui.jsview("view.detailpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.detailpage
	*/ 
	getControllerName : function() {
		return "view.detailpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.detailpage
	*/ 
	createContent : function(oController) {
		
		 var list = new sap.m.List({
			 //itemPress:"onItemPress()",
             items : {
                   path : "/Product",
                   template : new sap.m.ObjectListItem({

                         title : "{Product Name}",
                         number : "{Price}",
                         intro : "{Plant}",
                         icon : "{image}",
                         type : "Active",

                         attributes : [ {
                               text : "{Product ID}"
                         }, {
                               text : "{value}"
                         } ],

                         firstStatus : {

                               text : "{Status}"
                         },
                         press: function(){
                        	 //alert(this.getOwnerComponent());
                        	 
                         }
           

                         
                   })
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