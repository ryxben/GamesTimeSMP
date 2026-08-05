ItemEvents.rightClicked('kubejs:dimension_ticket', event => {
    event.item.count--
    event.player.runCommandSilent(
        'execute in resource_world:farm run tp @s 0 80 0'
    )
})