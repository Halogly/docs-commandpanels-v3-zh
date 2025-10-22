# 面板模板

在线编辑器中使用的面板模板：

```yaml
panels:
  template:
    perm: admin
    rows: 6
    title: '&8新面板'
    empty: AIR
    item:
      4:
        material: COBBLESTONE
        stack: 1
        name: '&f点我！'
        commands:
          - 'msg= 你点了这个物品！'
          - cpc
```