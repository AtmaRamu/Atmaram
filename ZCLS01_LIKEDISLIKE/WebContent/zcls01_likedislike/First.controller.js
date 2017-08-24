sap.ui.controller("zcls01_likedislike.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls01_likedislike.First
*/
onInit: function() {
	debugger;
	this.getView().byId("Btn").attachPress(onLike);
	var that = this;
	
	function onLike(){
		
	var oIn =	that.getView().byId("id1").getValue();
	var oCount = parseInt(oIn);
	count = oCount+1;
	
	that.getView().byId("id1").setValue(count);
	
	that.getView().byId("Btn").setText("Dislike");
	that.getView().byId("Btn").detachPress(onLike);
	that.getView().byId("Btn").attachPress(onDisLike);
	
	
	
	
		
		
		
		
	}
	function onDisLike(){
		var oIn =	that.getView().byId("id2").getValue();
		var oCount = parseInt(oIn);
		count = oCount+1;
		
		that.getView().byId("id2").setValue(count);
		
		that.getView().byId("Btn").setText("like");
		that.getView().byId("Btn").detachPress(onDisLike);
		that.getView().byId("Btn").attachPress(onLike);
		
		
	}

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls01_likedislike.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls01_likedislike.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls01_likedislike.First
*/
//	onExit: function() {
//
//	}
	
	/*onPress: function(){
		//debugger;
		var oIp1 = this.getView().byId("id1").getValue();
		var a = parseInt(oIp1) + "<br>";
		a+=1;
		alert(a);
		//oIp1.setValue(a);
		//alert(a);
		
		
		
		
	}*/

});