import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 动画物品

要为物品添加动画效果，你需要在面板配置中添加以下设置：

<Tabs>
<TabItem value="modern" label="1.13+">

```yaml
panels:
  animationTester:
    perm: default
    rows: 1
    title: '&a动画测试'
    empty: BLACK_STAINED_GLASS_PANE
    animatevalue: 6 # 添加此配置项
```

</TabItem>
<TabItem value="legacy" label="1.8.8 - 1.12.2">

```yaml
panels:
  animationTester:
    perm: default
    rows: 1
    title: '&a动画测试'
    empty: WOOL
    emptyID: 15
    animatevalue: 6 # 添加此配置项
```

</TabItem>
</Tabs>

如果数字设为6，动画从0循环到6，动画将分为7个动画帧。

调整从0到6的循环速度需要在主配置文件`config.yml`中修改`refresh-delay`的值。

下面是`item`关于动画物品的配置，循环播放七个（0到6）动画帧。

<Tabs>
<TabItem value="modern" label="1.13+">

```yaml
item:
  2:
    material: BARRIER
    name: '这是默认物品'
    animate0:
      material: PURPLE_STAINED_GLASS_PANE
      name: '&5变色龙！'
    animate1:
      material: RED_STAINED_GLASS_PANE
      name: '&c变色龙！'
    animate2:
      material: ORANGE_STAINED_GLASS_PANE
      name: '&6变色龙！'
    animate3:
      material: YELLOW_STAINED_GLASS_PANE
      name: '&e变色龙！'
    animate4:
      material: LIME_STAINED_GLASS_PANE
      name: '&a变色龙！'
    animate5:
      material: LIGHT_BLUE_STAINED_GLASS_PANE
      name: '&9变色龙！'
    animate6:
      material: MAGENTA_STAINED_GLASS_PANE
      name: '&d变色龙！'
```

</TabItem>
<TabItem value="legacy" label="1.8.8 - 1.12.2">

```yaml
item:
  2:
    material: BARRIER
    name: '这是默认物品'
    animate0:
      material: WOOL
      ID: 14
      name: '&5变色龙！'
    animate1:
      material: WOOL
      ID: 1
      name: '&c变色龙！'
    animate2:
      material: WOOL
      ID: 4
      name: '&6变色龙！'
    animate3:
      material: WOOL
      ID: 5
      name: '&e变色龙！'
    animate4:
      material: WOOL
      ID: 3
      name: '&a变色龙！'
    animate5:
      material: WOOL
      ID: 11
      name: '&9变色龙！'
    animate6:
      material: WOOL
      ID: 2
      name: '&d变色龙！'
```

</TabItem>
</Tabs>

:::tip

如果缺少某个帧（例如缺少第3帧），循环到第3帧时会显示默认物品（显示`BARRIER`）。

:::

:::warning

动画标签可添加到任何物品中，但**不支持快捷栏物品**。你可以在任何`Has`条件段中添加动画效果。

:::