jQuery.sap.declare("sap.ui.demo.myFiori.Component");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {
  createContent : function() {
//alert("component");
  // create root view
  var oView = sap.ui.view({
  id : "app",
  viewName : "sap.ui.demo.myFiori.view.App",
  type : "JS",
  viewData : { component : this }
  });
  // set device model
  var deviceModel = new sap.ui.model.json.JSONModel({
  isPhone : sap.ui.Device.system.phone,
  isNoPhone : !sap.ui.Device.system.phone,
  listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
  listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
  });
  deviceModel.setDefaultBindingMode("OneWay");
  oView.setModel(deviceModel, "device");
  //debugger
//alert("oView created");
  var langModel = new sap.ui.model.resource.ResourceModel({
  bundleUrl : "i18n/messageBundle.properties"
  });
  oView.setModel(langModel,"i18n");
  // Set the model
// var url = "proxy/http/zmetdc00.wdf.sap.corp:55080/sap/opu/odata/IWBEP/GWDEMO/";
// var oModel = new sap.ui.model.odata.ODataModel(url, true);
// oView.setModel(oModel);
  oModel = new sap.ui.model.json.JSONModel("model/mock.json");
  oView.setModel(oModel);
  //alert("oView returned");
  return oView;
  }
});



