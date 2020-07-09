# 选择器

- 结构选择器

  - 后代选择器: 用空格隔开, 可以选中节点的所有后代节点
  - 兄弟选择器
    - ~: 可以选中当前节点向后的兄弟节点, 不含当前节点, 当前节点之前的也无法选中
    - +: 可以选中当前节点的下一个相邻兄弟节点, 不含当前节点及之前的节点, 之后不相邻的也无法选中

- 属性选择器: 在选择器后面加上`[]`包裹属性即可选择符合选择器的且节点含指定属性的节点

  - `[field="value"]`: 通过添加指定值可以搜索到指定属性值的节点
  - `[field^="value"]`: 通过 `^` 可以搜索到属性值以 `value` 开头的节点
  - `[field$="value"]`: 通过 `$` 可以搜索到属性值以 `value` 结尾的节点
  - `[field*="value"]`: 通过 `*` 可以搜索到属性值含有 `value` 的节点
  - `[field~="value"]`: 通过 `~` 可以搜索到属性值含有单词 `value` 的节点, 附近有空格隔开的词
  - `[field|="value"]`: 通过 `|` 可以搜索到属性值含有单词 `value-` 开头的节点 或 以 `value` 结尾

- 伪类选择器: 用于控制不同状态下节点的显示

  - `:link`: a 标签默认状态
  - `:visited`: 访问过的 a 标签
  - `:hover`: 鼠标经过
  - `:active`: 点击时
  - `:focus`: 获取焦点时
  - `:blur`: 失去焦点时
  - `:root`: 根元素
  - `:empty`: 空元素标签
  - 表单属性
    - `:disable`: 禁用元素
    - `:enable`: 启用元素
    - `:required` 必填项
    - ...
  - `:first-child`: 第一个子元素
    - `xx:first-child`, 如: `h1:first-child` 代表选中处于层级中第一个的 h1
    - `xx :first-child`, 如: `main :first-child` 代表选中 main 的后代中的第一个节点(包含孙辈及更深层级)
  - `:first-of-type`: 第一个指定类型, 如: `h1:first-of-type` 第一次出现的 h1
    - `xx:first-of-type`: 如: `h1:first-of-type` 兄弟元素中第一个出现的 h1 标签
    - `xx :first-of-type`: 如: `div :first-of-type` div 的后代中所有第一种类型被选中
  - last 同理
  - `:nth-of-child(xx)` `:nth-of-type(xx)` 同上, 改为指定位置
  - `:only-child`
    - `xx:only-child`, 如: `h1:only-child` 当仅有一个子元素, 且字元素是 h1 标签, 选中这个 h1
    - `xx :only-child` 如: `div :only-child` div 的后代中, 子元素只有一个则选中这个子元素
  - `:only-of-type`
    - `xx:only-of-type` 如: `h1:only-of-type` 兄弟元素中只有一个 h1 标签，则 h1 被选中
    - `xx :only-of-type` 如: `div :only-of-type` div 下同级中只出现一种的标签被选中

- 权重: 不同选择器有不同的权重，选择冲突时权重高的有效
  - 不同选择器权重值
    - id 选择器: 0100
    - 类、属性选择器: 0010
    - 标签、伪元素: 0001
    - 行内样式: 1000
    - 通配符\*:0000
  - 不同选择器组合后权重值叠加, 值越大优先级越高
  - 低权重的选择器无法覆盖高权重选择器, 如: 多个`类选择器`叠加无法覆盖`id选择器`
