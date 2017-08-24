sap.ui.jsview("zcls01_tabledata.First", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zcls01_tabledata.First
	*/ 
	getControllerName : function() {
		return "zcls01_tabledata.First";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zcls01_tabledata.First
	*/ 
	createContent : function(oController) {
		
		var oTable = new sap.ui.table.Table("id1",{
			selectionMode : sap.ui.table.SelectionMode.Single,
			selectionBehavior: sap.ui.table.SelectionBehavior.Row
		});
		
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.m.Label({text: "Last Name"}),
		    template: new sap.m.Text({text:"{lastName}"})
		  }));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.m.Label({text: "First Name"}),
		    template: new sap.m.Text({text:"{name}"})
		  }));
		oTable.addColumn(new sap.ui.table.Column({
		    label: new sap.m.Label({text: "First Name"}),
		    template: new sap.m.CheckBox({checked: '{stillNaughty}'})
		  }));
		/* oTable.setModel(oModel);
		  oTable.bindRows("/");
		*/
 		return new sap.m.Page({
			title: "Title",
			content: [
			          
oTable
			
			]
		});
	}

});