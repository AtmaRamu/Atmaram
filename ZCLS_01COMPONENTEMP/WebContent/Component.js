sap.ui.core.UIComponent.extend("smax.empReg.Component",{
	
	createContent: function(){
		
		/*metadata:{
			rootView: "view.Page"
		}*/
		
		//var obtn = new sap.m.Button({text:"Register"});
		var app = new sap.m.App();
		var page = sap.ui.view({
			id:"any",
			viewName:"view.Page",
			type:"XML"
			
		});
		app.addPage(page);
		return app;
	}
	
	
	
})