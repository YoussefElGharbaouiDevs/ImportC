init("divImportc", 0, 0);
moveVp("divImportc", 0, -0.1);
init("divImportctext", 10, 0);
moveVp("divImportctext", 0, -0.15);
init("divBrands", 125, 0);
moveVp("divBrands", 0, -0.75);

//Chev logo that appears at the end
init("imgChevlogo", -195, 0);
moveVp("imgChevlogo", 0, 1);

//OnView animations of Chevrolet section
onView("divChevtitle", "divChevname", "moveDivChevname");
onView("silveradoTrigger", "silveradoTarget", "showChevCards");
onView("suburbanTrigger", "suburbanTarget", "showChevCards");
onView("boltTrigger", "boltTarget", "showChevCards");
onView("camaroTrigger", "camaroTarget", "showChevCards");

//OnView animations of Ford section
onView("divFordHeader", "divFordTitle", "showFordTitle");
onView("divFordHeader", "divFordLogo", "showFordTitle");
onView("fordCardsTrigger", "fordCardsTarget1", "showFordCards");
onView("fordCardsTrigger", "fordCardsTarget2", "showFordCards");
onView("fordCardsTrigger", "fordCardsTarget3", "showFordCards");
onView("fordCardsTrigger", "fordCardsTarget4", "showFordCards");

//OnView animations of Benz section
onView("benzBGTrigger", "benzBGTarget", "moveBenzBG");
onView("benzBGTrigger", "benzNameHorizonTarget", "hideBenzLogo");
onView("benzTrigger", "benzTarget1", "showBenzCards");
onView("benzTrigger", "benzTarget2", "showBenzCards");
onView("benzTrigger", "benzTarget3", "showBenzCards");
onView("benzTrigger", "benzTarget4", "showBenzCards");

//OnView animations of Rolls Royce section
onView("divRRTrigger", "divRRStringVertTarget1", "showRRStringVert");
onView("divRRTrigger", "divRRStringVertTarget2", "showRRStringVert");
onView("divRRTrigger", "divRRStringHorizTarget1", "showRRStringHoriz");
onView("divRRTrigger", "divRRStringHorizTarget2", "showRRStringHoriz");
onView("divRRTrigger", "divRRTitleTarget", "showRRTitle");

onView("divRRTrigger", "divRRCardTarget1", "showRRCards");
onView("divRRTrigger", "divRRCardTarget2", "showRRCards");

//Scrapped section
// //strings motion
// init("divRRstring1", 800, 0);
// moveVp("divRRstring1", 0, -2);
// //problem with this or whatever
