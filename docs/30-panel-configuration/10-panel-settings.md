# 面板设置

## 权限

设置打开面板所需的权限（使用`'default'`表示所有人均可打开，如设置为`'creative'`，则对应权限节点为`commandpanel.panel.creative`）。

```yaml
perm: 'default'
```

## 面板行数

设置面板的行高。3行相当于标准箱子的尺寸，6行相当于大箱子的尺寸。

如需使用特殊的界面（如工作台、熔炉、漏斗等），需使用`InventoryType`值。注意，Spigot上列出的某些值可能不兼容。

```yaml
# 创建标准界面
rows: 1
```

```yaml
# 创建特殊界面（此处示例为漏斗界面）
rows: HOPPER
```

## 面板条件

使用自定义逻辑定义打开面板需要满足的条件。支持使用括号（仅限单层嵌套）。

请参考以下示例及可用运算符列表，注意空格和格式的准确性。

```yaml
# 需要特定玩家名称且拥有gamemode.creative权限
condition: "%player_name% $EQUALS Halogly $AND %player_name% $HASPERM gamemode.creative"
```

```yaml
# 与上例相同，但拥有该权限的玩家将被拒绝
condition: "%player_name% $EQUALS Halogly $AND $NOT %player_name% $HASPERM gamemode.creative"
```

```yaml
# 使用括号分组：需要玩家名不是Halogly且没有gamemode.creative权限
condition: "$NOT (%player_name% $EQUALS Halogly $AND %player_name% $HASPERM gamemode.creative)"
```

```yaml
# 多项条件判断
condition: "$NOT (%player_name% $EQUALS Halogly $AND 400 $ATLEAST 500) $AND ($NOT %player_name% $EQUALS Steve $OR %player_name% $HASPERM gamemode.creative)"
```

逻辑运算符列表：

```yaml
$NOT # 置于条件前，反转判断结果
$AND # 连接两个条件，需同时满足才能条件成立
$OR # 连接两个条件，只需满足其中一个即条件成立
```

条件判断符列表：

```yaml
$EQUALS # 基础字符串比较，不区分大小写
$ATLEAST # 若第一个数字大于等于第二个数字则条件成立
$HASPERM # 检查玩家是否拥有指定权限节点
```

## 面板标题

面板顶部显示的标题，支持占位符和颜色代码。注意旧版Minecraft对标题长度有限制，如遇显示问题请缩短标题。

```yaml
title: '&8示例面板'
```

使用自定义标题可以增强面板的视觉效果。启用自定义标题后，无需在`custom-titles`外设置常规标题（如下所示）。

```yaml
title: '&8Example GUI' # 此行可移除，因为已使用自定义标题
custom-title:
  title: '&8欢迎新玩家！'
  has0:
    value0: Halogly
    compare0: '%cp-player-name%'
    title: '&8欢迎Halogly！'
```

1.20.5及以上版本支持标题动画：

```yaml
animatevalue: 2 # 设置动画帧数，此示例为0、1、2共三帧
custom-title:
  title: '&8备用标题'
  animate0:
    title: '&8第一帧'
  animate1:
    title: '&8第二帧'
  animate2:
    title: '&8第三帧'
```

## 面板类型

用于定义面板的行为类型。可选类型如下：

• `static`：面板打开后物品将不会更新，例如动画效果将停止。

• `nocommand`：禁止通过`/cp <面板名称>`命令打开该面板。

• `nocommandregister`：阻止该面板中的自定义命令自动注册到`commands.yml`文件。

• `unmovable`：防止玩家在面板打开时移动自身物品栏中的物品。

• `unclosable`：阻止玩家关闭面板。需添加带有`cpc`命令标签的物品来关闭面板。

```yaml
panelType:
  - static
  - nocommand
  - nocommandregister
  - unmovable
  - unclosable
```

## 自定义消息

为物品添加自定义提示消息。以下示例展示了可用的消息类型：

```yaml
custom-messages:
  player-input:
    - '&b请在此自定义提示下输入文本！'
  input: '&c自定义最大字符数提示！' # 玩家输入相关提示
  perms: '&c自定义无权限提示！' # 点击物品时权限不足的提示
```

## 面板刷新

仅在需要覆盖`config.yml`中的`refresh-panels`值时添加此项（单位为游戏刻）。可为单个面板设置特定刷新频率。

```yaml
refresh-delay: 1
```

## 面板声音

设置面板打开时播放的声音。

此处可播放音乐曲目，面板关闭时所有正在播放的声音将停止。

可调整音量和音高，参考示例中的参数（音量0.3，音高0.6）：

```yaml
sound-on-open: BLOCK_NOTE_BLOCK_PLING 0.3 0.6
```

## 面板外部点击命令

玩家点击面板外部空白区域时执行的命令：

```yaml
outside-commands:
  - 'placeholder= [name:你的名字是]'
  - 'msg= %cp-name% %cp-player-name%'
```

## 面板开关命令

面板打开或关闭时执行的命令。命令按从上到下的顺序执行。`pre-load-commands`（预加载命令）在面板打开前执行（例如在面板加载和设置物品名称之前），而`commands-on-open`在面板打开后执行。除非需要为面板占位符设置值，否则建议使用`commands-on-open`。

```yaml
pre-load-commands:
  - 'placeholder= [text:你的名字是]'
  - 'msg= %cp-text% %cp-player-name%'
commands-on-open:
  - 'msg= 面板打开！'
  - 'gamemode creative'
commands-on-close:
  - 'msg= 面板关闭！'
  - 'gamemode creative'
```

:::warning

不应在`commands-on-close`中执行打开面板的操作。

:::

## 自定义物品

可向面板添加自定义物品，这些物品可用于不同功能，例如`item-paywalls`或`setitem=`。自定义物品使用的格式与常规物品相同。参考以下示例，其中列出了三个自定义物品，`custom-item`位于面板配置的根层级。

自定义物品是唯一不包含**CommandPanels NBT**标签的物品，因此玩家可以正常获取这些物品而不会被系统删除。

根据物品设置页面来自定义这些物品。

```yaml
custom-item:
  example1:
    material: AIR
  example2:
    material: DIAMOND
    name: '钻石的自定义名称'
  itemThree:
    material: GLOWSTONE
    name: '会发光的，小子'
    lore:
      - '这是物品描述！'
    stack: 34
```

## 禁用与启用世界

设置禁止玩家访问面板的世界。如果面板有快捷栏物品，或使用**multiverse-inventories**等插件在不同世界有不同物品栏时，这些物品不会在禁用世界中显示。也可以使用启用世界列表，此时只有列表中的世界可以访问面板。

```yaml
disabled-worlds:
  - world_nether
  - world_the_end
# 或
enabled-worlds:
  - world
```

## 空槽位物品

此物品将放置在所有空槽位中。如需使用自定义物品，可输入面板中配置的自定义物品名称。

```yaml
empty: STAINED_GLASS_PANE
```

```yaml
empty: custom_item_name
```

在1.8.8至1.12.2版本中，如需设置颜色ID，例如`wool:5`，使用数字5。如不需要可移除此项。

```yaml
emptyID: 15
```