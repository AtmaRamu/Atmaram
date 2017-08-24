
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls01_loan_project.First
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls01_loan_project.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls01_loan_project.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls01_loan_project.First
*/
//	onExit: function() {
//
//	}
	
	onPress: function(){
		//alert("hi");
		debugger;
		var oInput = parseInt(this.getView().byId("id2").getValue());
		var ip1 = Math.floor((oInput+15000)/3);
		var result = ip1.toFixed(2);
		var text1 = this.getView().byId("id1");		
		text1.setText(result);
		
	},
onPress6: function(){
	debugger;
	var oInput = parseInt(this.getView().byId("id2").getValue());
	var ip1 = Math.floor((oInput+15000)/6);
	var result = ip1.toFixed(2);
	var text1 = this.getView().byId("id1");		
	text1.setText(result);
	
	
},
onPress10:function(){
	var oInput = parseInt(this.getView().byId("id2").getValue());
	var ip1 = Math.floor((oInput+15000)/10);
	var result = ip1.toFixed(2);
	var text1 = this.getView().byId("id1");		
	text1.setText(result);
	
	
}


	
	

});