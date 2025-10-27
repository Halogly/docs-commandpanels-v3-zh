# 基岩表单

基岩表单可集成到Minecraft服务器面板中，供基岩版玩家使用。这些表单专门适配通过Geyser和Floodgate，为基岩版玩家创建交互菜单。命令和占位符在基岩表单中的功能与普通面板相同。

## 添加基岩表单

可在现有面板中添加`Floodgate`项，基岩版玩家打开时将显示此表单而非Java版的箱子面板，Java版玩家仍能看到常规的箱子面板。

```yaml
panels:
  template:
    perm: default
    rows: 6
    title: '&4示例面板'
    empty: AIR
    open-with-item:
      material: BOOK
      stationary: 8
    item:
      0:
        material: STONE
        name: '&f你好啊，Java版玩家。'
        commands:
          - 'msg= 嗨~'
    floodgate:
      simple: '这是一个简易式的按钮菜单'
      0:
        text: '&d你可以给文字上色！'
        commands:
          - 'msg= &d出色！'
        icon:
          type: PATH
          texture: 'textures/items/redstone_dust.png'
```

## 为基岩表单添加逻辑

使用与标准面板相同的`Has`段格式可为表单添加逻辑。Java版玩家仍看到常规的箱子面板。

```yaml
floodgate:
  simple: '带逻辑的简易式表单'
  0:
    text: '你的名字不是Halogly！'
    commands:
      - 'msg= 你的名字不是Halogly时运行这个命令。'
    icon:
      type: PATH
      texture: 'textures/items/emerald.png'
    has0:
      compare0: '%cp-player-name%'
      value0: 'Halogly'
      text: '你的名字是Halogly！'
      commands:
        - 'msg= 你的用户名是Halogly。'
      icon:
        type: PATH
        texture: 'textures/items/redstone_dust.png'
```

## 简易式表单配置

简易式表单在顶部包含文本，文本下方显示按钮。以下是一个包含三个按钮的简易式表单示例：

```yaml
floodgate:
  # 表单顶部的文本，给项同时定义表单为简易式表单
  simple: '带按钮的面板'
  0:
    text: '&d给文字上色！'
    commands:
      - 'msg= &d出色！'
    icon:
      type: PATH # 某些资源包路径可用于图标
      texture: 'textures/items/redstone_dust.png'
  1:
    text: '这个按钮没有图标！'
    commands:
      - 'msg= 你的名字是%cp-player-name%'
  2:
    text: '这是非常危险的按钮！'
    commands:
      - 'console= kill %cp-player-name%'
    icon:
      type: URL  # 示例为虚拟的URL，可使用网络上的在线图片
      texture: 'https://example.com/image.jpg'
```

## 自定义式表单配置

自定义表单支持更复杂的交互，如下拉菜单、输入框、滑条和复选框开关。这类表单提交时会将输入的值保存到`%cp-input%`中，该占位符可在命令中使用。表单设置中若缺少必要值（`default`或`max`）将无法运行，请确保包含所有必需的参数。

```yaml
floodgate:
  0:
    type: dropdown
    options:
      - survival
      - creative
    text: '设置你的游戏模式！'
    commands:
      - 'msg= 示例命令/gamemode %cp-input% %cp-player-name%'
  1:
    type: input
    placeholder: '在这里输入'
    default: ''
    text: '写些什么呗'
    commands:
      - 'msg= 你写了：%cp-input%'
  2:
    type: slider
    min: 1
    max: 10
    step: 1
    default: 5
    text: '滑动滑条'
    commands:
      - 'msg= 你选择了：%cp-input%'
  3:
    type: toggle
    default: true
    text: '你喜欢rua呼rua呼的小喵咪吗？'
    commands:
      - 'msg= 你的选择：%cp-input%'
```
