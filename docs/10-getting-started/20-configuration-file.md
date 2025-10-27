# 配置文件

`config.yml`文件内容及其参数说明：

```yaml
config:
  # 若设置为true，面板中的占位符会自动刷新（需重启服务器生效）
  refresh-panels: true

  # 面板的全局默认刷新频率（单位：游戏刻）
  refresh-delay: 20

  # 若不需要面板方块功能，可禁用命令/cpb以优化性能（需重启服务器生效）
  panel-blocks: true

  # 若设置为false，则禁用快捷栏物品（需重启服务器生效）
  hotbar-items: true

  # 若设置为false，则禁用自定义命令（需重启服务器生效）
  custom-commands: true

  # 用于停止插件注册面板自定义命令
  auto-register-commands: true

  # 若启用，面板会在打开时自动从文件更新
  # 如果你有其他依赖于CommandPanels的插件，请保持禁用
  auto-update-panels: false

  # 设置占位符%cp-server-<IP>:<PORT>%的超时时间（单位：毫秒）
  # 局域网环境建议设置为10
  # 数值越大，面板打开的延迟越大
  # 数值过低可能返回错误离线状态，过高则可能引发卡顿
  server-ping-timeout: 10

  # 面板关闭时是否停止"sound-on-open"播放的声音
  stop-sound: true

  # 当玩家在错误的世界尝试打开面板时是否发送提示信息
  disabled-world-message: true

  # 是否在控制台显示玩家打开或关闭面板的日志信息
  panel-snooper: false

  # 是否启用/cpi命令从网络导入面板的功能
  enable-import-command: false

  # 在面板未打开时点击物品栏界面外部区域执行的命令
  outside-commands:
    - 'msg= 这是一条消息！'

format:
  # 所有消息的前缀
  tag: '&6[&bCommandPanels&6] '

  # 无权限消息
  perms: '&c权限不足。'

  # 重载插件
  reload: '&a插件已重载。'

  # 找不到面板
  nopanel: '&c未找到指定面板。'

  # 面板未配置可点击物品
  noitem: '&c面板未设置可点击的物品。'

  # 找不到玩家名称
  notitem: '&c未找到指定玩家。'

  # 默认错误代码消息
  error: '&c在配置文件中发现错误：'

  # 使用%cp-player-online-1%时离线玩家的显示名称
  offline: 离线

  # 使用%cp-player-online-1%时离线玩家的头像值
  offlineHeadValue: eyJ0ZXh0dfy7e8w...

# 玩家首次加入服务器时自动打开的面板
open-on-first-login: kunkun_panel

# 玩家切换世界时自动打开的面板（可配置多个世界）
# 以下示例将在进入world1世界后自动打开test_panel面板
open-on-join:
  world1: man_panel

# 玩家登录服务器时自动打开的面板（功能与open-on-join相同，但仅在登录时触发）
open-on-login:
  world1: dingzhen_panel

input:
  # 输入该项定义的关键词会取消%cp-player-input%的输入
  input-cancel: '取消'

  # 默认最大输入长度（-1表示无限制）
  max-input-length: -1

  # 请求玩家输入时显示的提示信息
  # %cp-tag%为插件消息前缀，%cp-args%是input-cancel的值
  input-message:
    - '%cp-tag%&a请输入命令参数'
    - '&c输入&4%cp-args%&c取消命令'

# 十六进制颜色代码格式设置
# 以下示例支持&#ff0000格式
# 若将start_tag改为'{#'，end_tag改为'}'，则可支持{#ff0000}格式
hexcodes:
  start_tag: '&#'
  end_tag: ''

# 占位符符号设置
# start和end表示占位符的前后部分
# 可将其配置在指定面板内，用于在特定面板中使用独立的自定义占位符
placeholders:
  # 主要占位符符号（用于CommandPanels占位符）
  primary:
    start: '%'
    end: '%'
  # 次级占位符符号（用于嵌套在其它占位符内部）
  secondary:
    start: '{'
    end: '}'

updater:
  # 是否在服务器关闭时自动更新插件（仅小版本更新，例如3.22.1 -> 3.22.2，但不是3.22.1 -> 3.23.0）
  auto-update: false
  # 是否在加入服务器时发送插件更新提示（需重启服务器生效）
  update-checks: true

# 面板内购买或出售操作提示信息
# %cp-args%将被替换为金额或物品类型
purchase:
  currency:
    enable: true
    success: '&a购买成功！花费$%cp-args%元。'
    failure: '&c余额不足！'
  data:
    enable: true
    success: '&a购买成功！花费$%cp-args%元。'
    failure: '&c余额不足！'
  tokens:
    enable: true
    success: '&a购买成功！花费%cp-args%代币。'
    failure: '&c代币不足！'
  item:
    enable: true
    success: '&a成功出售%cp-args%。'
    failure: '&c物品不足！'
  xp:
    enable: true
    success: '&a购买成功！花费%cp-args%点经验值。'
    failure: '&c经验不足！'
```