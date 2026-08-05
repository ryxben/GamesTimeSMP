ServerEvents.recipes(event => {
  // 2) Wash the crushed material
  event.recipes.create.splashing([
    'kubejs:washed_netherrack',
    CreateItem.of('minecraft:gold_nugget', 0.08),
    CreateItem.of('minecraft:magma_cream', 0.04)
  ], 'create:cinder_flour')

  // 3) Haunt it into residue
  event.recipes.create.haunting([
    'kubejs:ancient_residue',
    CreateItem.of('minecraft:glowstone_dust', 0.08)
  ], 'kubejs:washed_netherrack')

  // 4) Compress residue into a rough scrap
  event.recipes.create.compacting(
    'kubejs:raw_nether_scrap',
    ['4x kubejs:ancient_residue', 'minecraft:gold_nugget']
  ).heated()

  // 5) Finish into actual Netherite Scrap
  event.recipes.create.compacting(
    'minecraft:netherite_scrap',
    ['kubejs:raw_nether_scrap', 'minecraft:gold_ingot', Fluid.of('minecraft:lava', 250)]
  ).superheated()
})