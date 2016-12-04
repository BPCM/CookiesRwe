waitForGame(250);
var debug = false, dInterval = 1000, fInterval = 10,
    clickLoop, upgradeInterval,
    updateUpgradeAvailable = false, clickLoopEnabled = true, elderPledgeUpgrade = true;
//todo basePrice is not actual cost!
//todo show which seasonal items are missing
//todo easter & halloween cookie find/refresh
function Init() {

    Game.playCookieClickSound = function () { //Removes clicking sound from game, sorry dude
    };

    if (typeof CM.Cache.Upgrades["Bunny biscuit"] != 'undefined') {
        if (!haveAllEasterEggs()) {
            Game.Popup("You are missing Easter eggs!");
        }
        if (!haveAllHalloweenCookies()) {
            Game.Popup("You are missing Halloween cookies");
        }
        if (!haveAllValentineCookies) {
            Game.Popup("You are missing Valentine's day cookies");
        }
    }

    upgradeInterval = setInterval(upgradeBuildings, dInterval);
    clickLoop = setInterval(clickBigCookie, 16);
    setInterval(function () {
        for (var g = 0; g < Game.shimmers.length; g++) {
            if (Game.shimmers[g].type == "golden" || Game.shimmers[g].type == "reindeer") {
                Game.shimmers[g].pop();
            }
        }
        if (Game.hasBuff('Clot') > 0) {
            Game.WriteSave();
            location.reload();
        }
    }, 1000);

    AddEvent(window, 'keydown', function (e) {
        if (!Game.OnAscend && Game.AscendTimer == 0) {
            if (/*e.ctrlKey &&*/ e.keyCode == 103) { //NUM7
                if (clickLoopEnabled) {
                    clearInterval(clickLoop);
                    Game.Popup('Pausing auto-clicker');
                    clickLoopEnabled = false;
                } else {
                    Game.Popup('Enabling auto-clicker');
                    clickLoopEnabled = true;
                    clickLoop = setInterval(clickBigCookie, 16);
                }
            }
            else if (/*e.ctrlKey &&*/ e.keyCode == 104) { //NUM8
                disableElderPledge();
            }
        }
        Game.keys[e.keyCode] = 1;
    });

//  window.onbeforeunload = confirmWinClose;
}

function haveAllValentineCookies() {
    var caughtThemAll = true;
    if (Game.Upgrades["Pure heart biscuits"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ardent heart biscuits"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Sour heart biscuits"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Weeping heart biscuits"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Golden heart biscuits"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Eternal heart biscuits"].bought = 0)        caughtThemAll = false;
    return caughtThemAll;
}

function haveAllEasterEggs() {
    var caughtThemAll = true;
    if (Game.Upgrades["Omelette"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Chicken egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Duck egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Turkey egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Quail egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Robin egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ostrich egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Cassowary egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Salmon roe"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Frogspawn"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Shark egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Turtle egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ant larva"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Golden goose egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Faberge egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Wrinklerspawn"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Cookie egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Omelette"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Chocolate egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Century egg"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["egg"].bought = 0)        caughtThemAll = false;
    return caughtThemAll;
}

function haveAllHalloweenCookies() {
    var caughtThemAll = true;
    if (Game.Upgrades["Skull cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Ghost cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Bat cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Slime cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Pumpkin cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Eyeball cookies"].bought = 0)        caughtThemAll = false;
    else if (Game.Upgrades["Spider cookies"].bought = 0)        caughtThemAll = false;
    return caughtThemAll
}


function clickBigCookie() {
    Game.ClickCookie();
}


function upgradeBuildings() {
    if (debug) console.log("upgradeBuildings: " + new Date());
    clearInterval(upgradeInterval);
    upgradeInterval = setInterval(upgradeBuildings, dInterval);
    upgradeUpgrades();
    upgradeObjects();
}

function upgradeUpgrades() {
    updateUpgradeAvailable = false;
    /*    if (Game.season == 'easter') {
     getEasterEggs();
     }*/
    for (var i in CM.Cache.Upgrades) {
        var color = CM.Cache.Upgrades[i].color;
        if (color == CM.Disp.colorGray && i != "Golden switch [off]") {
            if (i == 'A festive hat')upgradeUpgrade(i, color);
            else if (i == 'A crumbly egg')upgradeUpgrade(i, color);
            else if (elderPledgeUpgrade && i == "Elder Pledge")upgradeUpgrade(i, color);


            else if (i == "Omelette") upgradeUpgrade(i, color);
            else if (i == "Chicken egg") upgradeUpgrade(i, color);
            else if (i == "Duck egg") upgradeUpgrade(i, color);
            else if (i == "Turkey egg") upgradeUpgrade(i, color);
            else if (i == "Quail egg") upgradeUpgrade(i, color);
            else if (i == "Robin egg") upgradeUpgrade(i, color);
            else if (i == "Ostrich egg") upgradeUpgrade(i, color);
            else if (i == "Cassowary egg") upgradeUpgrade(i, color);
            else if (i == "Salmon roe") upgradeUpgrade(i, color);
            else if (i == "Frogspawn") upgradeUpgrade(i, color);
            else if (i == "Shark egg") upgradeUpgrade(i, color);
            else if (i == "Turtle egg") upgradeUpgrade(i, color);
            else if (i == "Ant larva") upgradeUpgrade(i, color);
            else if (i == "Golden goose egg") upgradeUpgrade(i, color);
            else if (i == "Faberge egg") upgradeUpgrade(i, color);
            else if (i == "Wrinklerspawn") upgradeUpgrade(i, color);
            else if (i == "Cookie egg") upgradeUpgrade(i, color);
            else if (i == "Omelette") upgradeUpgrade(i, color);
            //else if (i == "Chocolate egg") upgradeUpgrade(i, color); I think you are supposed to save this egg for when you ascend
            else if (i == "Century egg") upgradeUpgrade(i, color);
            else if (i == "egg") upgradeUpgrade(i, color);


            else if (i == "Reinforced index finger") upgradeUpgrade(i, color);
            else if (i == "Carpal tunnel prevention cream") upgradeUpgrade(i, color);
            else if (i == "Ambidextrous") upgradeUpgrade(i, color);
            else if (i == "Thousand fingers") upgradeUpgrade(i, color);
            else if (i == "Million fingers") upgradeUpgrade(i, color);
            else if (i == "Billion fingers") upgradeUpgrade(i, color);
            else if (i == "Trillion fingers") upgradeUpgrade(i, color);
            else if (i == "Quadrillion fingers") upgradeUpgrade(i, color);
            else if (i == "Quintillion fingers") upgradeUpgrade(i, color);
            else if (i == "Sextillion fingers") upgradeUpgrade(i, color);
            else if (i == "Septillion fingers") upgradeUpgrade(i, color);
            else if (i == "Octillion fingers") upgradeUpgrade(i, color);
            else if (i == "Increased merriness") upgradeUpgrade(i, color);
            else if (i == "Improved jolliness") upgradeUpgrade(i, color);
            else if (i == "A lump of coal") upgradeUpgrade(i, color);
            else if (i == "An itchy sweater") upgradeUpgrade(i, color);
            else if (i == "Reindeer baking grounds") upgradeUpgrade(i, color);
            else if (i == "Weighted sleighs") upgradeUpgrade(i, color);
            else if (i == "Ho ho ho-flavored frosting") upgradeUpgrade(i, color);
            else if (i == "Season savings") upgradeUpgrade(i, color);
            else if (i == "Toy workshop") upgradeUpgrade(i, color);
            else if (i == "Naughty list") upgradeUpgrade(i, color);
            else if (i == "Sacrificial rolling pills") upgradeUpgrade(i, color);
            else if (i == "Santa's bottomless bag") upgradeUpgrade(i, color);
            else if (i == "Santa's helpers") upgradeUpgrade(i, color);
            else if (i == "Santa's legacy") upgradeUpgrade(i, color);
            else if (i == "Santa's milk and cookies") upgradeUpgrade(i, color);
            else if (i == "Santa's dominion") upgradeUpgrade(i, color);
            else if (i == "Adamantium mouse") upgradeUpgrade(i, color);
            else if (i == "Eludium mouse") upgradeUpgrade(i, color);
            else if (i == "Fantasteel mouse") upgradeUpgrade(i, color);
            else if (i == "Iron mouse") upgradeUpgrade(i, color);
            else if (i == "Nevercrack mouse") upgradeUpgrade(i, color);
            else if (i == "Plastic mouse") upgradeUpgrade(i, color);
            else if (i == "Titanium mouse") upgradeUpgrade(i, color);
            else if (i == "Unobtainium mouse") upgradeUpgrade(i, color);
            else if (i == "Wishalloy mouse") upgradeUpgrade(i, color);
            else if (i == "Lucky day") upgradeUpgrade(i, color);
            else if (i == "Serendipity") upgradeUpgrade(i, color);
            else if (i == "Get lucky") upgradeUpgrade(i, color);

            else if (i == "Skull cookies") upgradeUpgrade(i, color);
            else if (i == "Ghost cookies") upgradeUpgrade(i, color);
            else if (i == "Bat cookies") upgradeUpgrade(i, color);
            else if (i == "Slime cookies") upgradeUpgrade(i, color);
            else if (i == "Pumpkin cookies") upgradeUpgrade(i, color);
            else if (i == "Eyeball cookies") upgradeUpgrade(i, color);
            else if (i == "Spider cookies") upgradeUpgrade(i, color);
        }
        if (color == CM.Disp.colorBlue && i != "Golden switch [off]") {
            updateUpgradeAvailable = true;
            upgradeUpgrade(i, color);
            break;
        } else if (color == CM.Disp.colorGreen && i != "Golden switch [off]") {
            updateUpgradeAvailable = true;
            upgradeUpgrade(i, color);
            break;
        }
    }
}


function upgradeObjects() {
    if (!updateUpgradeAvailable)
        for (var i in CM.Cache.Objects) {
            if (CM.Cache.Objects[i].color == CM.Disp.colorBlue) {
                if (Game.cookiesd >= Game.Objects[i].price) {
                    upgradeObject(i);
                    break;
                }
            } else if (CM.Cache.Objects[i].color == CM.Disp.colorGreen) {
                if (Game.cookiesd >= Game.Objects[i].price) {
                    upgradeObject(i);
                    break;
                }
            }
        }
}

function upgradeObject(object) {
    Game.Objects[object].buy(1);
    clearInterval(upgradeInterval);
    if (debug) console.log(fInterval);
    upgradeInterval = setInterval(upgradeBuildings, fInterval);

}

function upgradeUpgrade(upgrade, color) {
    if (Game.Upgrades[upgrade].bought == 0 && Game.cookiesd >= Game.Upgrades[upgrade].basePrice) {
        console.log(upgrade + ": " + color);
        Game.Upgrades[upgrade].buy(1);
        clearInterval(upgradeInterval);
        if (debug) console.log(fInterval);
        upgradeInterval = setInterval(upgradeBuildings, fInterval);
    }
}

function confirmWinClose() {
    Game.WriteSave();
}

function waitForGame(delay) {
    if (typeof Game.ClickCookie != 'undefined' && typeof CM.Cache.Upgrades != 'undefined') {
        Init();
    }
    else {
        setTimeout(function () {
            waitForGame(delay);
        }, delay);
    }
}

function disableElderPledge() {
    if (elderPledgeUpgrade) {
        elderPledgeUpgrade = false;
        Game.Popup('Disabled elder pledge auto-buy');
    } else {
        elderPledgeUpgrade = true;
        Game.Popup('Enabled elder pledge auto-buy');
    }
}