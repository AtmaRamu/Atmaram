sap.ui.jsview("zcls_01_vizcharts.Second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcls_01_vizcharts.Second
	*/ 
	getControllerName : function() {
		return "zcls_01_vizcharts.Second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcls_01_vizcharts.Second
	*/ 
	createContent : function(oController) {
		
		 var oModel = new sap.ui.model.json.JSONModel({
			  businessData : [
			  {Country :"Canada",revenue:410.87,profit:-141.25, population:34789000},
			  {Country :"China",revenue:338.29,profit:133.82, population:1339724852},
			  {Country :"France",revenue:487.66,profit:348.76, population:65350000},
			  {Country :"Germany",revenue:470.23,profit:217.29, population:81799600},
			  {Country :"India",revenue:170.93,profit:117.00, population:1210193422},
			  {Country :"United States",revenue:905.08,profit:609.16, population:313490000}
			  ]
			  });
		 var oDataset = new sap.viz.ui5.data.FlattenedDataset("flat_data",{
			  dimensions : [
			  {
			  axis : 1, // must be one for the x-axis, 2 for y-axis
			  name : 'Country',
			  value : "{Country}"
			  }
			  ],
			  measures : [
			     // measure 1
			  {
			  name : 'Profit', // 'name' is used as label in the Legend
			  value : '{profit}' // 'value' defines the binding for the displayed value  
			  },
			  {
			  name : 'Revenue',
			  value : '{revenue}'
			  }
			  ],
			  data : {
			  path : "/businessData"
			  }
			 
			  });
		 var oBarChart = new sap.viz.ui5.Bar("bar",{
			  width : "80%",
			  height : "400px",
			  title : {
			  visible : true,
			  text : 'Profit and Revenue By Country'
			  },
			  dataset : oDataset
			  });
		 
		 oBarChart.setModel(oModel);
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [
			          
oBarChart
			
			]
		});
	}

});