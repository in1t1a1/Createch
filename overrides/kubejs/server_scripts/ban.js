console.info('以下为ban.js的加载')

ServerEvents.recipes(event => {

    event.remove({ id: 'ad_astra:recipes/launch_pad' })
    event.remove({ id: 'ad_astra:recipes/nasa_workbench' })
    event.remove({ id: 'ad_astra:recipes/steel_cable' })
    event.remove({ id: 'ad_astra:recipes/desh_cable' })
    event.remove({ id: 'ad_astra:recipes/desh_fluid_pipe' })
    event.remove({ id: 'ad_astra:recipes/ostrum_fluid_pipe' })
    event.remove({ id: 'ad_astra:recipes/coal_generator' })
    event.remove({ id: 'ad_astra:recipes/compressor' })
    event.remove({ id: 'ad_astra:recipes/solar_panel' })
    event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot' })

    event.remove({ id: 'mining_dims:mining_teleporter' })
    event.remove({ id: 'mining_dims:caving_teleporter' })
    event.remove({ id: 'mining_dims:climbing_teleporter' })
    event.remove({ id: 'mining_dims:nethering_teleporter' })
    event.remove({ id: 'mining_dims:hunting_teleporter' })

    event.remove({ id: 'ae2:network/blocks/spatial_io_pylon' })
    event.remove({ id: 'ae2:spatial_anchor' })

    event.remove({ id: 'botania:loki_ring' })
    event.remove({ id: 'botania:laputa_shard' })

    event.remove({ id: 'create:crafting/kinetics/filter' })
    event.remove({ id: 'create:crafting/appliances/filter_clear' })
    event.remove({ id: 'create:crafting/kinetics/attribute_filter' })
    event.remove({ id: 'create:crafting/appliances/attribute_filter_clear' })

    event.remove({ id: 'toms_storage:inventory_connector' })
    event.remove({ id: 'toms_storage:trim' })
    event.remove({ id: 'toms_storage:trim_clean' })
    event.remove({ id: 'toms_storage:open_crate' })
    event.remove({ id: 'toms_storage:inventory_cable' })
    event.remove({ id: 'toms_storage:inventory_cable_framed' })
    event.remove({ id: 'toms_storage:inventory_cable_connector' })
    event.remove({ id: 'toms_storage:inventory_cable_connector_filtered' })
    event.remove({ id: 'toms_storage:inventory_cable_connector_framed' })
    event.remove({ id: 'toms_storage:inventory_proxy' })
    event.remove({ id: 'toms_storage:inventory_hopper_basic' })
    event.remove({ id: 'toms_storage:level_emitter' })
    event.remove({ id: 'toms_storage:paint_kit' })
    event.remove({ id: 'toms_storage:item_filter' })
    event.remove({ id: 'toms_storage:poly_item_filter' })
    event.remove({ id: 'toms_storage:tag_item_filter' })
    event.remove({ id: 'toms_storage:wireless_terminal' })
    event.remove({ id: 'toms_storage:adv_wireless_terminal' })

    event.remove({ type: 'spectrum:anvil_crushing' })

    event.remove({ id: 'javd:portal_block' })

})