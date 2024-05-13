// // src/shims-vue.d.ts
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

// shims-vue.d.ts

// Import the DefineComponent type from Vue
import { DefineComponent } from 'vue'

// Define a global type declaration for .vue files
declare module '*.vue' {
  // Define the component type as a DefineComponent
  const component: DefineComponent
  // Export the component type
  export default component
}
