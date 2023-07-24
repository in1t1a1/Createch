console.info('以下为ae2.js的加载')

ServerEvents.recipes(event => {

    event.remove({ id: 'ae2:network/blocks/io_condenser' })

    event.remove({ id: 'createplus:ae2/sequenced_assembly/pressing/calculation_processor_press' })//运算压印模板
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "c:plates/iron" },
        "transitionalItem": { "item": "techreborn:iron_plate" },
        "loops": 1,

        "sequence":
            [
                {
                    "keepHeldItem": true,
                    "type": "create:deploying",
                    "ingredients": [{ "tag": "c:plates/iron" }, { "item": "ae2:calculation_processor_press" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                },

                {
                    "type": "create:cutting",
                    "ingredients": [{ "item": "techreborn:iron_plate" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                }
            ],

        "results": [{ "item": "ae2:calculation_processor_press", "count": 2 }]
    })

    event.remove({ id: 'createplus:ae2/sequenced_assembly/pressing/engineering_processor_press' })//工程压印模板
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "c:plates/iron" },
        "transitionalItem": { "item": "techreborn:iron_plate" },
        "loops": 1,

        "sequence":
            [
                {
                    "keepHeldItem": true,
                    "type": "create:deploying",
                    "ingredients": [{ "tag": "c:plates/iron" }, { "item": "ae2:engineering_processor_press" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                },

                {
                    "type": "create:cutting",
                    "ingredients": [{ "item": "techreborn:iron_plate" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                }
            ],

        "results": [{ "item": "ae2:engineering_processor_press", "count": 2 }]
    })

    event.remove({ id: 'createplus:ae2/sequenced_assembly/pressing/logic_processor_press' })//逻辑压印模板
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "c:plates/iron" },
        "transitionalItem": { "item": "techreborn:iron_plate" },
        "loops": 1,

        "sequence":
            [
                {
                    "keepHeldItem": true,
                    "type": "create:deploying",
                    "ingredients": [{ "tag": "c:plates/iron" }, { "item": "ae2:logic_processor_press" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                },

                {
                    "type": "create:cutting",
                    "ingredients": [{ "item": "techreborn:iron_plate" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                }
            ],

        "results": [{ "item": "ae2:logic_processor_press", "count": 2 }]
    })

    event.remove({ id: 'createplus:ae2/sequenced_assembly/pressing/silicon_press' })//硅压印模板
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "tag": "c:plates/iron" },
        "transitionalItem": { "item": "techreborn:iron_plate" },
        "loops": 1,

        "sequence":
            [
                {
                    "keepHeldItem": true,
                    "type": "create:deploying",
                    "ingredients": [{ "tag": "c:plates/iron" }, { "item": "ae2:silicon_press" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                },

                {
                    "type": "create:cutting",
                    "ingredients": [{ "item": "techreborn:iron_plate" }],
                    "results": [{ "item": "techreborn:iron_plate" }]
                }
            ],

        "results": [{ "item": "ae2:silicon_press", "count": 2 }]
    })

    event.custom({                                                             //物质球
        "type": "create:compacting",
        "ingredients": [{ "item": "create:crushing_wheel" }],
        "results": [{ "item": "ae2:matter_ball", "count": 16 }]
    })

    event.custom({                                                            //奇点
        "type": "create:crushing",
        "ingredients": [{ "item": "create:crushing_wheel" }],
        "results": [{ "item": "ae2:singularity" }]
    })

    event.custom({                                                             //无瑕的赛特斯石英母岩
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "ae2:flawed_budding_quartz"
            },
            {
                "item": "create:refined_radiance"
            }
        ],
        "result": {
            "item": "ae2:flawless_budding_quartz"
        }
    })

    event.custom({                                                            //末影粉
        "type": "create:crushing",
        "ingredients": [{ "item": "minecraft:chorus_fruit" }],
        "results": [{ "item": "ae2:ender_dust" }]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:chorus_fruit"
            }
        ],
        "processingTime": 50,
        "results": [
            {
                "item": "ae2:ender_dust"
            },
        ]
    })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "minecraft:chorus_fruit"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:ender_dust"
        }
    })

})