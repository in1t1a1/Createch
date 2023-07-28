console.info('以下为custom.js的加载')

ServerEvents.recipes(event => {
    event.custom({                                                             //异彩溶液
        "type": "create:mixing",
        "ingredients": [{ "item": "ae2:red_lumen_paint_ball" }, { "item": "ae2:green_lumen_paint_ball" }, { "item": "ae2:blue_lumen_paint_ball" }],
        "results": [{ "fluid": "kubejs:chromatic_fluid", "amount": 81000 }],
        "heatRequirement": "superheated"
    })

    event.custom({                                                             //异彩染色球
        "type": "create:filling",
        "ingredients": [{ "item": "ae2:matter_ball" }, { "fluid": "kubejs:chromatic_fluid", "amount": 8100 }],
        "results": [{ "item": "kubejs:chromatic_paint_ball" }]
    })

    event.custom({                                                             //宇宙锭
        "type": "create:mixing",
        "ingredients": [{ "item": "create:refined_radiance" }, { "item": "techreborn:uu_matter" }, { "item": "create:shadow_steel" }],
        "results": [{ "item": "kubejs:cosmilite_ingot" }],
        "heatRequirement": "superheated"
    })

    event.stonecutting('minecraft:iron_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('minecraft:copper_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('minecraft:gold_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('minecraft:netherite_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('create:zinc_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:aluminum_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:chrome_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:iridium_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:lead_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:nickel_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:platinum_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:silver_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:tin_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:titanium_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:tungsten_ingot', 'kubejs:cosmilite_ingot')
    event.stonecutting('techreborn:zinc_ingot', 'kubejs:cosmilite_ingot')

    event.custom({                                                        //铁引脚
        "type": "createaddition:rolling",
        "input": {
            "item": "minecraft:iron_nugget"
        },
        "result": {
            "item": "kubejs:iron_pin",
            "count": 1
        }
    })

    event.custom({                                                        //铜引脚
        "type": "createaddition:rolling",
        "input": {
            "tag": "c:copper_nuggets"
        },
        "result": {
            "item": "kubejs:copper_pin",
            "count": 1
        }
    })

    event.custom({                                                        //金引脚
        "type": "createaddition:rolling",
        "input": {
            "item": "minecraft:gold_nugget"
        },
        "result": {
            "item": "kubejs:golden_pin",
            "count": 1
        }
    })

    event.custom({                                                             //熔融玻璃
        "type": "create:mixing",
        "ingredients": [{ "item": "minecraft:glass" }],
        "results": [{ "fluid": "kubejs:molten_glass", "amount": 81000 }],
        "heatRequirement": "heated"
    })

    event.custom({                                                             //玻璃纤维板
        "type": "create:compacting",
        "ingredients": [
            {
                "fluid": "kubejs:molten_glass",
                "nbt": {},
                "amount": 8100
            }
        ],
        "results": [
            {
                "item": "kubejs:fiberglass_plate"
            }
        ]
    })

    event.custom({                                                             //阻焊
        "type": "create:mixing",
        "ingredients": [{ "item": "techreborn:lazurite_dust" }],
        "results": [{ "fluid": "kubejs:soldermask", "amount": 49000 }],
        "heatRequirement": "heated"
    })

    event.custom({                                                             //PCB
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "kubejs:fiberglass_plate" },
        "transitionalItem": { "item": "kubejs:incomplete_pcb" },
        "loops": 1,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:fiberglass_plate" }, { "tag": "c:copper_plates" }],
                    "results": [{ "item": "kubejs:incomplete_pcb" }]
                },

                {
                    "type": "create:pressing",
                    "ingredients": [{ "item": "kubejs:incomplete_pcb" }],
                    "results": [{ "item": "kubejs:incomplete_pcb" }]
                },

                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "kubejs:incomplete_pcb"
                        },
                        {
                            "amount": 8100,
                            "fluid": "kubejs:soldermask",
                            "nbt": {}
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:pcb"
                        }
                    ]
                }
            ],

        "results": [{ "item": "kubejs:pcb" }]
    })

    event.custom({                                               //未完成的的电路板
        "type": "create:deploying",
        "ingredients": [{ "item": "kubejs:pcb" }, { "item": "kubejs:integrated_mechanism" }],
        "results": [{ "item": "kubejs:incomplete_electronic_circuit" }]
    })

    event.custom({                                               //电路构件
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:precision_mechanism" },
        "transitionalItem": { "item": "kubejs:incomplete_integrated_mechanism" },
        "loops": 1,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "create:precision_mechanism" }, { "item": "create:electron_tube" }],
                    "results": [{ "item": "kubejs:incomplete_integrated_mechanism" }]
                },

                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_integrated_mechanism" }, { "item": "kubejs:redstone_alloy_cable" }],
                    "results": [{ "item": "kubejs:incomplete_integrated_mechanism" }]
                }
            ],

        "results": [{ "item": "kubejs:integrated_mechanism" }]
    })

    event.shapeless('kubejs:machine_frame', ['6x techreborn:refined_iron_plate'])//机械框架

    event.custom({                                                               //红石合金锭
        "type": "techreborn:alloy_smelter",
        "power": 6,
        "time": 200,
        "ingredients": [
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:redstone"
            }
        ],
        "results": [
            {
                "item": "kubejs:redstone_alloy_ingot",
                "count": 2
            }
        ]
    })

    event.custom({
        "type": "create:mixing",
        "ingredients": [{ "item": "minecraft:iron_ingot" }, { "item": "minecraft:redstone" }],
        "results": [{ "item": "kubejs:redstone_alloy_ingot", "count": 2 }],
        "heatRequirement": "heated"
    })

    event.custom({
        "type": "createaddition:rolling",
        "input": { "item": "kubejs:redstone_alloy_ingot" },
        "result": { "item": "kubejs:redstone_alloy_cable", "count": 4 }
    })

})