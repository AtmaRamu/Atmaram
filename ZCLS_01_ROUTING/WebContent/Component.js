sap.ui.core.UIComponent.extend("smax.route.Component",{
	metadata:{
		manifest:"json"
	},
	/* metadata:{
		 rootView : "view.App",
		 routing:{
			 config:{
				 routerClass:"sap.m.routing.Router",
				 viewType:"XML",
				 controlId:"idApp",
				 controlAggregation:"pages" 
			 },
			 routes:[
			         {
			        	 pattern:"pageone",
			        	 name:"route1",
			        	 viewName:"view.Page1",
			        		 target:"PAGE1"
			        	 
			        	 
			         },
			         {
			        	 pattern:"pagetwo",
			        	 name:"route2",
			        	 viewName:"view.Page2",
			        	 target:"PAGE2"
			        	 
			        	 
			         },
			         {
			        	 
			        	 pattern:"pagethree",
			        	 name:"route3",
			        	 viewName:"view.Page3",
			        	 target:"PAGE3"
			         }
			         
			         
			         
			         ],
			         
			 targets:
			          {
				 PAGE1:{
                    	viewName:"view.Page1"
                    },
                    PAGE2:{
                    	viewName:"view.Page2"
                    },
                    PAGE3:{
                    	viewName:"view.Page3"
                    
			          }
                    
			           }
		 
		 }
	 },
	 */
		

	 init:function(){
		 //initialize the router
		 
		 sap.ui.core.UIComponent.prototype.init.apply(this);
		 
		 //var  oRouter
		 this.getRouter().initialize();
		 
	 }
	
	
});

