ServerEvents.recipes(event => {

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

})