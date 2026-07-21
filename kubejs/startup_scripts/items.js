StartupEvents.registry('item', event => {

    event.create('dimension_ticket')
        .displayName('Билет')
        .maxStackSize(1)
        .rarity('rare')
        .tooltip('Требуется для входа в Ресурсное Измерение')

    event.create('prospector_hammer')
        .displayName('Молоток золотоискателя')
        .maxStackSize(1)
        .rarity('rare')
        .tooltip('Кликните ПКМ, чтобы узнать содержание руды в ближайшей местности')
        .maxDamage(100)

})