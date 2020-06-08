jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"agilux/zsimpletest/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"agilux/zsimpletest/test/integration/pages/App",
	"agilux/zsimpletest/test/integration/pages/Browser",
	"agilux/zsimpletest/test/integration/pages/Master",
	"agilux/zsimpletest/test/integration/pages/Detail",
	"agilux/zsimpletest/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "agilux.zsimpletest.view."
	});

	sap.ui.require([
		"agilux/zsimpletest/test/integration/NavigationJourneyPhone",
		"agilux/zsimpletest/test/integration/NotFoundJourneyPhone",
		"agilux/zsimpletest/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});