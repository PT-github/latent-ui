/*
 * @Author: PT
 * @Date: 2020-04-22 18:22:41
 * @LastEditors: PT
 * @LastEditTime: 2020-04-22 19:59:49
 * @Description: 
 */
import { shallowMount } from '@vue/test-utils'
import Button from '../packages/button'
// import Vue from 'vue'
describe('Button', () => {
  it('测试', async () => {
    const wrapper = shallowMount(Button)
    // wrapper.find('button').trigger('click')
    // await Vue.nextTick()
    expect(wrapper.find('div').text()).toMatch('Button北包包')
  })
})