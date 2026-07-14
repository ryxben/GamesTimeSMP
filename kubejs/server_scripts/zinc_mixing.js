ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        'create:raw_zinc',
        [
            'minecraft:andesite',
            'minecraft:quartz',
            Fluid.of('minecraft:water', 250)
        ]
    ).heated()
})