console.info('以下为create.js的加载')

ServerEvents.recipes(event => {

    event.remove({ id: 'create:crafting/materials/electron_tube' })                   //电子管
    event.remove({ id: 'createplus:vanilla/sequenced_assembly/electron_tube' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "create:polished_rose_quartz" },
        "transitionalItem": { "item": "create:polished_rose_quartz" },
        "loops": 1,

        "sequence":
            [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "create:polished_rose_quartz" }, { "tag": "c:iron_plates" }],
                    "results": [{ "item": "create:polished_rose_quartz" }]
                },

                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "create:polished_rose_quartz" }, { "item": "kubejs:iron_pin" }],
                    "results": [{ "item": "create:polished_rose_quartz" }]
                },

                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "create:polished_rose_quartz" }, { "item": "kubejs:iron_pin" }],
                    "results": [{ "item": "create:electron_tube" }]
                }
            ],

        "results": [{ "item": "create:electron_tube" }]
    })

    event.custom({                                                            //余烬面粉洗涤
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "create:cinder_flour"
            }
        ],
        "results": [
            {
                "item": "minecraft:redstone",
                "chance": 0.2,
            },
            {
                "item": "minecraft:glowstone_dust",
                "chance": 0.2,
            },
            {
                "item": "minecraft:gunpowder",
                "chance": 0.2,
            }
        ]
    })

    event.custom({                                                            //下界岩
        "type": "create:haunting",
        "ingredients": [{ "item": "minecraft:blackstone" }],
        "results": [{ "item": "minecraft:netherrack" }]
    })

    event.custom({                                                            //煤炭
        "type": "create:haunting",
        "ingredients": [{ "item": "minecraft:charcoal" }],
        "results": [{ "item": "minecraft:coal" }]
    })

    event.remove({ id: 'create:compacting/blaze_cake' })
    event.custom({                                                            //烈焰蛋糕
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "create:dough"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "create:cinder_flour"
            }
        ],
        "results": [{ "item": "create:blaze_cake_base" }]
    })

})