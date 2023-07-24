console.info('以下为techreborn.js的加载')

ServerEvents.recipes(event => {

    event.remove({ id: 'create_deco_casing:recette_chromatic_compound' })
    event.custom({
        "type": "techreborn:fusion_reactor",                                      //异彩化合物
        "power": 16384,
        "time": 102.4,
        "start-power": 10000000,
        "min-size": 1,
        "ingredients": [
            {
                "item": "kubejs:chromatic_paint_ball"
            },
            {
                "item": "ae2:quantum_entangled_singularity"
            }
        ],
        "results": [
            {
                "item": "create:chromatic_compound"
            }
        ]
    })

    event.custom({                                                           //钻石粉
        "type": "techreborn:implosion_compressor",
        "power": 30,
        "time": 2000,
        "ingredients": [
            {
                "count": 4,
                "tag": "c:coal_dusts"
            },
            {
                "item": "minecraft:tnt",
                "count": 16
            }
        ],
        "results": [
            {
                "item": "techreborn:diamond_dust",
                "count": 3
            },
            {
                "item": "techreborn:dark_ashes_dust",
                "count": 16
            }
        ]
    })

    event.custom({                                                           //钻石粉
        "type": "techreborn:implosion_compressor",
        "power": 30,
        "time": 2000,
        "ingredients": [
            {
                "count": 4,
                "tag": "c:charcoal_dusts"
            },
            {
                "item": "minecraft:tnt",
                "count": 16
            }
        ],
        "results": [
            {
                "item": "techreborn:diamond_dust",
                "count": 3
            },
            {
                "item": "techreborn:dark_ashes_dust",
                "count": 16
            }
        ]
    })

    event.custom({                                                           //钻石粉
        "type": "techreborn:implosion_compressor",
        "power": 30,
        "time": 2000,
        "ingredients": [
            {
                "count": 4,
                "tag": "c:coal_dusts"
            },
            {
                "item": "minecraft:end_crystal",
                "count": 4
            }
        ],
        "results": [
            {
                "item": "techreborn:diamond_dust",
                "count": 3
            },
            {
                "item": "techreborn:ender_eye_small_dust",
                "count": 4
            }
        ]
    })

    event.custom({                                                           //钻石粉
        "type": "techreborn:implosion_compressor",
        "power": 30,
        "time": 2000,
        "ingredients": [
            {
                "count": 4,
                "tag": "c:charcoal_dusts"
            },
            {
                "item": "minecraft:end_crystal",
                "count": 4
            }
        ],
        "results": [
            {
                "item": "techreborn:diamond_dust",
                "count": 3
            },
            {
                "item": "techreborn:ender_eye_small_dust",
                "count": 4
            }
        ]
    })

    event.custom({                                                           //青金石粉
        "type": "create:crushing",
        "ingredients": [{ "item": "minecraft:cornflower" }],
        "results": [{ "item": "techreborn:lazurite_dust" }]
    })

    event.remove({ id: 'techreborn:distillation_tower/diesel' })    //石油分馏         //乙烯
    event.custom({
        "type": "techreborn:distillation_tower",
        "power": 20,
        "time": 400,
        "ingredients": [
            {
                "item": "techreborn:cell",
                "count": 16,
                "nbt": "empty"
            },
            {
                "fluid": "techreborn:oil",
                "holder": "techreborn:cell",
                "count": 16
            }
        ],
        "results": [
            {
                "item": "techreborn:cell",
                "count": 16,
                "nbt": {
                    "fluid": "techreborn:diesel"
                }
            },
            {
                "item": "techreborn:cell",
                "count": 8,
                "nbt": {
                    "fluid": "techreborn:sulfuric_acid"
                }
            },
            {
                "item": "techreborn:cell",
                "count": 8,
                "nbt": {
                    "fluid": "kubejs:ethylene"
                }
            }
        ]
    })

    event.smithing('techreborn:quantum_solar_panel', 'techreborn:ultimate_solar_panel', 'kubejs:cosmilite_ingot')

    event.remove({ not: { type: 'create:mixing' }, input: 'techreborn:uu_matter' })
    event.remove({ id: 'techreborn:crafting_table/machine/lightning_rod' })
    event.shaped('techreborn:lightning_rod', [
        'EAE',
        'AEA',
        'EAE'
    ], {
        A: 'techreborn:advanced_machine_frame',
        E: 'techreborn:energy_flow_chip'
    })

    event.remove({ id: 'techreborn:crafting_table/parts/electronic_circuit' })
    event.remove({ id: 'techreborn:assembling_machine/electronic_circuit' })
    event.remove({ id: 'createplus:techreborn/sequenced_assembly/electronic_circuit' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:incomplete_electronic_circuit" },
        "transitionalItem": { "item": "kubejs:incomplete_electronic_circuit" },
        "loops": 8,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_electronic_circuit" }, { "item": "kubejs:iron_pin" }],
                    "results": [{ "item": "kubejs:incomplete_electronic_circuit" }]
                },
            ],

        "results": [{ "item": "techreborn:electronic_circuit" }]
    })

    event.remove({ id: 'techreborn:crafting_table/parts/advanced_circuit' })
    event.remove({ id: 'techreborn:assembling_machine/advanced_circuit' })
    event.remove({ id: 'createplus:techreborn/sequenced_assembly/advanced_circuit' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:incomplete_electronic_circuit" },
        "transitionalItem": { "item": "kubejs:incomplete_electronic_circuit" },
        "loops": 8,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_electronic_circuit" }, { "item": "kubejs:copper_pin" }],
                    "results": [{ "item": "kubejs:incomplete_electronic_circuit" }]
                },
            ],

        "results": [{ "item": "techreborn:advanced_circuit" }]
    })

    event.remove({ id: 'techreborn:assembling_machine/industrial_circuit' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:incomplete_electronic_circuit" },
        "transitionalItem": { "item": "kubejs:incomplete_electronic_circuit" },
        "loops": 8,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_electronic_circuit" }, { "item": "kubejs:golden_pin" }],
                    "results": [{ "item": "kubejs:incomplete_electronic_circuit" }]
                },
            ],

        "results": [{ "item": "techreborn:industrial_circuit" }]
    })

    event.remove({ id: 'techreborn:crafting_table/machine_block/basic_machine_frame_alt' })
    event.remove({ id: 'techreborn:crafting_table/machine_block/basic_machine_frame' })
    event.custom({                                               //基础机械框架
        "type": "create:item_application",
        "ingredients": [
            {
                "item": "kubejs:machine_frame"
            },
            {
                "item": "techreborn:electronic_circuit"
            }
        ],
        "results": [
            {
                "item": "techreborn:basic_machine_frame"
            }
        ]
    })

    event.remove({ id: 'techreborn:crafting_table/machine_block/advanced_machine_frame' })
    event.custom({                                               //高级机械框架
        "type": "create:item_application",
        "ingredients": [
            {
                "item": "kubejs:machine_frame"
            },
            {
                "item": "techreborn:advanced_circuit"
            }
        ],
        "results": [
            {
                "item": "techreborn:advanced_machine_frame"
            }
        ]
    })

    event.remove({ id: 'techreborn:crafting_table/machine_block/industrial_machine_frame' })
    event.custom({                                               //工业机械框架
        "type": "create:item_application",
        "ingredients": [
            {
                "item": "kubejs:machine_frame"
            },
            {
                "item": "techreborn:industrial_circuit"
            }
        ],
        "results": [
            {
                "item": "techreborn:industrial_machine_frame"
            }
        ]
    })

    //basic_machine_frame
    //advanced_machine_frame
    //industrial_machine_frame

    event.remove({ id: 'techreborn:crafting_table/machine/alloy_smelter' })   //合金炉
    event.shaped('techreborn:alloy_smelter', [
        'I',
        'B'
    ], {
        I: 'techreborn:iron_alloy_furnace',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/assembling_machine' })   //装配机
    event.shaped('techreborn:assembly_machine', [
        'D',
        'A'
    ], {
        D: 'create:deployer',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/auto_crafting_table' })   //自动工作台
    event.shaped('techreborn:auto_crafting_table', [
        'C',
        'A'
    ], {
        C: 'minecraft:crafting_table',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/chemical_reactor' })   //化学反应器
    event.shaped('techreborn:chemical_reactor', [
        'M',
        'A'
    ], {
        M: 'create:mechanical_mixer',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/compressor' })   //压缩机
    event.shaped('techreborn:compressor', [
        'M',
        'B'
    ], {
        M: 'create:mechanical_press',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/distillation_tower' })   //蒸馏塔
    event.shaped('techreborn:distillation_tower', [
        'C',
        'I'
    ], {
        C: 'techreborn:cupronickel_heating_coil',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/extractor' })   //提取机
    event.shaped('techreborn:extractor', [
        'T',
        'B'
    ], {
        T: 'techreborn:treetap',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/resin_basin' })   //树脂收集盆
    event.shaped('techreborn:resin_basin', [
        'RTR',
        'RRR'
    ], {
        T: 'techreborn:treetap',
        R: 'techreborn:rubber_planks'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/fluid_replicator' })   //流体复制机

    event.remove({ id: 'techreborn:crafting_table/machine/grinder' })   //磨粉机
    event.shaped('techreborn:grinder', [
        'CBC'
    ], {
        C: 'create:crushing_wheel',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/electric_furnace' })   //电炉
    event.shaped('techreborn:electric_furnace', [
        'I',
        'B'
    ], {
        I: 'techreborn:iron_furnace',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/implosion_compressor' })   //聚爆压缩机
    event.shaped('techreborn:implosion_compressor', [
        'M',
        'I'
    ], {
        M: 'create:mechanical_press',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/industrial_blast_furnace' })   //工业高炉
    event.shaped('techreborn:industrial_blast_furnace', [
        'CIC'
    ], {
        C: 'techreborn:cupronickel_heating_coil',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/industrial_centrifuge_alt' })   //工业离心机
    event.remove({ id: 'techreborn:crafting_table/machine/industrial_centrifuge' })
    event.shaped('techreborn:industrial_centrifuge', [
        'M',
        'I'
    ], {
        M: 'create:mechanical_mixer',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/industrial_electrolyzer' })   //工业电解器
    event.shaped('techreborn:industrial_electrolyzer', [
        'T',
        'A'
    ], {
        T: 'createaddition:tesla_coil',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/industrial_grinder' })   //工业磨粉机
    event.shaped('techreborn:industrial_grinder', [
        'CAC'
    ], {
        C: 'create:crushing_wheel',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/industrial_sawmill' })   //锯木机
    event.shaped('techreborn:industrial_sawmill', [
        'M',
        'A'
    ], {
        M: 'create:mechanical_saw',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/matter_fabricator' })   //物质机
    event.shaped('techreborn:matter_fabricator', [
        'E',
        'I'
    ], {
        E: 'techreborn:extractor',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/recycler' })   //回收机
    event.shaped('techreborn:recycler', [
        'E',
        'A'
    ], {
        E: 'techreborn:extractor',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/rolling_machine' })   //辊压机
    event.shaped('techreborn:rolling_machine', [
        'M',
        'A'
    ], {
        M: 'create:mechanical_press',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/scrapboxinator' })   //废料拆包机
    event.shaped('techreborn:scrapboxinator', [
        'D',
        'B'
    ], {
        D: 'create:deployer',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/vacuum_freezer' })   //真空冷凝器
    event.shaped('techreborn:vacuum_freezer', [
        'K',
        'A'
    ], {
        K: 'kibe:vacuum_hopper',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/canning_machine' })   //固体装罐机
    event.shaped('techreborn:solid_canning_machine', [
        'S',
        'B'
    ], {
        S: 'create:spout',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/wire_mill' })   //线材轧机
    event.shaped('techreborn:wire_mill', [
        'R',
        'B'
    ], {
        R: 'createaddition:rolling_mill',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/greenhouse_controller' })   //温室控制器
    event.shaped('techreborn:greenhouse_controller', [
        'I',
        'A'
    ], {
        I: 'minecraft:iron_hoe',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/block_breaker' })   //方块破坏器
    event.shaped('techreborn:block_breaker', [
        'BI'
    ], {
        I: 'minecraft:iron_pickaxe',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/block_placer' })   //方块放置器
    event.shaped('techreborn:block_placer', [
        'BD'
    ], {
        D: 'create:deployer',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/launchpad' })   //发射台
    event.shaped('techreborn:launchpad', [
        'W',
        'A'
    ], {
        W: 'create:weighted_ejector',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/elevator' })   //电梯
    event.shaped('techreborn:elevator', [
        'E',
        'B'
    ], {
        E: 'minecraft:ender_pearl',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/diesel_generator_alt' })   //柴油发电机
    event.remove({ id: 'techreborn:crafting_table/machine/diesel_generator' })
    event.shaped('techreborn:diesel_generator', [
        'F',
        'S',
        'B'
    ], {
        F: 'create:fluid_tank',
        S: 'techreborn:solid_fuel_generator',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/fusion_coil' })//核聚变线圈
    event.shaped('techreborn:fusion_coil', [
        'N',
        'I'
    ], {
        N: 'techreborn:nichrome_heating_coil',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/gas_turbine_alt' })   //燃气轮机
    event.remove({ id: 'techreborn:crafting_table/machine/gas_turbine' })
    event.shaped('techreborn:gas_turbine', [
        'P',
        'S',
        'A'
    ], {
        P: 'create:propeller',
        S: 'techreborn:solid_fuel_generator',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/semi_fluid_generator_alt' })   //半流质发电机
    event.remove({ id: 'techreborn:crafting_table/machine/semi_fluid_generator' })
    event.shaped('techreborn:semi_fluid_generator', [
        'F',
        'S',
        'A'
    ], {
        F: 'create:fluid_tank',
        S: 'techreborn:solid_fuel_generator',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/solid_fuel_generator' })   //火力发电机
    event.shaped('techreborn:solid_fuel_generator', [
        'R',
        'F',
        'B'
    ], {
        R: 'techreborn:red_cell_battery',
        F: 'minecraft:furnace',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/thermal_generator' })   //热力发电机
    event.shaped('techreborn:thermal_generator', [
        'F',
        'S',
        'I'
    ], {
        F: 'create:fluid_tank',
        S: 'techreborn:solid_fuel_generator',
        I: 'techreborn:industrial_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/water_mill' })   //水力发电机
    event.shaped('techreborn:water_mill', [
        'W',
        'B'
    ], {
        W: 'create:water_wheel',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/wind_mill_alt' })   //风力发电机
    event.remove({ id: 'techreborn:crafting_table/machine/wind_mill' })
    event.shaped('techreborn:wind_mill', [
        'P',
        'A'
    ], {
        P: 'create:propeller',
        A: 'techreborn:advanced_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/drain' })   //抽水机
    event.shaped('techreborn:drain', [
        'M',
        'B'
    ], {
        M: 'create:mechanical_pump',
        B: 'techreborn:basic_machine_frame'
    })

    event.remove({ id: 'techreborn:crafting_table/machine/chunk_loader' })   //区块加载器

})