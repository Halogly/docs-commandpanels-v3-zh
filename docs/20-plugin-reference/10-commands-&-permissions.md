# 命令权限

| 命令                                                   | 权限                        | 描述                                                    |
|:-----------------------------------------------------|:--------------------------|:------------------------------------------------------|
| `/cp`                                                | -                         | 显示命令列表。                                               |
| `/cp [面板名称]`                                         | commandpanel.panel.[面板名称] | 打开指定的面板。                                              |
| `/cp [面板名称] [其他玩家名称]`                                | commandpanel.other        | 为其他玩家打开面板并为其他玩家提供面板快捷栏物品。                             |
| `/cp [面板名称] item [可选玩家名称]`                           | commandpanel.item.[面板名称]  | 获取可在快捷栏中打开面板的物品。                                      |
| `/cpl`                                               | commandpanel.list         | 列出当前已加载的所有面板。                                         |
| `/cpg [行数]`                                          | commandpanel.generate     | 生成指定行数（1-6）的面板，或从箱子生成面板。                              |
| `/cpu [玩家名称] [top:middle:bottom:all]`                | commandpanel.refresh      | 手动刷新玩家当前打开的面板。                                        |
| `/cpr`                                               | commandpanel.reload       | 重载插件配置文件。                                             |
| `/cpv`                                               | commandpanel.version      | 查看插件版本信息。                                             |
| `/cpv latest`                                        | commandpanel.update       | 下载最新版本的插件并在服务器重启后安装。                                  |
| `/cpv [版本号]`                                         | commandpanel.update       | 强制下载指定版本插件。示例：`/cpv 3.14.2.0`，输入`/cpv cancel`可取消待定下载。 |
| `/cpi [文件名] [url]`                                   | commandpanel.import       | 从在线URL导入面板配置文件到服务器。                                   |
| `/cpdata [set:add:get:remove:clear] [玩家名称] [数据] [值]` | commandpanel.data         | 编辑玩家面板数据。使用`/cpdata -s <参数>`可静默执行。                    |
| `/cpd`                                               | commandpanel.debug        | 在控制台中查看详细错误信息。启用后面板将实时自动更新。                           |
| `/cpe [面板名称]`                                        | commandpanel.edit         | 打开编辑器，或直接编辑指定面板。                                      |
| `/cpb add [面板名称]`                                    | commandpanel.block.add    | 设置右键点击方块时打开面板。                                        |
| `/cpb remove`                                        | commandpanel.block.remove | 移除当前视线所指方块的面板绑定。                                      |
| `/cpb list`                                          | commandpanel.block.list   | 列出所有已绑定面板的方块位置。                                       |
| -                                                    | commandpanel.*            | 获得所有CommandPanels命令的使用权限。                             |