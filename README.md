# 简介


Monica 是一个即时备忘录清单应用，其目的在于解决忘记准备某项物品或事物的问题。

应用地址：http://iheyunfei.github.io/monica/

本应用针对的人群有以下特点：

- 有需要准备各种东西的重复任务
- 这些任务可能会重复、大量出现
- 经常发现忘记带某样东西，或者没带某样东西的后果很严重

## 小计

本应用的使用场景:

- 一个是我经常去健身房，每次去回我都要准备大量的东西，换洗的衣物、洗漱用品和各种补品。倘若忘记某些东西，会对我造成很大困扰，比如，无法洗澡、中途乏力，甚至受伤。

- 另一个，我早上去实验室和晚上回寝室的时候，需要携带各种东西，钥匙、校园卡，还有些小东西，如果忘记了类似钥匙或校园卡这种东西，会打乱我的生活节奏，进而导致一系列混乱。

为了尽量避免以上两个原因，我使用过其他应用，类似Google的Keep和滴答清单。它们的问题在于，其设计目的是一次性的，每次使用后都要手动重新创建相应的任务，所以，为了满足自己的需求，我写了这个应用。

# Todo

## 用户

- [x] 云同步
- [ ] 修改密码
- [ ] 找回密码

## 项目

- [x] 添加项目
- [x] 删除项目
- [x] 编辑界面快捷入口
- [x] 任务重命名
- [ ] 任务排序

## 任务

- [x] 增添任务
- [x] 删除任务
- [x] 撤销重做功能(对应服务端功能暂未实现)
- [x] 任务页面快捷编辑按钮
- [ ] 任务重命名
- [ ] 任务排序

## 主页

- [ ] 最近任务(重构后没想好是做到服务端，还是本地，暂时没写)
- [x] 置顶任务

## 杂项

- [x] 全局通知提醒
- [x] 为防止误触，主页按钮需双击才能返回主页

# 使用场景

## 每天早上出门上班

你可以创建一个 _早上上班出门_ 任务，带有以下任务项：

- 拿钥匙
- 钱包
- 手机
- 眼镜

## 周期性的去健身房

你可以创建一个 _去健身房_ 任务，记录每次出发需要带的东西：

- 换洗衣物
- 沐浴露
- 洗发露
- 水杯
- 健身卡
- 雨伞
- 耳机

以及，创建一个 _离开健身房_ 任务，防止离开时忘记一些物品。

# 最后

使用本应用的唯一需要注意的事情：你需要培养出做任何事情前，先想想这件事有准备流程吗？
