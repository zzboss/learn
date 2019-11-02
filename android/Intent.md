# Intent

Itent用于android组件间的数据交互。

## Activity 交互

- 显示Intent
通过创建Intent(第一个参数为Context，传入当前Activity，第二个参数传入要跳转的Activity)，调用Activity的startActivity函数，传入Intent即可。

- 隐式Intent
创建Intent时指定Action(即一个字符串标识)，配置AndroidManifest.xml时，在Activity 中加入 Intent-filter，指定action 和 category，Intent可以添加category，当action和category都匹配时，可以通过startActivity完成跳转。多个Activity被匹配到时，手机上会弹出选择框。

- Activity间的数据交互
  - Activity 传入数据到第二个 Activity
    - 通过Intent.putExtra函数，传入需要携带的数据，在跳转后的Activity中调用getIntent获取Intent对象，通过Intent.getXXXExtra函数，获取传入的不同类型的数据，如getStringExtra。
  - Activity 跳转后接受返回的数据
    - Activity 跳转时调用 startActivityForResult 函数，第一个参数传入Intent，第二个参数传入请求码，一个int型数字即可。第二个 Activity 在销毁时需要调用setResult函数，返回状态码和Intent。此时第一个Activity需要重写OnActivityResult 函数，处理接收到的数据，处理时可通过请求码、返回码判断不同场景做相应处理。
