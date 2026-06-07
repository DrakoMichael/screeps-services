// console uses 

// start the safe mode in the controller to defend the base
// Game.spawns['Spawn1'].room.controller.activateSafeMode();

// create a tower to defend the base - tower need and use energy
// Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

/**

    // tower usecase 

    var tower = Game.getObjectById('9461bd54baa7fdea38141e84');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    

    // tower advanced usecase

    var tower = Game.getObjectById('9461bd54baa7fdea38141e84');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

*/