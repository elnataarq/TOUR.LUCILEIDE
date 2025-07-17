var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "FACHADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7030408183272057,
        "pitch": -0.035326492005182786,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.2869012163396931,
          "pitch": 0.144397978189021,
          "rotation": 0,
          "target": "1-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garagem",
      "name": "GARAGEM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6577764609425714,
        "pitch": 0.011017906216981288,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.5009656428380325,
          "pitch": 0.2552063980041108,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": 0.9392240194649393,
          "pitch": 0.3088631614603923,
          "rotation": 0.7853981633974483,
          "target": "2-hall-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-",
      "name": "HALL ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6270689078411493,
          "pitch": 0.3006821637198094,
          "rotation": 0,
          "target": "3-sala-estar"
        },
        {
          "yaw": 0.9504245403936125,
          "pitch": 0.4416722987456936,
          "rotation": 4.71238898038469,
          "target": "4-sala-tv"
        },
        {
          "yaw": -1.7826355681352872,
          "pitch": 0.21558901424296906,
          "rotation": 4.71238898038469,
          "target": "1-garagem"
        },
        {
          "yaw": 1.7577490875030328,
          "pitch": 0.2195828417744039,
          "rotation": 1.5707963267948966,
          "target": "5-suite-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-estar",
      "name": "SALA ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1955621688500173,
        "pitch": 0.06822265068804967,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.233978978468505,
          "pitch": 0.40999206946185396,
          "rotation": 0,
          "target": "2-hall-"
        },
        {
          "yaw": -0.8989096509980445,
          "pitch": 0.23462048985219042,
          "rotation": 0,
          "target": "1-garagem"
        },
        {
          "yaw": 1.7201023006713454,
          "pitch": 0.29345694115791865,
          "rotation": 0,
          "target": "8-sala-jantar"
        },
        {
          "yaw": -0.4048473004095605,
          "pitch": 0.463858106255989,
          "rotation": 13.351768777756625,
          "target": "16-mezanino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala-tv",
      "name": "SALA TV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.919846945782635,
        "pitch": 0.27900410903198036,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.4025809985660995,
          "pitch": 0.5341825952668984,
          "rotation": 1.5707963267948966,
          "target": "2-hall-"
        },
        {
          "yaw": -0.0934076649510942,
          "pitch": 0.23236531197247778,
          "rotation": 0,
          "target": "5-suite-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-suite-01",
      "name": "SUITE 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.11495513256711298,
        "pitch": 0.008189717450818534,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.9277162267098493,
          "pitch": 0.16650640391712557,
          "rotation": 0,
          "target": "2-hall-"
        },
        {
          "yaw": -0.7457463984782535,
          "pitch": 0.0488708968755418,
          "rotation": 1.5707963267948966,
          "target": "6-closet-s01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-closet-s01",
      "name": "CLOSET S01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1272120671670045,
          "pitch": 0.21981303496833782,
          "rotation": 0,
          "target": "7-bwc-s01"
        },
        {
          "yaw": -2.425630963398273,
          "pitch": 0.3569255268458402,
          "rotation": 4.71238898038469,
          "target": "5-suite-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bwc-s01",
      "name": "BWC S01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8744172590568677,
          "pitch": 0.4643888560029694,
          "rotation": 0,
          "target": "6-closet-s01"
        },
        {
          "yaw": -0.4656684008632155,
          "pitch": 0.3657592659215396,
          "rotation": 7.853981633974483,
          "target": "6-closet-s01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sala-jantar",
      "name": "SALA JANTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.040860014887187,
        "pitch": 0.21766242360588706,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.826677092263253,
          "pitch": 0.4317180276810664,
          "rotation": 0,
          "target": "3-sala-estar"
        },
        {
          "yaw": 1.860163774353147,
          "pitch": 0.2753760278708679,
          "rotation": 0,
          "target": "9-cozinha"
        },
        {
          "yaw": 2.015687229950502,
          "pitch": 0.10059663000469143,
          "rotation": 0,
          "target": "14-cozinha-apoio"
        },
        {
          "yaw": 0.7239498929982098,
          "pitch": 0.22643228075230937,
          "rotation": 0,
          "target": "11-varanda-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9469071475591804,
        "pitch": 0.2977518611865406,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.0026213087898963,
          "pitch": 0.2964216555809589,
          "rotation": 0,
          "target": "8-sala-jantar"
        },
        {
          "yaw": 1.5668493515742687,
          "pitch": 0.11139339025208095,
          "rotation": 0,
          "target": "10-gourmet"
        },
        {
          "yaw": 2.1481599917235226,
          "pitch": 0.2604704496580599,
          "rotation": 0,
          "target": "11-varanda-gourmet"
        },
        {
          "yaw": -1.724322808479025,
          "pitch": 0.2761016627913797,
          "rotation": 1.5707963267948966,
          "target": "15-rea-servio"
        },
        {
          "yaw": -1.989853841524683,
          "pitch": 0.33489533455301057,
          "rotation": 5.497787143782138,
          "target": "14-cozinha-apoio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gourmet",
      "name": "GOURMET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.727769363039167,
          "pitch": 0.15692170957763807,
          "rotation": 0,
          "target": "8-sala-jantar"
        },
        {
          "yaw": 2.374795838405494,
          "pitch": 0.15336780548760842,
          "rotation": 0,
          "target": "9-cozinha"
        },
        {
          "yaw": 1.5877345931289781,
          "pitch": 0.17898214155222192,
          "rotation": 0,
          "target": "11-varanda-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-varanda-gourmet",
      "name": "VARANDA GOURMET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8032387580186153,
        "pitch": 0.10412417452562117,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.0497077596281112,
          "pitch": 0.15873706696447876,
          "rotation": 0,
          "target": "13-bwc-lazer"
        },
        {
          "yaw": -0.48810533579070814,
          "pitch": 0.3792845748648457,
          "rotation": 0,
          "target": "12-piscina"
        },
        {
          "yaw": -2.1286617655281432,
          "pitch": 0.18119390358109477,
          "rotation": 0,
          "target": "10-gourmet"
        },
        {
          "yaw": -2.948246453905167,
          "pitch": 0.2569333401369942,
          "rotation": 0,
          "target": "8-sala-jantar"
        },
        {
          "yaw": 2.696173883869734,
          "pitch": 0.20588861090267052,
          "rotation": 0,
          "target": "9-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-piscina",
      "name": "PISCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.900196836540534,
        "pitch": -0.2252384185431069,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.0996864595088702,
          "pitch": -0.020832835932399263,
          "rotation": 0,
          "target": "11-varanda-gourmet"
        },
        {
          "yaw": 1.7708726605961864,
          "pitch": 0.04585659163386602,
          "rotation": 0,
          "target": "10-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bwc-lazer",
      "name": "BWC LAZER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6170065764982873,
        "pitch": 0.7727018517616671,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -3.022367316433199,
          "pitch": 0.46840416231538384,
          "rotation": 0,
          "target": "11-varanda-gourmet"
        },
        {
          "yaw": -2.5859173253535257,
          "pitch": 0.37602734473668065,
          "rotation": 0,
          "target": "12-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-cozinha-apoio",
      "name": "COZINHA APOIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.38814971592405456,
          "pitch": 0.2490973676623085,
          "rotation": 0,
          "target": "9-cozinha"
        },
        {
          "yaw": -0.999583676317986,
          "pitch": 0.18807393914863546,
          "rotation": 4.71238898038469,
          "target": "15-rea-servio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-rea-servio",
      "name": "ÁREA SERVIÇO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0795955345568897,
        "pitch": 0.5808885272476711,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "16-mezanino",
      "name": "MEZANINO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.801556761907266,
        "pitch": 0.36361231036620545,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.9372641652248985,
          "pitch": 0.16714386797945835,
          "rotation": 0,
          "target": "17-suite-master"
        },
        {
          "yaw": 2.8852804653935955,
          "pitch": 0.042139784259825674,
          "rotation": 0,
          "target": "21-suite-02"
        },
        {
          "yaw": 3.1262555829687946,
          "pitch": -0.021764640968648052,
          "rotation": 4.71238898038469,
          "target": "24-suite-03"
        },
        {
          "yaw": -3.0559296339335464,
          "pitch": -0.14548246546114996,
          "rotation": 0,
          "target": "27-escritrio"
        },
        {
          "yaw": -2.8632900693764896,
          "pitch": 0.7036324593299543,
          "rotation": 0,
          "target": "3-sala-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-suite-master",
      "name": "SUITE MASTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.8925356830609985,
        "pitch": 0.12876282438571351,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.0188922904800393,
          "pitch": 0.19697843480074084,
          "rotation": 0.7853981633974483,
          "target": "16-mezanino"
        },
        {
          "yaw": 1.2048677574889144,
          "pitch": 0.38867268597093485,
          "rotation": 0,
          "target": "18-varanda"
        },
        {
          "yaw": 0.1466450270749604,
          "pitch": 0.11042818776562413,
          "rotation": 0,
          "target": "20-closet-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-varanda",
      "name": "VARANDA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7160649527000986,
          "pitch": 0.5136854522100656,
          "rotation": 0,
          "target": "17-suite-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bwc-master",
      "name": "BWC MASTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.057860639741854,
        "pitch": 0.2805178432524684,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -3.0918716709246254,
          "pitch": 0.44798499431615824,
          "rotation": 0,
          "target": "20-closet-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-closet-master",
      "name": "CLOSET MASTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8604226675996927,
        "pitch": 0.4777340786151889,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.3170710971636517,
          "pitch": 0.544738593584567,
          "rotation": 0.7853981633974483,
          "target": "19-bwc-master"
        },
        {
          "yaw": 1.4829763216060154,
          "pitch": 0.4073960699557997,
          "rotation": 0,
          "target": "17-suite-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-suite-02",
      "name": "SUITE 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9491304397299096,
        "pitch": 0.04811583488108795,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -0.9927434953110676,
          "pitch": 0.12093168157130663,
          "rotation": 0,
          "target": "16-mezanino"
        },
        {
          "yaw": -0.3560879479993382,
          "pitch": 0.12378325274741897,
          "rotation": 0,
          "target": "22-closet-s02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-closet-s02",
      "name": "CLOSET S02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8761710069005133,
        "pitch": 0.34775517803684153,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.7959503231762586,
          "pitch": 0.3679066746446207,
          "rotation": 0,
          "target": "23-bwc-s02"
        },
        {
          "yaw": -3.1129323064757486,
          "pitch": 0.5889642652539582,
          "rotation": 0,
          "target": "21-suite-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bwc-s02",
      "name": "BWC S02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6710710571988852,
        "pitch": 0.630807391623053,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.435606483456631,
          "pitch": 0.4207980140509804,
          "rotation": 0,
          "target": "22-closet-s02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-suite-03",
      "name": "SUITE 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11175552305495273,
          "pitch": 0.050001457733943155,
          "rotation": 4.71238898038469,
          "target": "16-mezanino"
        },
        {
          "yaw": 0.9854168322103511,
          "pitch": 0.1441998142741312,
          "rotation": 0.7853981633974483,
          "target": "25-closet-s03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-closet-s03",
      "name": "CLOSET S03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0893916359305038,
        "pitch": 0.4312735064539499,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.4146908910096787,
          "pitch": 0.7365853063954617,
          "rotation": 4.71238898038469,
          "target": "24-suite-03"
        },
        {
          "yaw": -1.620146443775111,
          "pitch": 0.4877853303040425,
          "rotation": 0,
          "target": "26-bwc-s03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bwc-s03",
      "name": "BWC S03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1100994431294566,
        "pitch": 0.5491445170680365,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 2.745580805856295,
          "pitch": 0.5368532260320471,
          "rotation": 0,
          "target": "25-closet-s03"
        },
        {
          "yaw": 3.0104207771503475,
          "pitch": 0.45580740713809575,
          "rotation": 7.853981633974483,
          "target": "24-suite-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-escritrio",
      "name": "ESCRITÓRIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.31910502438991273,
        "pitch": 0.45916732608635336,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.460937984882782,
          "pitch": 0.29448487510275534,
          "rotation": 0,
          "target": "16-mezanino"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
