# FollowMouse React Component

## Overview

The `FollowMouse` component is a React component that tracks and visually represents the mouse pointer position on the screen. It also includes a button to toggle the tracking functionality on and off. Additionally, an `App` component demonstrates how to mount and unmount the `FollowMouse` component.

## Components

### FollowMouse

The `FollowMouse` component performs the following functions:

1. **State Management:**
   - `enabled`: Boolean state to enable or disable mouse tracking.
   - `position`: Object state to store the current position of the mouse pointer.

2. **Effect Hook:**
   - Uses `useEffect` to add or remove an event listener for the `pointermove` event based on the `enabled` state.
   - Updates the `position` state with the current mouse pointer coordinates.

3. **Rendering:**
   - Renders a circular indicator that follows the mouse pointer.
   - Includes a button to toggle the tracking functionality.

### App

The `App` component demonstrates how to use the `FollowMouse` component:

1. **State Management:**
   - `mounted`: Boolean state to control the mounting and unmounting of the `FollowMouse` component.

2. **Rendering:**
   - Conditionally renders the `FollowMouse` component based on the `mounted` state.
   - Includes a button to toggle the `mounted` state, demonstrating how to mount and unmount the `FollowMouse` component.

## Installation

To use these components, ensure you have `react` and `react-dom` installed in your project.

```sh
npm install react react-dom
```

## Usage

1. **FollowMouse Component:**

   ```jsx
   import { useState, useEffect } from "react";
   
   export const FollowMouse = () => {
       const [enabled, setEnabled] = useState(false);
       const [position, setPosition] = useState({ x: 0, y: 0 });
     
       useEffect(() => {
         const handleMove = (event) => {
           const { clientX, clientY } = event;
           setPosition({ x: clientX, y: clientY });
         };
     
         if (enabled) {
           window.addEventListener('pointermove', handleMove);
         }
     
         return () => {
           window.removeEventListener('pointermove', handleMove);
         };
       }, [enabled]);
     
       return (
         <main>
           <div style={{
             position: 'absolute',
             backgroundColor: '#00f6ff',
             borderRadius: '50%',
             opacity: 0.8,
             pointerEvents: 'none',
             left: -20,
             top: -20,
             width: 40,
             height: 40,
             transform: `translate(${position.x}px, ${position.y}px)`
           }} />
           <button onClick={() => setEnabled(!enabled)}>
             {enabled ? 'Desactivar' : 'Activar'} puntero
           </button>
         </main>
       );
     }
   ```

2. **App Component:**

   ```jsx
   import { useState } from 'react';
   import { FollowMouse } from './components/FollowMouse';
   
   function App() {
     const [mounted, setMounted] = useState(true);
   
     return (
       <>
         { mounted && <FollowMouse /> }
         <button style={{ marginTop: 10 }} onClick={() => setMounted(!mounted)}>
           Toggle mounted FollowMouse component
         </button>
       </>
     );
   }
   
   export default App;
   ```

## Running the Example

1. Create a new React project or navigate to your existing React project.
2. Add the `FollowMouse` component to a file in the `components` directory.
3. Replace the `App` component in `App.js` with the provided `App` code.
4. Start your React application with `npm start` or `yarn start`.

