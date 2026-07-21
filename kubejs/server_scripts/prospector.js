const ORES = {

    "minecraft:ocean": [
        "алмазов",
        "лазура"
    ],

    "minecraft:deep_ocean": [
        "алмазов",
        "лазурита"
    ],

    "minecraft:warm_ocean": [
        "алмазов",
        "лазурита"
    ],

    "minecraft:lukewarm_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:deep_lukewarm_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:cold_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:deep_cold_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:frozen_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:deep_frozen_ocean": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:snowy_beach": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:beach": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:stony_shore": [
        "алмазов",
        "лазурита"
    ],
	
    "minecraft:river": [
        "алмазов",
        "лазурита",
		"золота"
    ],
	
    "minecraft:desert": [
        "лазурита",
        "редстоуновой пыли"
    ],
	
    "minecraft:mushroom_fields": [
        "всех руд"
    ],
	
    "minecraft:cherry_grove": [
        "всех руд"
    ],
	
    "minecraft:pale_garden": [
        "всех руд"
    ],
	
    "minecraft:lush_caves": [
        "всех руд"
    ],
	
    "minecraft:badlands": [
        "золота"
    ],
	
    "minecraft:wooded_badlands": [
        "золота"
    ],
	
    "minecraft:eroded_badlands": [
        "золота"
    ],
	
    "minecraft:dark_forest": [
        "редстоуновой пыли"
    ],
	
    "minecraft:mangrove_swamp": [
        "редстоуновой пыли"
    ],
	
    "minecraft:swamp": [
        "редстоуновой пыли"
    ],
	
    "minecraft:bamboo_jungle": [
        "меди"
    ],
	
    "minecraft:jungle": [
        "меди"
    ],

    "minecraft:savanna": [
        "меди"
    ],
	
    "minecraft:savanna_plateau": [
        "меди"
    ],
	
    "minecraft:sparse_jungle": [
        "меди"
    ],
	
    "minecraft:windswept_savanna": [
        "меди"
    ],
	
    "minecraft:sulfur_caves": [
        "меди",
		"угля",
		"железа",
		"золота",
    ],
	
    "minecraft:dripstone_caves": [
        "меди",
		"угля",
		"железа",
		"золота",
    ],
	
    "minecraft:birch_forest": [
        "железа",
        "угля"
    ],
	
    "minecraft:flower_forest": [
        "железа",
        "угля"
    ],
	
    "minecraft:forest": [
        "железа",
        "угля"
    ],
	
    "minecraft:frozen_peaks": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:grove": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:ice_spikes": [
        "железа",
        "угля"
    ],
	
    "minecraft:jagged_peaks": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:meadow": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:old_growth_birch_forest": [
        "железа",
        "угля"
    ],
	
    "minecraft:old_growth_pine_taiga": [
        "железа",
        "угля"
    ],
	
    "minecraft:old_growth_spruce_taiga": [
        "железа",
        "угля"
    ],
	
    "minecraft:plains": [
        "железа",
        "угля"
    ],
	
    "minecraft:snowy_plains": [
        "железа",
        "угля"
    ],
	
    "minecraft:snowy_slopes": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:snowy_taiga": [
        "железа",
        "угля"
    ],
	
    "minecraft:stony_peaks": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:sunflower_plains": [
        "железа",
        "угля"
    ],
	
    "minecraft:taiga": [
        "железа",
        "угля"
    ],
	
    "minecraft:windswept_forest": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:windswept_gravelly_hills": [
        "железа",
        "изумрудов",
        "угля"
    ],
	
    "minecraft:windswept_hills": [
        "железа",
        "изумрудов",
        "угля"
    ],

}

ItemEvents.rightClicked(event => {

    if (event.item.id != "kubejs:prospector_hammer")
        return
	
	event.player.addItemCooldown(event.item, 100)

    const biome = event.level
        .getBiome(event.player.blockPosition())
        .unwrapKey()
        .get()
        .location()
        .toString()

    const ores = ORES[biome]

    if (!ores) {

        event.player.tell(
            "Вы не находите ничего необычного."
        )

        return

    }

    const randomOre =
        ores[Math.floor(Math.random() * ores.length)]

    event.player.tell(
        "Вы находите следы " +
        randomOre +
        "."
    )
	
	event.item.setDamageValue(event.item.damageValue + 1)
	
})