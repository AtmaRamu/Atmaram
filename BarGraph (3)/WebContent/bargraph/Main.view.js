sap.ui.jsview("bargraph.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bargraph.Main
	*/ 
	getControllerName : function() {
		return "bargraph.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bargraph.Main
	*/ 
	createContent : function(oController) {
		
		var oColumnChart = new sap.viz.ui5.controls.VizFrame();
              // JSON Model Creation
		var oModel = new sap.ui.model.json.JSONModel
		({
			data :  [{month:'Sep', Accenture : "10", Deloitte : "20", Tcs :"70"},
			         {month:'Oct', Accenture : "10", Deloitte : "20", Tcs :"30"},
			         {month:'Nov', Accenture : "30", Deloitte : "20", Tcs :"30"},
			         {month:'Dec', Accenture : "15", Deloitte : "25", Tcs :"60"}
			     ]});
		
		var datasetforColumnChart = new sap.viz.ui5.data.FlattenedDataset
		({
			dimensions : [ { axis  : 1, 
				            name  : 'Month', 
				            value : "{month}"} ],
			measures   : [ {name : "Accenture",   value : '{Accenture}'},
			               {name : "Deloitte",  value : '{Deloitte}'},
			               {name : "Tcs", value : '{Tcs}'} ],
		    data       : {path:"/data"}
			              
		});
		
		oColumnChart.setDataset(datasetforColumnChart);
		oColumnChart.setModel(oModel);	
		oColumnChart.setVizType('stacked_column');
		
		var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
	      'uid': "valueAxis",
	      'type': "Measure",
	      'values': ["Accenture","Deloitte","Tcs"]
		}), 
	    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
	      'uid': "categoryAxis",
	      'type': "Dimension",
	      'values': ["Month"]
	    }); 
		
		oColumnChart.addFeed(feedValueAxis);
		oColumnChart.addFeed(feedCategoryAxis);
	
	
		
		
		var oLayoutforCharts = new sap.ui.layout.HorizontalLayout
		({
			id          : "matrix",
			layoutFixed : true,
			columns     : 2,
			width       : "100%",
			widths      : [ "50%", "50%" ]
		});
		
		var oPieChart = new  sap.viz.ui5.controls.VizFrame();
		var pieModel = new sap.ui.model.json.JSONModel
		({
			data :  [{name : "Accenture" ,value : "65"},
				{name : "Deloitte", value : "85"}, 
				{name : "Tcs",value :"190"}
			         
			     ]});
		
		
		var datasetforPieChart = new sap.viz.ui5.data.FlattenedDataset
		({
			dimensions : [ { name : 'name',
		//		axis : 1,
				value : "{name}"} ],	
			
			measures   : [ {name : "value",  value : '{value}'},
			           //    {name : "Deloitte", value : '{Deloitte}'},
			           //    {name : "Tcs",value : '{Tcs}'},
			               ],
			              
			 data :{path:"/data"}
			              
		});
		
		oPieChart.setDataset(datasetforPieChart);
		oPieChart.setModel(pieModel);	
		oPieChart.setVizType('pie');
		
		var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "size",
		      'type': "Measure",
		      'values': ["value"]
		    }), 
		    feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "color",
		      'type': "Dimension",
		      'values': ["name"]
		    });
		oPieChart.addFeed(feedSize);
		oPieChart.addFeed(feedColor);
		
		
		
		
	
		
		
		
		
		
		var startDate = new sap.m.Label({text:"Start Date"}).addStyleClass("startDate");
		var datePicker = new sap.m.DatePicker("datePick", {width : "140px"});
		
		var StartDateLayout = new sap.ui.layout.HorizontalLayout
		({
			id          : "matrix3",
			columns     : 2,
			width       : "100%",
			widths      : [ "10%", "25%", ]
		});
		

		
			
		
		return new sap.m.Page({
			title: "Project Approval",  
		
			content: [
                      StartDateLayout.addContent(startDate),
                      StartDateLayout.addContent(datePicker ),
			          oLayoutforCharts.addContent(oColumnChart),
                      oLayoutforCharts.addContent(oPieChart),
			          //oMonthLayout.createRow({height: "50px", width:"2000px"}, month, month1 ),
			          //TotalLossLayout.createRow({height: "100px", width:"2000px"}, totLoss, totLossValue, projStart ),
			          //EstCostLayout.createRow({height: "55px", width:"2000px"}, estCostText, estCost, expSavingText, expSaving),
			          
  
			],
			
			footer : new sap.m.Bar
			({
				active:true,
				contentRight : [new sap.m.Button
				                ({text : "Add Comment", 
				                  type : "Emphasized", 
                                  press : oController.addCommentMessage,
				                  icon : "sap-icon://add",
				                 }),
				                  new sap.m.Button
				                  ({text : "Approved", 
                                    press : oController.approveMessage,
				                	type : "Emphasized"}),
			  			]})
		});
		}
	});