sap.ui.jsview("routingdemo.FirstPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf routingdemo.FirstPage
	*/ 
	getControllerName : function() {
		return "routingdemo.FirstPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf routingdemo.FirstPage
	*/ 
	createContent : function(oController) {
		
		var flexbox=new sap.m.FlexBox({direction:"Column"});
		  flexbox.addItem( new sap.m.Input("name",{ value : "{/myName}"}));
		  flexbox.addItem( new sap.m.Input("password",{ value : "{/myPass}"}));
		  flexbox.addItem( new sap.m.Button('login',{text:"Log In",
		   press:function()
		   {
		   oController.navigate();
		      }
		    })
		  );
		  flexbox.setAlignItems("Center");
		  flexbox.setJustifyContent("Center");
		                  
		  var page1 =new sap.m.Page({
		       title: "Routing Demo",
		       content:flexbox,
		       });
		            
		  return page1;
 		
	}

});