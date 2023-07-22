// priority: 0

console.info('以下为startup.js的加载')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('sddl').displayName('说的道理').tooltip('测试物品')
	event.create('chromatic_paint_ball').displayName('异彩染色球').rarity('uncommon')
	event.create('cosmilite_ingot').displayName('宇宙锭').rarity('epic')
	event.create('redstone_alloy_ingot').displayName('红石合金锭')
	event.create('redstone_alloy_cable').displayName('红石合金线缆')
	event.create('iron_pin').displayName('铁引脚')
	event.create('copper_pin').displayName('铜引脚')
	event.create('golden_pin').displayName('金引脚')
	event.create('fiberglass_plate').displayName('玻璃纤维板')
	event.create('incomplete_pcb').displayName('未完成的PCB')
	event.create('pcb').displayName('PCB')
	event.create('incomplete_electronic_circuit').displayName('未完成的电路板')
    event.create('ender_mechanism').displayName('末影构件')
	event.create('calculation_mechanism').displayName('计算构件')
	event.create('logistics_mechanism').displayName('物流构件')
	event.create('infernal_mechanism').displayName('下界构件')
	event.create('integrated_mechanism').displayName('集成构件')
	event.create('sealed_mechanism').displayName('密封构件')
	event.create('incomplete_ender_mechanism').displayName('未完成的末影构件')
	event.create('incomplete_calculation_mechanism').displayName('未完成的计算构件')
	event.create('incomplete_logistics_mechanism').displayName('未完成的物流构件')
	event.create('incomplete_infernal_mechanism').displayName('未完成的下界构件')
	event.create('incomplete_integrated_mechanism').displayName('未完成的集成构件')
	event.create('incomplete_sealed_mechanism').displayName('未完成的密封构件')

})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('machine_frame').displayName('机械框架').hardness(1).tagBlock('minecraft:mineable/pickaxe').material('stone')
})

StartupEvents.registry('fluid', event => {
	event.create('chromatic_fluid')
		.displayName('异彩溶液')
		.stillTexture('kubejs:fluid/chromatic_fluid_still')
		.flowingTexture('kubejs:fluid/chromatic_fluid_flow')
		.bucketColor('#84416E')

	event.create('ethylene')
		.displayName('乙烯')
		.thickTexture('#CCCCCC')
		.thinTexture('#CCCCCC')

	event.create('molten_glass')
		.displayName('熔融玻璃')
		.stillTexture('kubejs:fluid/molten_glass_still')
		.flowingTexture('kubejs:fluid/molten_glass_flow')
		.bucketColor('#FF8E36')

	event.create('soldermask')
		.displayName('阻焊')
		.thickTexture('#8D87B0')
		.thinTexture('#8D87B0')

})
