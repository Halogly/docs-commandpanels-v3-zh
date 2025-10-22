import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 逻辑条件段

物品可包含多个具有不同条件的逻辑段，用于决定最终显示和使用的是哪个物品。

## 创建逻辑

你可以使用页面底部的任意条件段为物品添加逻辑条件。以下是包含条件段的物品配置示例：

<Tabs>
<TabItem value="modern" label="1.13+">

```yaml
20:
  material: RED_WOOL
  name: "你的名字不是Halogly"
  has0:
    value0: Halogly
    compare0: '%cp-player-name%'
    material: LIME_WOOL
    name: "你的名字是Halogly"
    has0:
      value0: '%cp-player-name% HASPERM'
      compare0: gamemode.creative
      material: BLACK_WOOL
      name: "你的名字是Halogly并且你可以执行/gamemode"
    has1:
      value0: '%cp-player-name% HASPERM'
      compare0: essentials.fly
      material: BLACK_WOOL
      name: "你的名字是Halogly并且你可以执行/fly"
```

</TabItem>
<TabItem value="legacy" label="1.8.8 - 1.12.2">

```yaml
20:
  material: WOOL
  ID: 14
  name: "你的名字不是Halogly"
  has0:
    value0: Halogly
    compare0: '%cp-player-name%'
    material: WOOL
    ID: 5
    name: "你的名字是Halogly"
    has0:
      value0: '%cp-player-name% HASPERM'
      compare0: gamemode.creative
      material: WOOL
      ID: 15
      name: "你的名字是Halogly并且你可以执行/gamemode"
    has1:
      value0: '%cp-player-name% HASPERM'
      compare0: essentials.fly
      material: WOOL
      ID: 15
      name: "你的名字是Halogly并且你可以执行/fly"
```

</TabItem>
</Tabs>

## 不同条件

上述物品包含一个默认条件段（回退物品），即红色羊毛，主条件段内还包含两个次级条件段。如示例所示，第一个条件段物品仅在玩家名为`Halogly`时显示，否则将显示红色羊毛。主条件内的`has`条件段只有在玩家名为`Halogly`时才会被检查。你需要在分段中使用常规物品设置（如`material`），因为当此条件段满足时，需要创建对应的物品。

## 多段同位

如你所见，第一个条件段内包含了两个嵌套的`has`段。同一层级下的`has`段不能使用相同的名称，因此需要通过数字后缀来区分（例如`has0`和`has1`）。若多个`has`段的条件都满足，系统会优先使用数字编号最小的那个。

## 运算符

### 或

当需要比较两个不同值时可使用或运算符。两个值中任意一个值符合条件即成立。如下例所示，当玩家名为`Halogly`、`Steve`或`Notch`时会显示金块。或运算符也可用于连接多个条件。

```yaml
has0:
  value0: 'Halogly OR Steve OR Notch'
  compare0: '%cp-player-name%'
  material: GOLD_BLOCK
```

### 非

非运算符用于将条件取反判断。以下示例中，当玩家名称不是`Halogly`时会显示金块。

如果你在`has`段中使用大于等于比较符`ISGREATER`，假设你设定比较的数值是500，那么当值大于等于500时条件成立；配合非运算符后，则会在值小于等于499时条件成立。

```yaml
has0:
  value0: 'NOT Halogly'
  compare0: '%cp-player-name%'
  material: GOLD_BLOCK
```

### 与

当需要同时满足多个参数时使用与运算符。这就是`value0`和`compare0`末尾带有数字编号的原因。如需添加更多参数，可继续使用`value1`和`compare1`。系统会始终按照从小到大的顺序（升序）读取参数。以下示例仅在玩家拥有至少500元且玩家名为`Halogly`时条件成立。

```yaml
has0:
  value0: '%cp-player-balance% ISGREATER'
  compare0: '500 AND'
  value1: '%cp-player-name%'
  compare1: 'Halogly'
```

### 权限

检查一名玩家是否拥有指定的权限。若不想通过面板检测玩家的权限，可以将玩家名称改为任何内容。

```yaml
has0:
  value0: '%cp-player-name% HASPERM'
  compare0: 'essentials.gamemode'
```

### 比较

当两个值相等时成立。将`value0`和`compare0`的值进行比较，不解析颜色代码。

```yaml
has0:
  value0: 'Halogly'
  compare0: '%cp-player-name%'
```

### 大于等于

判断数值是否大于等于某个数值。在下面的示例中，若玩家的余额为500元甚至更高时，条件成立。

```yaml
has0:
  value0: '%cp-player-balance% ISGREATER'
  compare0: '500'
```
