﻿$axure.loadCurrentPage({
  "url":"店面修改.html",
  "generationDate":new Date(1468808649560.73),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"sitemapLinksPageName",
"NewVariable",
"NewVariable1"],
  "page":{
    "packageId":"097274298fcd4da09427a0d486e4a98b",
    "type":"Axure:Page",
    "name":"店面修改",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"用例 1",
            "isNewIfGroup":false,
            "actions":[{
                "action":"setFunction",
                "description":"设置 被选中的 BaseBranchManagement/Branch_Modify_Button = &quot;true&quot;",
                "expr":{
                  "exprType":"block",
                  "subExprs":[{
                      "exprType":"fcall",
                      "functionName":"SetCheckState",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["1135688be9b54a7185c5f95638dcde9e",
"e2ccb1d50cc844b2aa5b841883ff9c7d"]},
{
                          "exprType":"stringLiteral",
                          "value":"true",
                          "stos":[]}]}]}},
{
                "action":"setFunction",
                "description":"设置 被选中的 BaseBranchManagement/BaseHome/Branch_Button = &quot;true&quot;",
                "expr":{
                  "exprType":"block",
                  "subExprs":[{
                      "exprType":"fcall",
                      "functionName":"SetCheckState",
                      "arguments":[{
                          "exprType":"pathLiteral",
                          "isThis":false,
                          "isFocused":false,
                          "isTarget":false,
                          "value":["1135688be9b54a7185c5f95638dcde9e",
"27a56cb16b5e4d56ba4fe48d52cec28d",
"abe34f13cd1a41a69a95a4bd18518ea6"]},
{
                          "exprType":"stringLiteral",
                          "value":"true",
                          "stos":[]}]}]}}]}]}},
    "diagram":{
      "objects":[{
          "id":"1135688be9b54a7185c5f95638dcde9e",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
},
          "adaptiveStyles":{
},
          "masterId":"5045b75f916f459085e36f9baedadde2"}]}},
  "masters":{
    "5045b75f916f459085e36f9baedadde2":{
      "packageId":"5045b75f916f459085e36f9baedadde2",
      "type":"Axure:Master",
      "name":"BaseBranchManagement",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"应用字体",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"27a56cb16b5e4d56ba4fe48d52cec28d",
            "label":"",
            "type":"referenceDiagramObject",
            "styleType":"referenceDiagramObject",
            "visible":true,
            "style":{
              "size":{
                "width":1400,
                "height":730}},
            "adaptiveStyles":{
},
            "masterId":"c8f61b74ddd2495991c77caa6f35fcd6"},
{
            "id":"13f6a546d575483a8aa499678ef56b8e",
            "label":"Branch_Index_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":330,
                "y":49},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"905f2fdd3e1242e8a1434be85355bfde",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":330,
                    "y":49},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"用例 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 店面查询",
                        "target":{
                          "targetType":"page",
                          "url":"店面查询.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"fa28d9850b1a4201883e6eb26a217613",
            "label":"Branch_Add_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "foreGroundFill":{
                "fillType":"solid",
                "color":0xFF000000,
                "opacity":1},
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":500,
                "y":50},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"d07bef6b38d049369454178190f675ac",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "foreGroundFill":{
                    "fillType":"solid",
                    "color":0xFF000000,
                    "opacity":1},
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":500,
                    "y":50},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"用例 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 店面添加",
                        "target":{
                          "targetType":"page",
                          "url":"店面添加.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"e2ccb1d50cc844b2aa5b841883ff9c7d",
            "label":"Branch_Modify_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "foreGroundFill":{
                "fillType":"solid",
                "color":0xFF000000,
                "opacity":1},
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":670,
                "y":49},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"42adff90748743bba0fe6ac5b35d0a8d",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "foreGroundFill":{
                    "fillType":"solid",
                    "color":0xFF000000,
                    "opacity":1},
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":670,
                    "y":49},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"用例 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 店面修改",
                        "target":{
                          "targetType":"page",
                          "url":"店面修改.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}}]}},
    "c8f61b74ddd2495991c77caa6f35fcd6":{
      "packageId":"c8f61b74ddd2495991c77caa6f35fcd6",
      "type":"Axure:Master",
      "name":"BaseHome",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"应用字体",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"9e767f35fab94669b453622ff1531b4f",
            "label":"Employee_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":140},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"744c94948aba4decbfa230f83cb35e31",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":140},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 员工管理",
                        "target":{
                          "targetType":"page",
                          "url":"员工管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"fb2d59fbc31345f7bfe32a4196424a35",
            "label":"Order_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":206},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"5c84d00f3a294e689d456e7563e14b6a",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":206},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 订单管理",
                        "target":{
                          "targetType":"page",
                          "url":"订单管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"417531bb428e47cdad0af37d6e84257c",
            "label":"Finance_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":266},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"96bcdd7bd2bc4dbeb12a725450e9b2d9",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":266},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 财务管理",
                        "target":{
                          "targetType":"page",
                          "url":"财务管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"142444f8988140138155a351ad60d240",
            "label":"Warehouse_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":331},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"5720eac11c894149985a15d56a716b46",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":331},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 仓库管理",
                        "target":{
                          "targetType":"page",
                          "url":"仓库管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"abe34f13cd1a41a69a95a4bd18518ea6",
            "label":"Branch_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":391},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"5e87102617904a00909fbc2f3d01b0e2",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":391},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 分店管理",
                        "target":{
                          "targetType":"page",
                          "url":"分店管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"a9563a7ec1034381b6f98eaeeaae9b76",
            "label":"Sales_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":452},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"cd74a442417f4103b22f0259b60da553",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":452},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 销售管理",
                        "target":{
                          "targetType":"page",
                          "url":"销售管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"d0bb6826422844d3aac7adf5d2203b8f",
            "label":"Managnment_Button",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "stateStyles":{
                "selected":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "fill":{
                    "fillType":"solid",
                    "color":0xFF009DD9}}},
              "location":{
                "x":80,
                "y":512},
              "size":{
                "width":120,
                "height":40},
              "cornerRadiusTopLeft":"5"},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"5439080a5b9b4f5e856f1f883aa59ff3",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontName":"'Applied Font Regular', 'Applied Font'",
                  "stateStyles":{
                    "selected":{
                      "fontName":"'Applied Font Regular', 'Applied Font'",
                      "fill":{
                        "fillType":"solid",
                        "color":0xFF009DD9}}},
                  "location":{
                    "x":80,
                    "y":512},
                  "size":{
                    "width":120,
                    "height":40},
                  "cornerRadiusTopLeft":"5"},
                "adaptiveStyles":{
}}],
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"Case 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 公司管理",
                        "target":{
                          "targetType":"page",
                          "url":"公司管理.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true,
            "images":{
              "normal~":"images/登录成功/employee_button_u1.png",
              "selected~":"images/登录成功/employee_button_u1_selected.png"}},
{
            "id":"6b2d5845710e41e594f558ff5d7350ca",
            "label":"",
            "type":"horizontalLine",
            "styleType":"horizontalLine",
            "visible":true,
            "style":{
              "location":{
                "x":270,
                "y":170},
              "size":{
                "width":1130,
                "height":10}},
            "adaptiveStyles":{
},
            "images":{
              "start~":"resources/images/transparent.gif",
              "end~":"resources/images/transparent.gif",
              "line~":"images/登录成功/u15_line.png"}},
{
            "id":"1f58c260cd7d47799cdaff3e4fbcd736",
            "label":"",
            "type":"verticalLine",
            "styleType":"verticalLine",
            "visible":true,
            "style":{
              "location":{
                "x":250,
                "y":10},
              "size":{
                "width":10,
                "height":720}},
            "adaptiveStyles":{
},
            "images":{
              "start~":"resources/images/transparent.gif",
              "end~":"resources/images/transparent.gif",
              "line~":"images/登录成功/u16_line.png"}},
{
            "id":"66e03636cf334a719a29568e4a2bc515",
            "label":"",
            "type":"button",
            "styleType":"button",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "location":{
                "x":150,
                "y":10},
              "size":{
                "width":100,
                "height":25}},
            "adaptiveStyles":{
},
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"用例 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 登录页面",
                        "target":{
                          "targetType":"page",
                          "url":"登录页面.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true},
{
            "id":"3a3718309ea4491b9789279dcd418245",
            "label":"",
            "type":"button",
            "styleType":"button",
            "visible":true,
            "style":{
              "fontName":"'Applied Font Regular', 'Applied Font'",
              "location":{
                "x":20,
                "y":10},
              "size":{
                "width":100,
                "height":25}},
            "adaptiveStyles":{
},
            "interactionMap":{
              "onClick":{
                "description":"OnClick",
                "cases":[{
                    "description":"用例 1",
                    "isNewIfGroup":false,
                    "actions":[{
                        "action":"linkWindow",
                        "description":"在 当前窗口 打开 个人信息设置",
                        "target":{
                          "targetType":"page",
                          "url":"个人信息设置.html",
                          "includeVariables":true},
                        "linkType":"current"}]}]}},
            "tabbable":true}]}}},
  "objectPaths":{
    "1135688be9b54a7185c5f95638dcde9e":{
      "scriptId":"u0",
      "27a56cb16b5e4d56ba4fe48d52cec28d":{
        "scriptId":"u1",
        "9e767f35fab94669b453622ff1531b4f":{
          "scriptId":"u2"},
        "744c94948aba4decbfa230f83cb35e31":{
          "scriptId":"u3"},
        "fb2d59fbc31345f7bfe32a4196424a35":{
          "scriptId":"u4"},
        "5c84d00f3a294e689d456e7563e14b6a":{
          "scriptId":"u5"},
        "417531bb428e47cdad0af37d6e84257c":{
          "scriptId":"u6"},
        "96bcdd7bd2bc4dbeb12a725450e9b2d9":{
          "scriptId":"u7"},
        "142444f8988140138155a351ad60d240":{
          "scriptId":"u8"},
        "5720eac11c894149985a15d56a716b46":{
          "scriptId":"u9"},
        "abe34f13cd1a41a69a95a4bd18518ea6":{
          "scriptId":"u10"},
        "5e87102617904a00909fbc2f3d01b0e2":{
          "scriptId":"u11"},
        "a9563a7ec1034381b6f98eaeeaae9b76":{
          "scriptId":"u12"},
        "cd74a442417f4103b22f0259b60da553":{
          "scriptId":"u13"},
        "d0bb6826422844d3aac7adf5d2203b8f":{
          "scriptId":"u14"},
        "5439080a5b9b4f5e856f1f883aa59ff3":{
          "scriptId":"u15"},
        "6b2d5845710e41e594f558ff5d7350ca":{
          "scriptId":"u16"},
        "1f58c260cd7d47799cdaff3e4fbcd736":{
          "scriptId":"u17"},
        "66e03636cf334a719a29568e4a2bc515":{
          "scriptId":"u18"},
        "3a3718309ea4491b9789279dcd418245":{
          "scriptId":"u19"}},
      "13f6a546d575483a8aa499678ef56b8e":{
        "scriptId":"u20"},
      "905f2fdd3e1242e8a1434be85355bfde":{
        "scriptId":"u21"},
      "fa28d9850b1a4201883e6eb26a217613":{
        "scriptId":"u22"},
      "d07bef6b38d049369454178190f675ac":{
        "scriptId":"u23"},
      "e2ccb1d50cc844b2aa5b841883ff9c7d":{
        "scriptId":"u24"},
      "42adff90748743bba0fe6ac5b35d0a8d":{
        "scriptId":"u25"}}}});