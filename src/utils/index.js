/*
 * @Author: PT
 * @Date: 2020-05-07 13:15:05
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 13:17:03
 * @Description: 工具函数
 */
/**
 * 
 * @param {function} func 执行方法
 * @param {int} wait 延迟执行时间
 */
export const debounce = (func, wait) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, wait)
  }
}