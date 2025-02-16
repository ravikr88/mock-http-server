# Change Log

## [Date: YYYY-MM-DD]

### 📦 Fix: Install missing `tsc-watch` dependency

- Installed `tsc-watch` as a dev dependency using `npm install --save-dev tsc-watch`.
- Updated `package.json` to use `npx tsc-watch` in the start script.

### 🛠 Fix: Resolve 'Cannot find module net' error

- Installed Node.js type definitions using `npm install --save-dev @types/node`.
- Updated `tsconfig.json` with:
  ```json
  {
    "compilerOptions": {
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "target": "ESNext",
      "types": ["node"]
    }
  }
  ```
