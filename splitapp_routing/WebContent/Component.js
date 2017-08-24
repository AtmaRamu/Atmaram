//jQuery.sap.declare("com.Spiltapp_routing.Component");
sap.ui.core.UIComponent.extend("com.Spiltapp_routing.Component",{
    metadata : {
        rootView : "view.App1",
        routing : {
        
            config : {
            	routerClass:"sap.m.routing.Router",
                viewType:"JS", 
                controlId : "idSplitApp",
              // controlId :"SplitApp",
                //controlAggregation:"detailPages",  
               // clearTarget : false  
            },
           routes : [

                      {
		                pattern : "",
		                name : "masterpage",  		                
		               // viewType:"JS",
		                target: ["masterPage","detailPage"]
		                	
		               },
		               {
			                pattern : "detail",
			                name : "detail1Route",  		                
			               // viewType:"JS",
			                target: ["detailPage1"]
			                	
			               }

                      ],
           targets : {
        	   			"masterPage" : {
        	   				viewName:"view.masterpage",
        	   				controlAggregation : "masterPages"
        	   				
        	   			},
        	   			"detailPage":{
        	   				viewName:"view.detailpage",
        	   				controlAggregation : "detailPages"
        	   				
        	   			},
        	   			"detailPage1":{
        	   				viewName:"view.detailpage1",
        	   				controlAggregation : "detailPages"
        	   				
        	   			}
           }

                      
        
        }},
                      
        
    

init:function(){
   // debugger;
    //router and hashchanger libraries
    /*jQuery.sap.require("sap.ui.core.routing.History");
    jQuery.sap.require("sap.m.routing.RouteMatchedHandler"); */
    
    //call create content
	
    sap.ui.core.UIComponent.prototype.init.apply(this);
    //debugger;
   // router.register("appRouter");
     this.getRouter().initialize();
    /*this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
    router.register("appRouter");  // Assign a name to Router, so that we can access it in all controllers by using this name  
    router.initialize(); // Initialise the Router  
*/
},

}
        );

/*com.Spiltapp_routing.Component.prototype.createContent = function(){
    debugger;
    var oview = sap.ui.view({id:"app",viewName:"com.Spiltapp_routing.view.App",type:sap.ui.core.mvc.ViewType.JS,viewData:{ component:this }});
    var oModel = new sap.ui.model.json.JSONModel("model/detail.json");
    oview.setModel(oModel);
    return oview;
}; */