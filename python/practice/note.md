# python 笔记

## list

- 数组生成
  - 数组元素都是相同的. ep: li = [0] * 10
  - 有序数字. ep: li = list(range(0, 10, 2))
  - 声明空数组, 通过 append 函数添加
  - 列表推导. ep: li = [i * 2 for i in range(10)] # 产生偶数
  - 二维数组生成相同元素. ep: li = [[0] * 3 for i in range(3)]
  - 使用 li = [[0] *3] *3 产生的二维数组, 每一行引用的都是同一行, 改变一个元素, 三行的元素都会改变

## 切片

- 语法: list[startIndex:endIndex:step]
- 缺省: startIndex 缺省默认为 0, endIndex 缺省默认为列表最大索引, step 缺省默认为 1
- 负数可以作为索引, 负数作为索引时会转换为正数索引
- step 为负数会产生逆向的数组, 逆向想要显示到第 0 个数时可以使用缺省值
  - ep: list[::-1]
- 切片产生新列表，不影响原列表
