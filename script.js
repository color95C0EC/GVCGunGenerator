

function generate() {
    // 生成方法
    const genTypeCopy = document.getElementById("gen-type-copy").checked;
    const genTypeJson = document.getElementById("gen-type-json").checked;
    // console.log("click");

    // 要素取る
    const gunName = document.getElementById("gun-name-input");
    const ammoMax = document.getElementById("ammo-max-input");


    // コマブロ用
    if (genTypeCopy == true) {
        const outputCommand = `give @p `
    }


    // JSON
    if (genTypeJson == true) {

        const jsonContent = {
            "pools": [
                {
                    "rolls": 1,
                    "entries": [
                        {
                            "type": "minecraft:item",
                            "name": "minecraft:warped_fungus_on_a_stick",
                            "functions": [
                                {
                                    "function": "minecraft:set_components",
                                    "components": {
                                        "minecraft:item_name": gunName,
                                        "minecraft:lore": [
                                            {
                                                "text": `最大装弾数 : ${ammoMax}`,
                                                "color": "red"
                                            },
                                            {
                                                "text": "弾種 : .22Cal弾",
                                                "color": "green"
                                            },
                                            {
                                                "text": "弾種 : 5.56mmAR弾",
                                                "color": "green"
                                            },
                                            {
                                                "text": "威力 + 6",
                                                "color": "white"
                                            },
                                            {
                                                "text": "弾速 + 8.0",
                                                "color": "white"
                                            },
                                            {
                                                "text": "集弾率 × 1.25/0.25",
                                                "color": "white"
                                            },
                                            {
                                                "text": "反動 + 2.0/0.5",
                                                "color": "white"
                                            },
                                            {
                                                "text": "リロード時間 + 60 tick",
                                                "color": "yellow"
                                            },
                                            {
                                                "text": "移動速度 × 1.00 ms",
                                                "color": "yellow"
                                            },
                                            {
                                                "text": "ズーム倍率 × 1.20",
                                                "color": "white"
                                            }
                                        ],
                                        "minecraft:max_damage": ammoMax,
                                        "minecraft:item_model": "gvctex:item/gun/ar/gvcr2_hk416",
                                        "custom_model_data": {
                                            "strings": [
                                                "None-None-None-None"
                                            ]
                                        },
                                        "minecraft:custom_data": {
                                            "itemId": "gvcr2:gun_ar_hk416",
                                            "gvcGun": {
                                                "ammo": ammoMax,
                                                "zoomADS": 0.083,
                                                "common": {
                                                    "shot": true,
                                                    "reload": true
                                                },
                                                "shot": {
                                                    "burstCount": 2,
                                                    "burstCycle": 2,
                                                    "cycle": 0,
                                                    "sound": "gvctex:fire.rifle_ar",
                                                    "bulletSpeed": 80,
                                                    "recoil": 1.0,
                                                    "recoilADS": 0.25,
                                                    "damage": 6,
                                                    "bulletParticle": 1,
                                                    "spread": 1200,
                                                    "spreadADS": 250,
                                                    "bulletCount": 1,
                                                    "removeAmmoPerShot": 1,
                                                    "hitSound": 1,
                                                    "hitKillTime": 80,
                                                    "hitKillParticle": 1,
                                                    "ejectionCartridge": {
                                                        "pos": {
                                                            "x": 0,
                                                            "y": 0,
                                                            "z": 0
                                                        },
                                                        "motion": [
                                                            0,
                                                            0,
                                                            0
                                                        ]
                                                    },
                                                    "mobStatus": {
                                                        "shotRange": 50,
                                                        "cycle": 30,
                                                        "burstCount": 3,
                                                        "burstCycle": 2
                                                    }
                                                },
                                                "reload": {
                                                    "reloading": false,
                                                    "time": 60,
                                                    "ammoMax": ammoMax,
                                                    "ammoModel": "gvctex:item/item/bullet/22cal_556mm",
                                                    "timeRemaining": 0,
                                                    "sound": "gvctex:reload.mag"
                                                },
                                                "attachment": {
                                                    "attachableType": [],
                                                    "attachedId": {
                                                        "muzzle": "None",
                                                        "sight": "None",
                                                        "light": "None",
                                                        "underBarrel": "None"
                                                    },
                                                    "attachedItemLoot": []
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }



    }





}


document.getElementById("gen-btn").addEventListener("click", generate);
