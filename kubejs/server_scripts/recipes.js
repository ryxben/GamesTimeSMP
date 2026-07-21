ServerEvents.recipes(event => {

    event.shaped(
        Item.of('kubejs:prospector_hammer'),
        [
            ' I ',
            'ICI',
            ' R '
        ],
        {
            I: 'minecraft:iron_ingot',
            C: 'minecraft:stick',
            R: 'minecraft:cobblestone'
        }
    )

})