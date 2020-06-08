jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 headerSet in the list
// * All 3 headerSet have at least one toItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"agilux/zsimpletest/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"agilux/zsimpletest/test/integration/pages/App",
	"agilux/zsimpletest/test/integration/pages/Browser",
	"agilux/zsimpletest/test/integration/pages/Master",
	"agilux/zsimpletest/test/integration/pages/Detail",
	"agilux/zsimpletest/test/integration/pages/Create",
	"agilux/zsimpletest/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "agilux.zsimpletest.view."
	});

	sap.ui.require([
		"agilux/zsimpletest/test/integration/MasterJourney",
		"agilux/zsimpletest/test/integration/NavigationJourney",
		"agilux/zsimpletest/test/integration/NotFoundJourney",
		"agilux/zsimpletest/test/integration/BusyJourney",
		"agilux/zsimpletest/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});