StartupEvents.registry('item', event => {
    event.create('dimension_ticket')
        .displayName('Билет')
		.maxStackSize(1)
		.rarity('rare')
		.tooltip('Требуется для входа в Ресурсное Измерение')
})