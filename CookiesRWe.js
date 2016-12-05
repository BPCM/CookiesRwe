"use strict";
waitForGame(250);
var CRW = {};
//todo basePrice is not actual cost!
//todo show which seasonal items are missing
//todo easter & halloween cookie find/refresh
//todo if frenzy switch season!!!!!
//todo disable auto-buy
//todo add 'Cookies Required'
CRW.Init = function () {
    CRW.loops = [];

    /*PREFERENCES*/
    CRW.prefs = [];
    CRW.prefs.normalIntervalSpeed = 1000;
    CRW.prefs.fastIntervalSpeed = 10;
    CRW.prefs.debug = false;
    CRW.prefs.autoBuyElderPledge = true;
    CRW.prefs.refreshOnClot = false; //todo implement
    CRW.prefs.refreshOnRust = false; //todo implement
    CRW.prefs.disableClickSound = true; //todo implement
    CRW.prefs.autoClickerEnabled = true;
    function setDefaultGlobals() {
        CRW.globals = [];
        CRW.globals.updateUpgradeAvailable = false;
        CRW.globals.haveAllEaster = false;
        CRW.globals.haveAllChristmas = false;
        CRW.globals.haveAllHalloween = false;
        CRW.globals.haveAllValentines = false;
    }

    setDefaultGlobals();
    addKeyboardListeners();

    setInterval(function () {
        /*        if (Game.Upgrades["Bunny biscuit"].unlocked) {
         if (!CRW.globals.haveAllEaster) {

         }
         }*/
        for (var g = 0; g < Game.shimmers.length; g++) {
            if (Game.shimmers[g].type == "golden" || Game.shimmers[g].type == "reindeer") {
                Game.shimmers[g].pop();
            }
        }
        /* if (Game.hasBuff('Clot') > 0) {
         Game.WriteSave();
         location.reload();
         }*/
    }, 1000);

    if (CRW.prefs.disableClickSound) Game.playCookieClickSound = function () { //Removes clicking sound from game, sorry dude
    };
    CRW.loops.clickBigCookie = setInterval(Game.ClickCookie, 16);
    CRW.loops.upgradeInterval = setInterval(CRW.upgradeBuildings, CRW.prefs.normalIntervalSpeed);
    CRW.NotifyMissingSeasonalUpgrades();
};
CRW.UnlockSeasonalUpgrades = function () {
    if (!CRW.globals.haveAllChristmas) {

    }
};
CRW.NotifyMissingSeasonalUpgrades = function () {
    if (Game.Upgrades["Bunny biscuit"].unlocked) {
        if (!CRW.haveAllEasterEggs()) {
            Game.Popup("You are missing Easter eggs!");
        }
        if (!CRW.haveAllHalloweenCookies()) {
            Game.Popup("You are missing Halloween cookies");
        }
        if (!CRW.haveAllValentineCookies()) {
            Game.Popup("You are missing Valentine's day cookies");
        }
        if (!CRW.globals.haveAllChristmasUpgrades()) {
            Game.Popup("You are missing Christmas upgrades");
        }
    }
};

CRW.haveAllValentineCookies = function () {
    var caughtThemAll = true;
    if (Game.Upgrades["Pure heart biscuits"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ardent heart biscuits"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Sour heart biscuits"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Weeping heart biscuits"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Golden heart biscuits"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Eternal heart biscuits"].bought == 0)        caughtThemAll = false;
    CRW.globals.haveAllValentines = caughtThemAll;
    return caughtThemAll;
};

CRW.haveAllChristmasUpgrades = function () {
    var caughtThemAll = true;
    if (Game.Upgrades['A festive hat'].bought == 0) caughtThemAll = false;
    else if (Game.Upgrades["A lump of coal"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["An itchy sweater"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Reindeer baking grounds"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Weighted sleighs"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ho ho ho-flavored frosting"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Season savings"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Toy workshop"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Naughty list"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Santa\'s bottomless bag"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Santa\'s helpers"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Santa\'s legacy"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Santa\'s milk and cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Santa\'s dominion"].bought == 0)        caughtThemAll = false;
    CRW.globals.haveAllChristmas = caughtThemAll;
    return caughtThemAll;
};


CRW.haveAllEasterEggs = function () {
    var caughtThemAll = true;
    if (Game.Upgrades["Omelette"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Chicken egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Duck egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Turkey egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Quail egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Robin egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ostrich egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Cassowary egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Salmon roe"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Frogspawn"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Shark egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Turtle egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ant larva"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Golden goose egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Faberge egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Wrinklerspawn"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Cookie egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Omelette"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Chocolate egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Century egg"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["\"egg\""].bought == 0)        caughtThemAll = false;
    CRW.globals.haveAllEaster = caughtThemAll;
    return caughtThemAll;
};

CRW.haveAllHalloweenCookies = function () {
    var caughtThemAll = true;
    if (Game.Upgrades["Skull cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ghost cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Bat cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Slime cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Pumpkin cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Eyeball cookies"].bought == 0)        caughtThemAll = false;
    else if (Game.Upgrades["Spider cookies"].bought == 0)        caughtThemAll = false;
    CRW.globals.haveAllHalloween = caughtThemAll;
    return caughtThemAll
};

CRW.upgradeBuildings = function () {
    if (CRW.prefs.debug) console.log("CRW.upgradeBuildings: " + new Date());
    clearInterval(CRW.loops.upgradeInterval);
    CRW.loops.upgradeInterval = setInterval(CRW.upgradeBuildings, CRW.prefs.normalIntervalSpeed);
    CRW.upgradeAllAvailableUpgrades();
    CRW.upgradeAllAvailableObjects();
};

CRW.upgradeAllAvailableUpgrades = function () {
    CRW.globals.updateUpgradeAvailable = false;
    for (var i in CM.Cache.Upgrades) {
        var color = CM.Cache.Upgrades[i].color;
        if (color == CM.Disp.colorGray && i != "Golden switch [off]") {
            if (i == 'A festive hat')CRW.upgradeUpgrade(i, color);
            else if (i == 'A crumbly egg')CRW.upgradeUpgrade(i, color);
            else if (CRW.prefs.autoBuyElderPledge && i == "Elder Pledge")CRW.upgradeUpgrade(i, color);


            else if (i == "Omelette") CRW.upgradeUpgrade(i, color);
            else if (i == "Chicken egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Duck egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Turkey egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Quail egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Robin egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Ostrich egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Cassowary egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Salmon roe") CRW.upgradeUpgrade(i, color);
            else if (i == "Frogspawn") CRW.upgradeUpgrade(i, color);
            else if (i == "Shark egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Turtle egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Ant larva") CRW.upgradeUpgrade(i, color);

            else if (i == "Golden goose egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Faberge egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Wrinklerspawn") CRW.upgradeUpgrade(i, color);
            else if (i == "Cookie egg") CRW.upgradeUpgrade(i, color);
            else if (i == "Omelette") CRW.upgradeUpgrade(i, color);
            //else if (i == "Chocolate egg") CRW.upgradeUpgrade(i, color); I think you are supposed to save this egg for when you ascend
            else if (i == "Century egg") CRW.upgradeUpgrade(i, color);
            else if (i == "\"egg\"") CRW.upgradeUpgrade(i, color);

            else if (i == "Reinforced index finger") CRW.upgradeUpgrade(i, color);
            else if (i == "Carpal tunnel prevention cream") CRW.upgradeUpgrade(i, color);
            else if (i == "Ambidextrous") CRW.upgradeUpgrade(i, color);
            else if (i == "Thousand fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Million fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Billion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Trillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Quadrillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Quintillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Sextillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Septillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Octillion fingers") CRW.upgradeUpgrade(i, color);
            else if (i == "Increased merriness") CRW.upgradeUpgrade(i, color);
            else if (i == "Improved jolliness") CRW.upgradeUpgrade(i, color);

            else if (i == "A lump of coal") CRW.upgradeUpgrade(i, color);
            else if (i == "An itchy sweater") CRW.upgradeUpgrade(i, color);
            else if (i == "Reindeer baking grounds") CRW.upgradeUpgrade(i, color);
            else if (i == "Weighted sleighs") CRW.upgradeUpgrade(i, color);
            else if (i == "Ho ho ho-flavored frosting") CRW.upgradeUpgrade(i, color);
            else if (i == "Season savings") CRW.upgradeUpgrade(i, color);
            else if (i == "Toy workshop") CRW.upgradeUpgrade(i, color);
            else if (i == "Naughty list") CRW.upgradeUpgrade(i, color);
            else if (i == "Sacrificial rolling pins") CRW.upgradeUpgrade(i, color);
            else if (i == "Santa's bottomless bag") CRW.upgradeUpgrade(i, color);
            else if (i == "Santa's helpers") CRW.upgradeUpgrade(i, color);
            else if (i == "Santa's legacy") CRW.upgradeUpgrade(i, color);
            else if (i == "Santa's milk and cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Santa's dominion") CRW.upgradeUpgrade(i, color);

            else if (i == "Adamantium mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Eludium mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Fantasteel mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Iron mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Nevercrack mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Plastic mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Titanium mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Unobtainium mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Wishalloy mouse") CRW.upgradeUpgrade(i, color);
            else if (i == "Lucky day") CRW.upgradeUpgrade(i, color);
            else if (i == "Serendipity") CRW.upgradeUpgrade(i, color);
            else if (i == "Get lucky") CRW.upgradeUpgrade(i, color);

            else if (i == "Skull cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Ghost cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Bat cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Slime cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Pumpkin cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Eyeball cookies") CRW.upgradeUpgrade(i, color);
            else if (i == "Spider cookies") CRW.upgradeUpgrade(i, color);
        }
        if (color == CM.Disp.colorBlue && i != "Golden switch [off]") {
            CRW.globals.updateUpgradeAvailable = true;
            CRW.upgradeUpgrade(i, color);
            break;
        } else if (color == CM.Disp.colorGreen && i != "Golden switch [off]") {
            CRW.globals.updateUpgradeAvailable = true;
            CRW.upgradeUpgrade(i, color);
            break;
        }
    }
};

CRW.upgradeAllAvailableObjects = function () {
    if (!CRW.globals.updateUpgradeAvailable)
        for (var i in CM.Cache.Objects) {
            if (CM.Cache.Objects[i].color == CM.Disp.colorBlue) {
                if (Game.cookiesd >= Game.Objects[i].price) {
                    CRW.upgradeObject(i);
                    break;
                }
            } else if (CM.Cache.Objects[i].color == CM.Disp.colorGreen) {
                if (Game.cookiesd >= Game.Objects[i].price) {
                    CRW.upgradeObject(i);
                    break;
                }
            }
        }
};

CRW.upgradeObject = function (object) {
    Game.Objects[object].buy(1);
    clearInterval(CRW.loops.upgradeInterval);
    if (CRW.prefs.debug) console.log(CRW.prefs.fastIntervalSpeed);
    CRW.loops.upgradeInterval = setInterval(CRW.upgradeBuildings, CRW.prefs.fastIntervalSpeed);
};

CRW.disableElderPledge = function () {
    if (CRW.prefs.autoBuyElderPledge) {
        CRW.prefs.autoBuyElderPledge = false;
        Game.Notify('Config', 'Disabled elder pledge auto-buy', [20, 7], 4);
        // Game.Popup('Disabled elder pledge auto-buy');
    } else {
        CRW.prefs.autoBuyElderPledge = true;
        Game.Popup('Enabled elder pledge auto-buy');
    }
};

CRW.upgradeUpgrade = function (upgrade, color) {
    if (Game.Upgrades[upgrade].bought == 0 && Game.cookiesd >= Game.Upgrades[upgrade].basePrice) {
        console.log(upgrade + ": " + color);
        Game.Upgrades[upgrade].buy(1);
        clearInterval(CRW.loops.upgradeInterval);
        if (CRW.prefs.debug) console.log(CRW.prefs.fastIntervalSpeed);
        CRW.loops.upgradeInterval = setInterval(CRW.upgradeBuildings, CRW.prefs.fastIntervalSpeed);
    }
};

function waitForGame(delay) {
    if (typeof Game.ClickCookie != 'undefined' && typeof CM !== 'undefined' && typeof CM.Cache.Upgrades !== 'undefined') {
        CRW.Init();
    } else {
        setTimeout(function () {
            waitForGame(delay);
        }, delay);
    }
}

function addKeyboardListeners() {
    AddEvent(window, 'keydown', function (e) {
        if (!Game.OnAscend && Game.AscendTimer == 0) {
            if (/*e.ctrlKey &&*/ e.keyCode == 103) { //NUM7
                if (CRW.prefs.autoClickerEnabled) {
                    clearInterval(CRW.loops.clickBigCookie);
                    Game.Popup('Pausing auto-clicker');
                    CRW.prefs.autoClickerEnabled = false;
                } else {
                    Game.Popup('Enabling auto-clicker');
                    CRW.prefs.autoClickerEnabled = true;
                    CRW.loops.clickBigCookie = setInterval(Game.ClickCookie, 16);
                }
            }
            else if (/*e.ctrlKey &&*/ e.keyCode == 104) { //NUM8
                CRW.disableElderPledge();
            }
        }
        Game.keys[e.keyCode] = 1;
    });
}