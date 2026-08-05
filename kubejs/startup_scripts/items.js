StartupEvents.registry('item', event => {

    event.create('dimension_ticket')
        .displayName('Билет')
        .maxStackSize(1)
        .rarity('rare')
        .tooltip('Требуется для входа в Ресурсное Измерение. Нажмите ПКМ, чтобы телепортироваться. Чтобы вернуться назад, напишите /spawn. ВНИМАНИЕ: в измерении регулярно производится вайп!')

    event.create('prospector_hammer')
        .displayName('Молоток золотоискателя')
        .maxStackSize(1)
        .rarity('rare')
        .tooltip('Кликните ПКМ, чтобы узнать содержание руды в ближайшей местности')
        .maxDamage(100)
		
    event.create('washed_netherrack')
        .displayName('Адский концентрат')
        .rarity('rare')
		
    event.create('ancient_residue')
        .displayName('Древние осадки')
		.rarity('rare')
		
    event.create('raw_nether_scrap')
        .displayName('Необработанные древние обломки')
        .rarity('rare')

})