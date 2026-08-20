ServerEvents.recipes(event => {
	event.remove({
		type: 'create:crushing',
		input: 'minecraft:andesite'
	})
    event.recipes.create.crushing([
    CreateItem.of('create:raw_zinc', 0.15),
    'minecraft:cobblestone'
], 'minecraft:andesite')
})