ServerEvents.recipes(event => {
    event.recipes.create.crushing([
    CreateItem.of('create:raw_zinc', 0.15),
    'minecraft:cobblestone'
], 'minecraft:andesite')
})