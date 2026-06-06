var roleHarvester = require('role.Harvester');
var lifeTimeChecker = require('lifeTimeChecker');

module.exports.loop = function () {

    var spawn1 = Game.spawns['Spawn1'];
    if(Game.creeps.length < 2) {
        autoSpawn();
    }
    awaitSpawnToProced();

    if(Game.creeps['Harvester1'] == undefined) {
        spawn1.spawnCreep([WORK, CARRY, MOVE], 'Harvester1');
    }

    if(spawn1.spawning) {
        console.log(JSON.stringify(spawn1.spawning));
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        lifeTimeChecker.healthCheck(creep, true);
        roleHarvester.run(creep);
    }
}

function awaitSpawnToProced() {
    var spawn1 = Game.spawns['Spawn1'];
    if(spawn1.spawning) {
        console.log(JSON.stringify(spawn1.spawning));
    }
}

function autoName() {
    var name = 'Harvester' + Game.time;
    return name;
}

function autoSpawn() {
    var spawn1 = Game.spawns['Spawn1'];
    spawn1.spawnCreep([WORK, CARRY, MOVE], autoName());
}

function spawnCreep(name) {
    var spawn1 = Game.spawns['Spawn1'];
    if(Game.creeps[name] == undefined) {
        spawn1.spawnCreep([WORK, CARRY, MOVE], name);
    }
}
