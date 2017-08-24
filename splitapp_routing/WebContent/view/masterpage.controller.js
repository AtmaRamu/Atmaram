sap.ui.controller("view.masterpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.masterpage
*/
	onInit: function() {
		var data = {
			    "Product": [
			                {   
			                   "image": "image1",
			                    "Product ID": "123",
			                    "Price": "321",
			                    "Product Name": "Bag",
			                    "value":"10",
			                    "Plant":"bags limited",
			                    "Status":"available"
			                },
			                { 
			                    "image": "image2",
			                    "Product ID": "124",
			                    "Price": "322",
			                    "Product Name":"watch",
			                    "value":"7",
			                    "Plant":"watch limited",
			                    "Status":"unavailable"
			                },
			                {
			                    "image": "image3",
			                    "Product ID": "125",
			                    "Price": "323",
			                    "Product Name": "Pen",
			                    "value":"50",
			                    "Plant":"pen limited",
			                    "Status":"available"
			                },
			                {
			                    "image": "image4",
			                   "Product ID": "126",
			                    "Price": "324",
			                    "Product Name": "Laptop",
			                    "value":"15",
			                    "Plant":"laptop limited",
			                    "Status":"available"
			                },
			            { 
			                     "image": "image5",
			                    "Product ID": "127",
			                    "Price": "325",
			                    "Product Name": "pencil",
			                    "value":"10",
			                    "Plant":"pencil limited",
			                    "Status":"unavailable"
			                },
			           
			            { 
			                     "image": "image6",
			                    "Product ID": "128",
			                    "Price": "326",
			                    "Product Name": "bulb",
			                    "value":"10",
			                    "Plant":"bulb limited",
			                    "Status":"available"
			                }
			           
			           
			           
			            ]
			           
			           
			        };
		
		  var model1 = new sap.ui.model.json.JSONModel();
          model1.loadData("model/detail.json");
		  //model1.setData(data);
         //sap.ui.getCore().setModel(model1);
         this.getView().setModel(model1);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.masterpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.masterpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.masterpage
*/
//	onExit: function() {
//
//	}
	
	itempressed: function(oEvent) { 
        debugger;
          // Get instance of router
          router = sap.ui.core.routing.Router.getRouter("appRouter");       
          router.navTo("detailpage"); 
       } 

});