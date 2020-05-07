/*
 * @Author: PT
 * @Date: 2020-05-07 09:46:42
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 12:02:37
 * @Description: dom帮助类
 */
/**
 * @description: dom监听
 * @param {type} 
 */
export const domObserve = (dom, option, callback) => {
  option = option || {
    attributes: true, // 属性的变动
    // attributeFilter: ['class', 'style'], // 观察特定属性
    attributeOldValue: true, // 观察 attributes 变动时，是否需要记录变动前的属性值
    characterData: true, // 节点内容或节点文本的变动
    characterDataOldValue: true, // 观察 characterData 变动，是否需要记录变动前的值

    childList: true, // 子节点的变动（新增、删除或者更改）
    subtree: true, // 是否将观察器应用于该节点的所有后代节点
  }
  if (!dom) {
    return Promise.reject('dom对象不能为空')
  }
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  var observe = new MutationObserver(records => {
    records.map(record => {
      callback(record)
    })
  }).observe(dom, option)
  return observe
}