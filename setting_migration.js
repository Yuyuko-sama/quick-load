'use strict'

let DefaultSettings = {
	"enabled": true,
	"loadDistance": 1000,
	"loadExtra": true,
	"loadExtraMs": 1000,
	"blockedZones": [
		110,
		111,
		112,
		113,
		114,
		115,
		116,
		117,
		118,
		110,
		9920,
		9720,
		9950,
		9066
	],
	"skipCutscenes": false,
	"skipCutscenesZones": [
		9735,
		9935
	]
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if(from_ver === undefined) {
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if(from_ver === null) {
		return DefaultSettings;
	} else {
		
        if (from_ver + 1 < to_ver) {

            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }

        switch(to_ver)
        {
            case 2:
             settings.enabled = true;
             break;
        }
        
        return settings;

	}
}