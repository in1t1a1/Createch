// priority: 0

//kubejs hand

console.info('以下为mod.js的加载')

ServerEvents.recipes(event => {

    //以下为沉浸式飞机的配方修改

    event.remove({ id: 'immersive_aircraft:hull' })
    event.shaped('immersive_aircraft:hull', [
        'AAA',
        'SSS',
        'AAA'
    ], {
        A: 'create:andesite_casing',
        S: '#c:steel_plates'
    })

    event.remove({ id: 'immersive_aircraft:boiler' })
    event.shaped('immersive_aircraft:boiler', [
        'CCI',
        'CSP',
        'CCI'
    ], {
        C: '#c:copper_plates',
        I: 'minecraft:copper_ingot',
        P: 'minecraft:piston',
        S: 'create:steam_engine'
    })

    event.remove({ id: 'immersive_aircraft:engine' })
    event.shaped('immersive_aircraft:engine', [
        ' C ',
        ' B ',
        ' A '
    ], {
        C: 'create:flywheel',
        B: 'immersive_aircraft:boiler',
        A: 'minecraft:blast_furnace'
    })

    event.remove({ id: 'immersive_aircraft:sail' })
    event.shaped('immersive_aircraft:sail', [
        'PP',
        'WW',
        'WW'
    ], {
        P: '#minecraft:planks',
        W: 'create:white_sail'
    })

    event.remove({ id: 'immersive_aircraft:propeller' })
    event.shaped('immersive_aircraft:propeller', [
        ' I ',
        'ISI',
        ' I '
    ], {
        S: 'create:propeller',
        I: '#c:iron_plates'
    })

    //以下为宝丽来相机的配方修改

    event.remove({ id: 'polaroidcamera:camera' })
    event.shaped('polaroidcamera:camera', [
        'SGS',
        'SES',
        'SMS'
    ], {
        G: 'minecraft:glass_pane',
        E: 'create:electron_tube',
        M: 'minecraft:map',
        S: 'techreborn:steel_plate'
    })

    //以下为提取机的配方修改

    event.remove({ id: 'extractinator:extractinator' })
    event.shaped('extractinator:extractinator', [
        ' H ',
        'EPE',
        'BMB'
    ], {
        H: 'minecraft:hopper',
        E: 'techreborn:extractor',
        M: 'minecraft:barrel',
        B: 'create:basin',
        P: 'minecraft:piston'
    })

    //以下为道路的配方修改

    event.remove({ id: 'aft_fabroads:road_block' })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "minecraft:black_concrete_powder" },
            { "fluid": "minecraft:water", "amount": 8100 }],
        "results": [{ "item": "aft_fabroads:road_block" }],
    })

    event.stonecutting('aft_fabroads:manhole_cover', 'aft_fabroads:road_block')

    event.stonecutting('aft_fabroads:road_seams_block', 'aft_fabroads:road_block')

    event.custom(
        {
            "type": "create:cutting",
            "ingredients": [{ "item": "aft_fabroads:road_block" }],
            "results": [{ "item": "aft_fabroads:manhole_cover" }, { "item": "aft_fabroads:road_seams_block" }]
        })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "minecraft:light_gray_concrete_powder" },
            { "fluid": "minecraft:water", "amount": 8100 }],
        "results": [{ "item": "aft_fabroads:road_block_concrete" }],
    })

    event.stonecutting('aft_fabroads:manhole_cover_concrete', 'aft_fabroads:road_block_concrete')

    event.stonecutting('aft_fabroads:road_seams_block_concrete', 'aft_fabroads:road_block_concrete')

    event.custom(
        {
            "type": "create:cutting",
            "ingredients": [{ "item": "aft_fabroads:road_block_concrete" }],
            "results": [{ "item": "aft_fabroads:manhole_cover_concrete" }, { "item": "aft_fabroads:road_seams_block_concrete" }]
        })

    //线

    event.stonecutting('16x aft_fabroads:thick_line_straight', 'minecraft:white_concrete')

    event.stonecutting('aft_fabroads:line_straight', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_corner', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_tshaped', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_cross', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_diagonal', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_left_bend', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_right_bend', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_fork_left', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:line_fork_right', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_forward', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_left', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_right', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_forward_left', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_forward_right', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_left_right', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_back', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_back_left', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_back_forward', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_confluence_left', 'aft_fabroads:thick_line_straight')

    event.stonecutting('aft_fabroads:arrow_confluence_right', 'aft_fabroads:thick_line_straight')

    //柱

    event.stonecutting('16x aft_fabroads:vertical_straight_pillar', 'minecraft:light_gray_concrete')

    event.stonecutting('aft_fabroads:horizontal_straight_pillar', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:pillar_base', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:horizontal_corner_pillar', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:vertical_corner_pillar', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:horizontal_tshaped_pillar', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:vertical_tshaped_pillar_type2', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:road_mast_pillar_base', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:road_mast_pillar', 'aft_fabroads:vertical_straight_pillar')

    event.stonecutting('aft_fabroads:vertical_tshaped_pillar', 'aft_fabroads:vertical_straight_pillar')

    //杂项

    event.stonecutting('aft_fabroads:expressway_railings_base', 'minecraft:white_concrete')

    event.stonecutting('aft_fabroads:expressway_railings', 'minecraft:white_concrete')

    event.stonecutting('aft_fabroads:expressway_railings_type2', 'minecraft:white_concrete')

    event.stonecutting('aft_fabroads:pavement_railings', 'minecraft:white_concrete')

    event.stonecutting('aft_fabroads:barrier_bar', 'minecraft:white_concrete')

    //护栏

    event.stonecutting('aft_fabroads:insulation_panels_railings', 'minecraft:lime_concrete')

    event.stonecutting('aft_fabroads:railings', 'minecraft:lime_concrete')

    //标志

    event.stonecutting('aft_fabroads:sign_indicator_direction_left', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_indicator_direction_right', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_indicator_direction_car', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_indicator_direction_bicycle', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_no_drive', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_stop', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_05', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_20', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_05', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_20', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_30', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_40', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_50', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_60', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_70', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_80', 'create:iron_sheet')

    event.stonecutting('aft_fabroads:sign_indicator_direction_left', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_indicator_direction_right', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_indicator_direction_car', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_indicator_direction_bicycle', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_no_drive', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_05', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_20', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_05', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_20', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_30', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_40', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_50', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_60', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_70', 'techreborn:iron_plate')

    event.stonecutting('aft_fabroads:sign_ban_speed_limit_80', 'techreborn:iron_plate')

    //交通灯

    event.shaped('aft_fabroads:traffic_light', [
        'N',
        'T'
    ], {
        N: 'create:nixie_tube',
        T: 'create:track_signal'
    })

    //以下为钢锭大一统

    event.remove({ id: 'anim_guns:hardened_iron_ingot_from_blasting' })
    event.shapeless('2x anim_guns:hardened_iron_ingot', ['2x techreborn:refined_iron_ingot'])

    //以下为钩爪的配方修改

    event.remove({ id: 'hookshot:hookshot' })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "R": { "item": "minecraft:redstone_block" },
            "P": { "item": "minecraft:piston" },
            "I": { "item": "minecraft:iron_ingot" },
            "C": { "item": "minecraft:chain" },
            "B": { "item": "create:brass_hand" }
        },
        "pattern": [
            " B ",
            "ICI",
            "RPR"
        ],
        "result": {
            "item": "hookshot:white_hookshot"
        }
    })

    //以下为CC的配方修改

    event.remove({ id: 'computercraft:computer_normal' })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": { "item": "create:andesite_casing" },
            "E": { "item": "create:electron_tube" },
            "D": { "item": "create:display_board" },
            "X": { "item": "ae2:printed_calculation_processor" },
            "Y": { "item": "ae2:printed_engineering_processor" },
            "Z": { "item": "ae2:printed_logic_processor" }
        },
        "pattern": [
            "AAAAA",
            "AXEXA",
            "AYEYA",
            "AZEZA",
            "ADDDA"
        ],
        "result": {
            "item": "computercraft:computer_normal"
        }
    })

    event.remove({ id: 'computercraft:computer_advanced_upgrade' })
    event.remove({ id: 'computercraft:computer_advanced' })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "B": { "item": "create:brass_casing" },
            "E": { "item": "create:electron_tube" },
            "D": { "item": "create:display_board" },
            "X": { "item": "ae2:printed_calculation_processor" },
            "Y": { "item": "ae2:printed_engineering_processor" },
            "Z": { "item": "ae2:printed_logic_processor" }
        },
        "pattern": [
            "BBBBB",
            "BXEXB",
            "BYEYB",
            "BZEZB",
            "BDDDB"
        ],
        "result": {
            "item": "computercraft:computer_advanced"
        }
    })

    event.remove({ id: 'computercraft:pocket_computer_normal' })
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "item": "computercraft:computer_normal"
            }
        ],
        "results": [
            {
                "item": "computercraft:pocket_computer_normal"
            }
        ]
    })

    event.remove({ id: 'computercraft:pocket_computer_advanced' })
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "item": "computercraft:computer_advanced"
            }
        ],
        "results": [
            {
                "item": "computercraft:pocket_computer_advanced"
            }
        ]
    })

    event.remove({ id: 'computercraft:turtle_normal' })
    event.shaped('computercraft:turtle_normal', [
        'AAA',
        'ANA',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        C: '#c:chests',
        N: 'computercraft:computer_normal'
    })

    event.remove({ id: 'computercraft:turtle_advanced' })
    event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
    event.shaped('computercraft:turtle_advanced', [
        'BBB',
        'BAB',
        'BCB'
    ], {
        B: '#c:brass_ingots',
        C: '#c:chests',
        A: 'computercraft:computer_advanced'
    })

    event.remove({ id: 'computercraft:speaker' })
    event.shaped('computercraft:speaker', [
        'AAA',
        'ANA',
        'ARA'
    ], {
        N: 'minecraft:note_block',
        R: 'minecraft:redstone',
        A: 'create:andesite_casing'
    })

    event.remove({ id: 'computercraft:disk_drive' })
    event.shaped('computercraft:disk_drive', [
        'AAA',
        'ARA',
        'ARA'
    ], {
        R: 'minecraft:redstone',
        A: 'create:andesite_casing'
    })

    event.remove({ id: 'computercraft:printer' })
    event.shaped('computercraft:printer', [
        'AAA',
        'ARA',
        'ADA'
    ], {
        R: 'minecraft:redstone',
        A: 'create:andesite_casing',
        D: '#balm:dyes'
    })

    event.remove({ id: 'computercraft:monitor_normal' })
    event.shaped('computercraft:monitor_normal', [
        'AAA',
        'AEA',
        'ADA'
    ], {
        E: 'create:electron_tube',
        A: 'create:andesite_casing',
        D: 'create:display_board'
    })

    event.remove({ id: 'computercraft:monitor_advanced' })
    event.shaped('computercraft:monitor_advanced', [
        'BBB',
        'BEB',
        'BDB'
    ], {
        E: 'create:electron_tube',
        B: 'create:brass_casing',
        D: 'create:display_board'
    })

    event.remove({ id: 'computercraft:wireless_modem_normal' })
    event.shaped('computercraft:wireless_modem_normal', [
        'ARA',
        'AEA',
        'AAA'
    ], {
        R: 'minecraft:redstone_torch',
        A: 'create:andesite_alloy',
        E: 'minecraft:ender_pearl'
    })

    event.remove({ id: 'computercraft:wireless_modem_advanced' })
    event.shaped('computercraft:wireless_modem_advanced', [
        'BRB',
        'BEB',
        'BBB'
    ], {
        R: 'minecraft:redstone_torch',
        B: '#c:brass_ingots',
        E: 'minecraft:ender_eye'
    })

    //以下为抽屉的配方修改

    event.remove({ id: 'extended_drawers:upgrade_frame' })
    event.shaped('4x extended_drawers:upgrade_frame', [
        'SCS',
        'C C',
        'SCS'
    ], {
        S: 'minecraft:stick',
        C: 'minecraft:cobblestone'
    })

    event.remove({ id: 'extended_drawers:t1_upgrade' })
    event.remove({ id: 'extended_drawers:t2_upgrade' })
    event.remove({ id: 'extended_drawers:t3_upgrade' })
    event.remove({ id: 'extended_drawers:t4_upgrade' })
    event.remove({ id: 'extended_drawers:downgrade' })
    event.smithing('extended_drawers:t1_upgrade', 'extended_drawers:upgrade_frame', 'minecraft:copper_ingot')
    event.smithing('extended_drawers:t2_upgrade', 'extended_drawers:upgrade_frame', 'minecraft:iron_ingot')
    event.smithing('extended_drawers:t3_upgrade', 'extended_drawers:upgrade_frame', 'minecraft:gold_ingot')
    event.smithing('extended_drawers:t4_upgrade', 'extended_drawers:upgrade_frame', 'minecraft:emerald')
    event.smithing('extended_drawers:downgrade', 'extended_drawers:upgrade_frame', 'minecraft:dirt')

    //以下为TOM的配方修改

    event.remove({ id: 'toms_storage:wireless_terminal' })
    event.remove({ id: 'toms_storage:adv_wireless_terminal' })
    event.remove({ id: 'toms_storage:open_crate' })

    //以下为S.A.G.的配方修改

    event.remove({ id: 'anim_guns:plastic' })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "amount": 81000,
                "fluid": "kubejs:ethylene"
            }
        ],
        "results": [
            {
                "item": "anim_guns:plastic"
            }
        ]
    })

    //以下为魔女的扫帚的配方修改

    event.remove({ id: 'majobroom:majo_broom' })
    event.shaped('majobroom:broom_item', [
        ' RH',
        ' SR',
        'S  '
    ], {
        S: 'minecraft:stick',
        R: 'create:refined_radiance',
        H: 'minecraft:hay_block'
    })

    //以下为羊/鸡肉面饼的配方修改

    event.remove({ id: 'kibe:entangled_chest' })
    event.remove({ id: 'kibe:entangled_bag' })
    event.remove({ id: 'kibe:entangled_tank' })
    event.remove({ id: 'kibe:entangled_bucket' })
    event.remove({ id: 'kibe:angel_ring' })
    event.remove({ id: 'kibe:light_ring' })
    event.remove({ id: 'kibe:chunk_loader' })
    event.remove({ id: 'coxinhautilities:cardboard_box/cardboard_box_saw_dust' })
    event.remove({ id: 'coxinhautilities:cardboard_box/cardboard_box' })

})

ServerEvents.tags('item', event => {

    event.get('trinkets:legs/belt').remove('toms_storage:ts.adv_wireless_terminal')
    event.get('trinkets:chest/back').add('techreborn:lithium_ion_batpack')
    event.get('trinkets:chest/back').add('techreborn:lapotronic_orbpack')
    event.get('trinkets:legs/belt').add('numismatic-overhaul:piggy_bank')
    event.get('c:wrenches').add('techreborn:wrench')

})

ServerEvents.tags('fluid', event => {

    event.get('createaddition:burnable_fuel_superheated_24000').add('techreborn:biofuel')

})

// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')