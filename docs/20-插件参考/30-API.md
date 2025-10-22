# API

## 添加到Maven项目

如需使用，请先添加以下仓库配置：

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

添加以下依赖项，建议将版本号更新为最新的CommandPanels版本：

```xml
<dependency>
    <groupId>com.github.rockyhawk64</groupId>
    <artifactId>CommandPanels</artifactId>
    <version>7b92f14</version>
    <scope>provided</scope>
</dependency>
```

## API方法列表

| 方法                                                    | 返回类型                  | 描述                                                                                                |
|:------------------------------------------------------|:----------------------|:--------------------------------------------------------------------------------------------------|
| `api.isPanelOpen(Player p);`                          | **Boolean**           | 检测玩家是否打开了面板。                                                                                      |
| `api.getOpenPanel(Player p, PanelPosition position);` | **Panel**             | 获取玩家当前打开的面板对象。`PanelPosition`表示面板在物品栏中的位置：`Top`（顶部）、`Middle`（中部）、`Bottom`（底部），分别对应箱子区域、玩家物品栏、快捷栏。 |
| `api.getPanelsLoaded();`                              | **List&lt;Panel&gt;** | 获取CommandPanels中所有已加载的面板列表。                                                                       |
| `api.addPanel(Panel panel);`                          | **Void**              | 向CommandPanels的面板文件夹中添加新面板。                                                                       |
| `api.makeItem(Player p, ConfigurationSection item)`   | **ItemStack**         | 根据面板物品的配置生成并返回对应的`ItemStack`。                                                                     |
| `api.removePanel(String panelName);`                  | **Void**              | 删除面板文件夹中包含指定面板的文件。                                                                                |
| `api.hasNormalInventory(Player p);`                   | **boolean**           | 检测玩家是否处于正常物品栏状态（非面板界面）。                                                                           |
| `api.getPanel(String panelName);`                     | **Panel**             | 通过面板名称获取已加载的面板对象。                                                                                 |

## 获取固定物品槽位

CommandPanels可能会在物品栏的特定槽位中放置用于打开面板的固定物品，这些物品无法被移动。以下方法将返回被CommandPanels占用的槽位编号列表（0-8为快捷栏，9-33为物品栏内部）：

```java
CommandPanelsAPI api = CommandPanels.getAPI();
api.getHotbarItems();
```

## 创建新面板

要创建面板，需要获取面板的`File`或`YamlConfiguration`对象。推荐使用`File`对象，因为它们可以被添加到CommandPanels的已加载面板中：

```java
File file = new File("panel.yml");
String panelName = "example";
Panel panel = new Panel(file, panelName);
```

## 面板对象方法

| 方法                                               | 返回类型                     | 描述                                             |
|:-------------------------------------------------|:-------------------------|:-----------------------------------------------|
| `panel.open(Player p, PanelPosition position);`  | -                        | 为玩家打开面板。需确保玩家当前没有打开其他面板。若玩家无打开中的面板，建议使用顶部面板位置。 |
| `panel.getHotbarItem(Player p)`                  | **ItemStack**            | 获取面板的快捷栏物品。                                    |
| `panel.hasHotbarItem()`                          | **Boolean**              | 检查面板是否设置了快捷栏物品。                                |
| `panel.getInventory()`                           | **Inventory**            | 获取面板的基础物品栏对象。                                  |
| `panel.getCustomItem(Player p, String itemName)` | **ItemStack**            | 获取面板的指定自定义物品。                                  |
| `panel.getItem(Player p, int slot)`              | **ItemStack**            | 根据槽位编号获取面板内的物品。                                |
| `panel.getName()`                                | **String**               | 获取面板名称。                                        |
| `panel.getConfig()`                              | **ConfigurationSection** | 获取面板的配置项。                                      |
| `panel.getFile()`                                | **File**                 | 获取面板文件对象。                                      |
| `panel.setName(String name);`                    | -                        | 设置面板的新名称。                                      |
| `panel.setFile(File file);`                      | -                        | 设置面板的新文件。                                      |
| `panel.setConfig(ConfigurationSection config);`  | -                        | 设置面板的新配置。                                      |

## 面板占位符

使用以下示例为面板添加自定义占位符。如下例所示，使用占位符`%cp-item%`将返回`true`：

```java
panel.placeholders.addPlaceholder("item", "true");
```

## 检查玩家面板状态

如需检查玩家是否打开面板，需先获取API实例。以下示例在玩家打开任何面板时返回`true`，否则返回`false`：

```java
CommandPanelsAPI api = CommandPanels.getAPI();
api.isPanelOpen(Player p);
```

以下示例返回面板对象，可查看玩家打开的具体面板，访问面板内的所有内容，甚至重新打开该面板：

```java
CommandPanelsAPI api = CommandPanels.getAPI();
api.getPanel(Player p);
```

## 面板关闭事件

```java
public class Utils implements Listener {
    @EventHandler
    public void onPanelClose(PanelClosedEvent e) {
        // 在此处添加处理逻辑...
    }
}
```

`e.getPlayer();`：获取关闭面板的玩家。

`e.getPanel();`：返回正在关闭的面板对象。

`e.getPanel.getConfig();`：返回包含面板设置的配置项。例如获取面板标题：`e.getPanel().getConfig().getString("title")`。

## 面板打开事件

```java
public class Utils implements Listener {
    @EventHandler
    public void onPanelOpen(PanelOpenedEvent e) {
        // 在此处添加处理逻辑...
    }
}
```

`e.getPlayer();`：获取打开面板的玩家。

`e.getPanel();`：返回正在打开的面板对象。

`e.getPanel.getConfig();`：返回包含面板设置的配置项。例如获取面板标题：`e.getPanel().getConfig().getString("title")`。

`e.isCancelled()`：检查事件是否被取消。

`e.setCancelled()`：取消事件以阻止面板打开。

## 面板交互事件

```java
public class Utils implements Listener {
    @EventHandler
    public void onPanelCommand(PanelInteractionEvent e) {
        // 在此处添加处理逻辑...
    }
}
```

当玩家在面板中点击物品时触发此事件。

`e.getPlayer();`：获取触发事件的玩家。

`e.setCancelled(Boolean);`：取消面板点击事件。

`e.getPanel();`：获取面板对象。

`e.getPosition();`：获取面板位置的枚举值：`Top`、`Middle`或`Bottom`。

`e.isCancelled();`：检查事件是否已被取消。