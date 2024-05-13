/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'

describe('App.vue', () => {
  it('renders NavBar and RouterView components', () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: {
          RouterView: true, // Stub RouterView
          NavBar: true // Stub NavBar
        }
      }
    })

    // Check if NavBar is rendered
    expect(wrapper.findComponent(NavBar).exists()).toBe(true)

    // Check if RouterView is rendered
    expect(wrapper.findComponent(RouterView).exists()).toBe(true)
  })
})
