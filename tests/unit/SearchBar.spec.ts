// /* eslint-disable no-undef */
// import { mount } from '@vue/test-utils'
// import SearchBar from 'components/SearchBar.vue'

// describe('SearchBar.vue', () => {
//   it('mounts and renders', () => {
//     const wrapper = mount(SearchBar)
//     expect(wrapper.text()).toContain('Search for movies...')
//   })

//   it('updates search query on input', async () => {
//     const wrapper = mount(SearchBar)
//     const input = wrapper.find('input[type="text"]')
//     await input.setValue('Inception')
//     expect(wrapper.vm.searchQuery).toBe('Inception')
//   })

//   it('filters movies based on search query', async () => {
//     const wrapper = mount(SearchBar, {
//       global: {
//         mocks: {
//           $store: {
//             state: {
//               movies: [
//                 { id: 1, Title: 'Inception', Plot: 'Dream within a dream' },
//                 { id: 2, Title: 'Interstellar', Plot: 'Space travel' }
//               ]
//             }
//           }
//         }
//       }
//     })
//     const input = wrapper.find('input[type="text"]')
//     await input.setValue('Inception')
//     await wrapper.vm.handleSearch()
//     expect(wrapper.vm.searchResults).toHaveLength(1)
//     expect(wrapper.vm.searchResults[0].Title).toBe('Inception')
//   })
// })
