sap.ui.controller("zcls_01_complex_binding.First", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcls_01_complex_binding.First
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		
		oModel.setData({
			"staff":[
			         {
			        	 "city" : ""
			         },
			         {
		                    "city" : "berlin",
		                    "genders" : [
		                        { 
		                            "gender" : "male", 
		                            "people" : [
		                                {"firstName": "Lasse", "lastName": "Larsson"},  
		                                {"firstName": "Gerrit", "lastName": "Gartner"}
		                            ]
		                        },
		                        { 
		                            "gender" : "female", 
		                            "people" : [
		                                {"firstName": "Paris", "lastName": "Hilton"},  
		                                {"firstName": "Kate", "lastName": "Upton"}
		                            ]
		                        },
		                    ]
		                },
		                {
		                    "city" : "paris",
		                    "genders" : [
		                        { 
		                            "gender" : "male", 
		                            "people" : [
		                                {"firstName": "Lasse", "lastName": "Larsson"},  
		                                {"firstName": "Gerrit", "lastName": "Gartner"}
		                            ]
		                        },
		                        { 
		                            "gender" : "female", 
		                            "people" : [
		                                {"firstName": "Lasse", "lastName": "Larsson"},  
		                                {"firstName": "Gerrit", "lastName": "Gartner"}
		                            ]
		                        },
		                    ]
		                },
		                {
		                    "city" : "oslo",
		                    "genders" : [
		                        { 
		                            "gender" : "male", 
		                            "people" : [
		                                {"firstName": "Lasse", "lastName": "Larsson"},  
		                                {"firstName": "Gerrit", "lastName": "Gartner"}
		                            ]
		                        },
		                        { 
		                            "gender" : "female", 
		                            "people" : [
		                                {"firstName": "Lasse", "lastName": "Larsson"},  
		                                {"firstName": "Gerrit", "lastName": "Gartner"}
		                            ]
		                        },
		                    ]
		                },
		                ]
        });
			         
			         
		this.getView().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcls_01_complex_binding.First
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcls_01_complex_binding.First
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcls_01_complex_binding.First
*/
//	onExit: function() {
//
//	}
	handleStaffSelect:function(oEvent){
		var oGender = this.getView().byId("selGender");
		 var oTemplate = new sap.ui.core.ListItem({  text : "{gender}"});
		 oGender.bindItems(oEvent.getParameter("selectedItem").getBindingContext().getPath() + "/genders",oTemplate)
	},
	 handleGenderSelect : function(oEvent) {
	        var oGender = this.byId("selPerson");
	        var oTemplate = new sap.ui.core.ListItem({ text : "{lastName}"})
	        oGender.bindItems(oEvent.getParameter("selectedItem").getBindingContext().getPath() + "/people", oTemplate);
	    }

});