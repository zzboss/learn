# mixly 自定义 block

## 代码生成

代码生成需要注意: 当一个 block 没有返回值时，生成的代码可以直接返回, 当一个块生成的代码有返回值时,需要返回一个列表 [code, operator_order], 即代码和优先级

- 输入值
  - 通过另一个 block 提供输入
    - block define

    ```JavaScript
    // 接收另一个 block 的输入, blockInput 用于获取值的 key
    this.appendValueInput('blockInput')
    ```

    - generator: 获取 block 输入值

      ```JavaScript
      // 通过 key 获取连接的 block 生成的代码, 没有则默认为 ''
      const input = Blockly.Arduino.valueToCode(this, 'blockInput',      Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
      ```

  - 获取用户输入
    - block define

    ```JavaScript
    // 设置客户输入框, 默认值为 item, customerInput 用于获取值的 key
    this.appendField(new Blockly.FieldTextInput('item'), 'customerInput')
    ```

    - generator: 获取用户输入值

    ```JavaScript
    const input = this.getFieldValue('customerInput');
    ```
  
  - 用户下拉输入
    - block define

    ```JavaScript
    // 定义下拉时, 需要一个二维数组, 外层数组定义各一个下拉项, 内层数组定义显示值和实际输入值
    const DATATYPES = [
      ['显示值1', '实际输入值1'],
      ['显示值2', '实际输入值2']
    ]
    this.appendField(new Blockly.FieldDropdown(DATATYPES), "dropDownVal")
    ```

    - generator: 获取用户输入值

    ```JavaScript
    // 用户选择显示值1时, 这里获取到实际值1
    const input = this.getFieldValue('dropDownVal');
    ```
