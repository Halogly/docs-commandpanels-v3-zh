# 占位符

| 占位符                               | 描述                                                                                                                                                              |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `%cp-player-displayname%`         | 玩家显示名称。                                                                                                                                                         |
| `%cp-player-name%`                | 玩家名称。                                                                                                                                                           |
| `%cp-player-x%`                   | 玩家的X轴坐标。                                                                                                                                                        |
| `%cp-player-y%`                   | 玩家的Y轴坐标。                                                                                                                                                        |
| `%cp-player-z%`                   | 玩家的Z轴坐标。                                                                                                                                                        |
| `%cp-player-input%`               | 与物品配置中的`player-input`配合使用。                                                                                                                                      |
| `%cp-player-world%`               | 玩家当前所处的世界。                                                                                                                                                      |
| `%cp-player-balance%`             | 玩家余额（需要Vault或其他经济插件）。                                                                                                                                           |
| `%cp-player-online-<数值>%`         | 按在线玩家列表的排序获取指定位置的玩家，如`%cp-player-online-1%`获取第一位在线玩家。如果服务器只有1人，查询第2位将返回离线状态。                                                                                    |
| `%cp-player-online-<数值>-visible%` | 忽略隐身玩家（通过检查隐身元数据）。                                                                                                                                              |
| `%cp-checkinv-<材料:数量>%`           | 检查玩家是否拥有指定材料和数量的物品。                                                                                                                                             |
| `%cp-material-<槽位编号>%`            | 获取面板中指定槽位的材料类型。在1.8.8至1.12.2版本中会显示带ID的格式：`WOOD:5`。                                                                                                              |
| `%cp-nbt-<槽位编号:类型:键名>%`           | 读取物品的NBT数据。需指定槽位编号和NBT键名。支持类型：**string**（字符串）、**integer**（整型）、**double**（双精度浮点型）、**float**（单精度浮点型）、**long**（长整型）、**short**（短整型）、**boolean**（布尔型）、**byte**（字节型）。 |
| `%cp-stack-<槽位编号>%`               | 获取面板中指定槽位的物品堆叠数量。                                                                                                                                               |
| `%cp-name-<槽位编号>%`                | 获取面板中指定槽位的物品名称。                                                                                                                                                 |
| `%cp-lore-<槽位编号>%`                | 获取面板中指定槽位的物品描述信息，使用`\n`表示换行。                                                                                                                                    |
| `%cp-damaged-<槽位编号>%`             | 检查指定槽位的物品是否受损，返回`true`或`false`。                                                                                                                                 |
| `%cp-potion-<槽位编号>%`              | 返回药水数据，格式为`[类型]:[延长]:[强化]`，例：`SLOWNESS:true:false`，无数据时返回`empty`。                                                                                               |
| `%cp-modeldata-<槽位编号>%`           | 获取指定槽位物品的模型数据值。                                                                                                                                                 |
| `%cp-identical-<自定义物品>,<槽位编号>%`   | 判断面板中指定槽位的物品是否与自定义物品列表中的物品完全相同。                                                                                                                                 |
| `%cp-data-<数据名称>%`                | 获取当前玩家的指定数据值，若数据不存在则保持原占位符不变。                                                                                                                                   |
| `%cp-data-<数据名称>,<玩家名称>%`         | 获取指定玩家的数据值。                                                                                                                                                     |
| `%cp-setdata-<数据名称>,<数据值>%`       | 通过占位符直接设置数据值，无需点击物品即可修改数据（功能类似`set-data=`），例：`%cp-setdata-playerTeam,yellow%`。                                                                                  |
| `%cp-mathdata-<数据名称>,<数据值>%`      | 对数值型数据进行数学运算（功能类似`math-data=`），例：`%cp-mathdata-playerMoney,+1%`。                                                                                                |
| `%cp-random-<最小值>,<最大值>%`         | 生成指定范围内的随机整数，例：`%cp-random-1,10%`。                                                                                                                              |
| `%cp-uuid-<玩家名称>%`                | 获取玩家的UUID，如果玩家从未进入服务器则返回`unknown`。                                                                                                                              |
| `%cp-online-players%`             | 在线玩家数量。                                                                                                                                                         |
| `%cp-online-players-visible%`     | 不包括隐身玩家的在线玩家数量（通过检查隐身元数据）。                                                                                                                                      |
| `%cp-panel-position%`             | 返回当前面板的位置：`Top`、`Middle`或`Bottom`。                                                                                                                              |
| `%cp-clicked%`                    | 获取面板中被点击物品的材料（仅限`command`属性使用）。                                                                                                                                 |
| `%cp-tag%`                        | 显示插件的前缀，默认为`[CommandPanels]`。                                                                                                                                   |
| `%cp-server-<IP>:<端口>%`           | 检查指定服务器的状态，在线返回`true`，离线返回`false`。                                                                                                                              |

# 内置占位符嵌套

如果需要在其他占位符内使用CommandPanels占位符，可以使用配置中设置的次级符号。例如：`%cp-data-bans,{cp-player-name}%`。

以下示例展示如何为特定面板自定义占位符符号（仅对当前面板生效）：

```yaml
placeholders:
  primary:
    start: $
    end: $
  secondary:
    start: '{'
    end: '}'
```

# 外部占位符使用

如需在其他插件中使用上述占位符，请按本步骤操作（需要安装PlaceholderAPI且目标插件支持PlaceholderAPI）：

只需将原占位符的语法进行如下转换：

转换前1：`%cp-data-example%`

转换前2：`%cp-setdata-example,test1%`

转换后1：`%commandpanels_data-example%`

转换后2：`%commandpanels_setdata-example,test1%`

如你所见，只需将占位符中的`cp-`替换为`commandpanels_`即可。