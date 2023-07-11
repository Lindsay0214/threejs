# threejs

### Steps

`/threejs`

```jsx
npm create vite@latest -- --template react client
```

`/client`

step1: install threejs

```jsx
npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion
```

step2: [install tailwind css with vite](https://tailwindcss.tw/docs/guides/vite) and update `tailwind.config.js` & `index.css`

```jsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`/tailwind.config.js`

```jsx
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`/index.css`

```jsx
// update on the top
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step3: delete unuse file

step4: valtio setting

step5: pages, components logic

step6: mkdir server

step7: install server dependencys

```jsx
npm install cloudinary cors dotenv express mongoose nodemon openai
```

step8: deploy server on render

step9: deploy client on hostinger

---

### [Valtio](https://github.com/pmndrs/valtio)

Valtio makes proxy-state simple for React and Vanill（一個基於 Proxy 實現，更容易上手的狀態管理工具）

React 常用的狀態管理工具有 Redux, Mobx, Valtio, Recoil

- Redux 屬於單向數據流方式
- Mobx 和 Valtio 屬於雙向綁定的響應式實現
- Recoil 以原子化方式對狀態進行分離管理
- 也可以直接用 props, context 不使用任何第三方狀態管理工具

Valtio 實現就兩個核心方法 proxy 與 useSnapshot

proxy 用於包裝原始物件 initialObject，生成可監聽修改操作的 observable state

在元件中用 useSnapshot(state) 返回一個不可變的物件 snap 用於元件渲染，當需要對狀態變更時就操作 state 反應到原始物件上

\***\*Ref\*\*** [一文看懂状态管理工具 Valtio](https://juejin.cn/post/7164052088303910943)

---

### framer motion

framer motion 是 Framer 跟 motion API 所組合而成

- [Framer](https://www.framer.com/developers/)：快速打造世界級網頁的平台設計工具，一鍵設計到發布
- [motion](https://www.framer.com/motion/examples/) API：聲明式 declarative 動畫，提供更好維護與易讀的程式碼
  - motionValue 客製化動畫值
  - useSpring 具有 Spring Animation
  - Unmount 動畫
  - 支援 CSS 變數、SSR、TS、與自家 Framer 整合

整體主打迅速、簡單上手，把元件轉成 `<motion.div>` 就可以開始做動畫了

`<motion>` 元件是對 DOM 元素進行 60fps 與各種使用者交互動作優化，可以是任何 HMTL 或者 SVG 元素，且對應標籤與 html tag 一樣（div, li, circle(svg),….）

\***\*Ref\*\*** [Who & Why framer-motion ?](https://ithelp.ithome.com.tw/m/articles/10290366)

---

### ThreeJS & React Three Fiber

// TODO
