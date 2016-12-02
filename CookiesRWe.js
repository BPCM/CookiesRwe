waitForGame(250);
var upgradeInterval, dInterval = 1000, fInterval = 10, updateUpgradeAvailable = false, debug = false;
//todo basePrice is not actual cost!
//todo show which seasonal items are missing
//todo disable click
//todo easter & halloween cookie find/refresh
//todo auto-buy christmas stuff
//todo add eggs to auto-buy
//add a festive hat
function Init() {
    upgradeInterval = setInterval(upgradeBuildings, dInterval);
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
}

function upgradeBuildings() {
    if (debug) console.log(dInterval);
    clearInterval(upgradeInterval);
    upgradeInterval = setInterval(upgradeBuildings, dInterval);
    upgradeUpgrades();
    upgradeObjects();
}
function upgradeUpgrades() {
    updateUpgradeAvailable = false;
    for (var i in CM.Cache.Upgrades) {
        if (CM.Cache.Upgrades[i].color == CM.Disp.colorGray) {
            if (i == 'A festive hat')upgradeUpgrade(i);
            else if (i == 'A crumbly egg')upgradeUpgrade(i);
            else if (i == "Elder Pledge")upgradeUpgrade(i);
            else if (i == "Reinforced index finger") upgradeUpgrade(i);
            else if (i == "Carpal tunnel prevention cream") upgradeUpgrade(i);
            else if (i == "Ambidextrous") upgradeUpgrade(i);
            else if (i == "Thousand fingers") upgradeUpgrade(i);
            else if (i == "Million fingers") upgradeUpgrade(i);
            else if (i == "Billion fingers") upgradeUpgrade(i);
            else if (i == "Trillion fingers") upgradeUpgrade(i);
            else if (i == "Quadrillion fingers") upgradeUpgrade(i);
            else if (i == "Quintillion fingers") upgradeUpgrade(i);
            else if (i == "Sextillion fingers") upgradeUpgrade(i);
            else if (i == "Septillion fingers") upgradeUpgrade(i);
            else if (i == "Octillion fingers") upgradeUpgrade(i);
            else if (i == "Increased merriness") upgradeUpgrade(i);
            else if (i == "Improved jolliness") upgradeUpgrade(i);
            else if (i == "A lump of coal") upgradeUpgrade(i);
            else if (i == "An itchy sweater") upgradeUpgrade(i);
            else if (i == "Reindeer baking grounds") upgradeUpgrade(i);
            else if (i == "Weighted sleighs") upgradeUpgrade(i);
            else if (i == "Ho ho ho-flavored frosting") upgradeUpgrade(i);
            else if (i == "Season savings") upgradeUpgrade(i);
            else if (i == "Toy workshop") upgradeUpgrade(i);
            else if (i == "Naughty list") upgradeUpgrade(i);
            else if (i == "Santa's bottomless bag") upgradeUpgrade(i);
            else if (i == "Santa's helpers") upgradeUpgrade(i);
            else if (i == "Santa's legacy") upgradeUpgrade(i);
            else if (i == "Santa's milk and cookies") upgradeUpgrade(i);
            else if (i == "Santa's dominion") upgradeUpgrade(i);
        }
        if (CM.Cache.Upgrades[i].color == CM.Disp.colorBlue && i != "Golden switch [off]") {
            updateUpgradeAvailable = true;
            upgradeUpgrade(i);
            break;
        } else if (CM.Cache.Upgrades[i].color == CM.Disp.colorGreen) {
            updateUpgradeAvailable = true;
            upgradeUpgrade(i);
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

function upgradeUpgrade(upgrade) {
    if (Game.Upgrades[upgrade].bought = 0 && Game.cookiesd >= Game.Upgrades[upgrade].basePrice) {
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
    if (typeof Game.ClickCookie != 'undefined') {
        Init();
    }
    else {
        setTimeout(function () {
            waitForGame(delay);
        }, delay);
    }
}

var counter = 10;
var myFunction = function () {
    clearInterval(interval);
    counter *= 10;
    interval = setInterval(myFunction, counter);
};
var interval = setInterval(myFunction, counter);