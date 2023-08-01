// priority: 0

//kubejs hand

console.info('以下为mod.js的加载')

ServerEvents.recipes(event => {

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

    //以下为机械动力：实用设备的配方修改

    event.remove({ id: 'createutilities:shaped/graviton_tube' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "createutilities:polished_amethyst" },
        "transitionalItem": { "item": "createutilities:polished_amethyst" },
        "loops": 1,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "createutilities:polished_amethyst" }, { "item": "createutilities:void_steel_sheet" }],
                    "results": [{ "item": "createutilities:polished_amethyst" }]
                },

                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "createutilities:polished_amethyst" }, { "item": "ae2:quantum_entangled_singularity" }],
                    "results": [{ "item": "createutilities:graviton_tube" }]
                }
            ],

        "results": [{ "item": "createutilities:graviton_tube" }]
    })

    //以下为瓦尔基里的配方修改
    
    event.remove({ id: 'vs_eureka:oak_ship_helm' })
    event.remove({ id: 'vs_eureka:spruce_ship_helm' })
    event.remove({ id: 'vs_eureka:birch_ship_helm' })
    event.remove({ id: 'vs_eureka:jungle_ship_helm' })
    event.remove({ id: 'vs_eureka:acacia_ship_helm' })
    event.remove({ id: 'vs_eureka:dark_oak_ship_helm' })
    event.remove({ id: 'vs_eureka:crimson_ship_helm' })
    event.remove({ id: 'vs_eureka:warped_ship_helm' })

    //钻石粉统一
    event.remove({ id: 'createaddition:crushing/diamond' })

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
