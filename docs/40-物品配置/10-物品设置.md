# 物品设置

## 添加物品

物品在面板YAML文件的`item`中定义。物品可配置多种属性。本页涵盖了所有可修改物品外观的配置。

以下示例是物品的基本结构。你可以在物品槽位中使用占位符。如果使用占位符定义物品槽位，该物品不会在在线编辑器中显示。

```yaml
# 物品槽位，0表示左上角的第一个槽位
0:
  # 自定义材料
  material: IRON_INGOT
  # 物品自定义名称
  name: '加入生存服务器'
```

## 材料

物品的原材料。

```yaml
# 常规材料
material: IRON_INGOT
```

```yaml
# 自定义标签材料
material: cps= self
```

如果需要使用自定义材料，可使用下表列出的材料标签。

| 标签                     | 描述                                                                                                                     |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------|
| `cps=`                 | 用于头颅。`cps= self`使用你自己的皮肤。可使用`cps= <base64纹理值>`。或使用`cps= <用户名>`通过玩家名称创建自定义头颅。注意这可能不如使用自定义头颅高效。                          |
| `cpi=`                 | 用于面板的自定义物品。只需使用`cpi= <自定义物品名称>`即可将材料更改为该物品。查看面板设置页面的自定义物品部分了解如何创建。                                                     |
| `nexo=`                | 将**Nexo**的自定义物品添加到面板。用法：`nexo= <物品名称>`。例如：`nexo= crystal_shard`。                                                       |
| `oraxen=`              | 将**Oraxen**的自定义物品添加到面板。用法：`oraxen= <物品名称>`。例如：`oraxen= crystal_shard`。                                                 |
| `itemsadder=`          | 将**Itemsadder**的自定义物品添加到面板。用法：`itemsadder= <命名空间:ID>`。例如：`itemsadder= money:coin`。                                     |
| `hdb=`                 | 将**HeadDatabase**的头颅添加到面板。在[数据库](https://www.spigotmc.org/resources/14280/)中查找头颅并获取其编号。例如：`hdb= <编号>`。                 |
| `mmo=`                 | 将**MMOItems**的自定义物品添加到面板。用法：`mmo= <物品类型> <ID>`。                                                                        |
| `book=`                | 创建可书写的书。用法：`book= <作者>`，作者不必是真实用户名。在该物品配置下添加`write`属性（类似物品描述`lore`）作为书的内容。                                             |
| `%cp-player-online-1%` | 可更改数字1为任意数字，将检查服务器的玩家列表并找到对应位置的玩家。如果只有你一个人在线，并且设置为了数字1，则将显示你自己的头颅。如果设为2，将显示离线`offline`（因为服务器只有一名玩家），改为显示玩家头颅（史蒂夫默认头颅）。 |

## 物品类型

此处可声明物品的特殊类型。

```yaml
itemType:
  # 允许玩家取出该物品并在该格子放置其他物品
  - placeable

  # 隐藏物品属性
  - noAttributes

  # 悬停物品时不显示任何提示
  # 需同时配置物品的名称为空
  # 仅支持1.21.4及以上版本
  - hideTooltip

  # 当前槽位的物品将始终在面板关闭时掉落
  - dropItem

  # 面板关闭时当前格子的物品将返回到玩家物品栏
  - returnItem
```

## 物品ID（1.8.8 - 1.12.2）

材料的ID，除非需要彩色物品（如染色羊毛），否则保留为0。仅旧版Minecraft需要配置此项。

```yaml
ID: 0
```

## 物品名称

物品的名称。如需物品名称为空，需将名称设为`&f`。

```yaml
name: '&aSurvival'
```

## 物品堆叠

物品的数量。如果从物品配置中移除此项，物品将不会堆叠。

```yaml
stack: 1
```

## 魔咒

设置为`true`可使物品显示附魔光效。这将隐藏附魔名称。

在1.8.8至1.12.2版本中，无此设置的物品不会被附魔。

```yaml
enchanted:
  - true
```

也可列出具体魔咒使其可见，参考以下示例：

```yaml
enchanted:
  - KNOCKBACK 2
```

支持命名空间，例如使用自定义魔咒时：

```yaml
enchanted:
  - minecraft:SHARPNESS 4
```

## 物品NBT

为物品添加NBT数据。以下示例中，键`man`将存储在物品中，其值为`whatCanISay`。

数值可直接书写，插件会自动识别类型（如`1L`会被识别为长整型）。也可以通过下划线分隔值和类型，如`1_L`。

支持的NBT类型：**string**、**integer**、**double**、**float**、**long**、**short**、**boolean**、**byte**。

```yaml
nbt:
  man: whatCanISay
  number: 1L
```

你还可以嵌套结构：

```yaml
nbt:
  stats:
    damage: 6.5L
    name: '匕首'
    is_obtainable: true
```

## 物品模型（1.21.4+）

设置物品模型。

```yaml
itemmodel: minecraft:diamond_sword
```

## 自定义模型数据（1.14+）

设置物品的自定义模型数据。

```yaml
customdata: 1000001
```

## 物品提示框（1.21.4+）

设置物品的提示框样式。

```yaml
tooltip: style
```

## 物品损坏值

设置物品的耐久损耗。设置为`-1`可使物品无法破坏。

```yaml
damage: 10
```

## 盔甲颜色

可更改皮革类盔甲的颜色。可使用RGB颜色，或从Spigot API查找特定颜色名称。

```yaml
leatherarmor: 136,0,255
```

```yaml
leatherarmor: CYAN
```

## 盔甲纹饰（1.20+）

为盔甲添加纹饰。例如：`trim: EMERALD COAST`

```yaml
trim: [材料] [图案]
```

## 药水效果

设置物品的药水效果类型。前往SpigotAPI的PotionType查找不同药水的名称。该配置可用于所有支持药水效果的物品（如药箭）。

```yaml
potion: STRONG_HEALING
```

在1.13至1.20.4版本中，`[延长时间？]`位置控制药水是否需要更长的持续时间，需填写为`true`或`false`。`[增强效果？]`控制是否提升药水等级或效果，同样填写为`true`或`false`。

```yaml
potion: INSTANT_HEAL [延长时间？] [增强效果？]
```

例如瞬间治疗Ⅱ：

```yaml
potion: INSTANT_HEAL false true
```

## 物品描述

添加多行文本作为物品的描述。可使用`\n`换行。

```yaml
lore:
  - '&2治疗自己并'
  - '&2将游戏模式改为生存。'
```

## 付费墙

此处可添加多个付费墙。需满足这些条件，物品的命令才能够执行。除非所有条件都满足，否则不会扣除玩家的物品或金额。此处可使用任何付费墙类型，外加`hasperm=`。

```yaml
multi-paywall:
  - 'item-paywall= item'
  - 'paywall= 100'
```

## 物品命令

用户点击物品时按顺序执行的命令。如果玩家没有对应命令的权限，命令不会执行。可在此部分使用面板命令标签。

```yaml
commands:
  - 'heal'
  - 'gamemode survival'
```

## 玩家输入

在聊天中请求玩家输入，玩家输入的内容将保存在`%cp-player-input%`中。物品命令在点击物品时照常运行，`player-input`命令在输入完成后运行。

```yaml
player-input:
  - 'msg= 你输入了%cp-player-input%'
  - 'open= test_panel'
```

## 取消玩家输入

玩家取消输入时执行的命令。

```yaml
player-input-cancel:
  - 'msg= &c已取消！'
```

## 物品刷新命令

该配置项中的命令会在面板物品刷新时执行。如果这些命令位于`Has`条件段后，除非`Has`参数允许，否则不会运行。

```yaml
refresh-commands:
  - 'cpc'
  - 'msg= 因不活跃而关闭！'
```

## 重复物品

若需要在面板的多个槽位中使用相同的物品，只需将该项添加到物品配置。以下示例将在0到9、13以及17到27的槽位中填充该物品。

```yaml
duplicate: "0-9,13,17-27"
```

## 旗帜图案

使用自定义旗帜最简单的方法是直接将自定义旗帜拖放到游戏内的编辑器中。或者，你可以像这样为面板物品添加`banner`属性：

```yaml
1:
  material: RED_BANNER
  banner:
    - WHITE,STRIPE_MIDDLE
    - BLACK,SKULL
```

图案名称可在Spigot API的PatternTypes中找到。旗帜将按照从上到下的顺序依次添加图案。列表可按需扩展，格式为：`颜色,图案`。