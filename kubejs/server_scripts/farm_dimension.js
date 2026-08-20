ItemEvents.rightClicked('kubejs:dimension_ticket', event => {
    event.item.count--
    event.player.runCommandSilent(
        'resourceworld tp farm'
    )
})