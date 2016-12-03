waitForGame(250);
var upgradeInterval, dInterval = 1000, fInterval = 10, updateUpgradeAvailable = false, debug = false;
//todo basePrice is not actual cost!
//todo show which seasonal items are missing
//todo disable click
//todo easter & halloween cookie find/refresh
//todo add eggs to auto-buy
function Init() {
    try {
      //  upgradeInterval = setInterval(upgradeBuildings, dInterval);

        setInterval(function () {
            Game.ClickCookie();
        }, 16);

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

        //  window.onbeforeunload = confirmWinClose;
    } catch (e) {
        console.log(e.message);
    }
}

function upgradeBuildings() {
    console.log("upgradeBuildings entered");
    try {
        if (debug) console.log(dInterval);
        clearInterval(upgradeInterval);
        upgradeInterval = setInterval(upgradeBuildings, dInterval);
        upgradeUpgrades();
        upgradeObjects();
    } catch (e) {
        console.log(e.message);
    }
    console.log("upgradeBuildings exited");

}

function upgradeUpgrades() {
    console.log("upgradeUpgradessssss entered");

    try {
        updateUpgradeAvailable = false;
        for (var i in CM.Cache.Upgrades) {
            var color = CM.Cache.Upgrades[i].color;
            if (color == CM.Disp.colorGray && i != "Golden switch [off]") {
                if (i == 'A festive hat')upgradeUpgrade(i, color);
                else if (i == 'A crumbly egg')upgradeUpgrade(i, color);
                //todo else if (i == "Elder Pledge")upgradeUpgrade(i,color);
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
    } catch (e) {
        console.log(e.message);
    }
    console.log("upgradeUpgradessssss exited");

}

function upgradeObjects() {
    console.log("upgradeObjectsssssss entered");

    try {
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
    } catch (e) {
        console.log(e.message);
    }
    console.log("upgradeObjectsssssss exited");

}

function upgradeObject(object) {
    console.log("upgradeObject entered");
    try {
        Game.Objects[object].buy(1);
        clearInterval(upgradeInterval);
        if (debug) console.log(fInterval);
        upgradeInterval = setInterval(upgradeBuildings, fInterval);
    } catch (e) {
        console.log(e.message);
    }
    console.log("upgradeObject exited");
}

function upgradeUpgrade(upgrade, color) {
    console.log("upgradeUpgrade entered");

    try {
        if (Game.Upgrades[upgrade].bought == 0 && Game.cookiesd >= Game.Upgrades[upgrade].basePrice) {
            console.log(upgrade + ": " + color);
            Game.Upgrades[upgrade].buy(1);
            clearInterval(upgradeInterval);
            if (debug) console.log(fInterval);
            upgradeInterval = setInterval(upgradeBuildings, fInterval);
        }
    } catch (e) {
        console.log(e.message);
    }
    console.log("upgradeUpgrade exit");

}

function confirmWinClose() {
    Game.WriteSave();
}

function waitForGame(delay) {
    try {
        if (typeof Game.ClickCookie != 'undefined' && typeof CM != 'undefined') {
            Init();
        }
        else {
            setTimeout(function () {
                waitForGame(delay);
            }, delay);
        }
    } catch (e) {
        console.log(e.message);
    }
}