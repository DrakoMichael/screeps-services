const DEFAULT_RENEW_THRESHOLD = 200;

function getTicksToLive(creep) {
	return creep && typeof creep.ticksToLive === 'number' ? creep.ticksToLive : 0;
}

function getSpawnTime(creep) {
	if (!creep || !Array.isArray(creep.body)) return 0;
	return creep.body.length * CREEP_SPAWN_TIME;
}

function getBodyCost(creep) {
	if (!creep || !Array.isArray(creep.body)) return 0;
	return creep.body.reduce((total, part) => total + (BODYPART_COST[part.type] || 0), 0);
}


function shouldRenew(creep, threshold = DEFAULT_RENEW_THRESHOLD) {
	return getTicksToLive(creep) > 0 && getTicksToLive(creep) <= threshold;
}

function needsReplacement(creep, buffer = 0) {
	return getTicksToLive(creep) <= getSpawnTime(creep) + buffer;
}

function healthCheck(creep, speak = false) {
    if (speak) {
        return creep.say(getTicksToLive(creep) - 1);
    }
    if (getTicksToLive(creep) <= 50) {
        return renew(creep);
    }
}
   

function createLifeTimeChecker(options = {}) {
    const renewThreshold = options.renewThreshold ?? DEFAULT_RENEW_THRESHOLD;
	const replacementBuffer = options.replacementBuffer ?? 0;
    
	return {
        getTicksToLive,
		getSpawnTime,
		getBodyCost,
		shouldRenew: creep => shouldRenew(creep, renewThreshold),
		needsReplacement: creep => needsReplacement(creep, replacementBuffer),
	};
}



// --- SCOPE FUNCTIONS ---
function renew(creep) {
    const spawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);

    if (spawn) {
        if (spawn.renewCreep(creep) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn);
        }
    }
}

module.exports = {
	DEFAULT_RENEW_THRESHOLD,
	getTicksToLive,
	getSpawnTime,
	getBodyCost,
	shouldRenew,
	needsReplacement,
    healthCheck,
	createLifeTimeChecker,
};
