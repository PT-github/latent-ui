/*
 * @Author: PT
 * @Date: 2020-04-22 16:26:00
 * @LastEditors: PT
 * @LastEditTime: 2020-04-22 18:07:01
 * @Description: 
 */
import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'
import Vue from 'vue'
describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('div').text()).toMatch('1')
  })
})