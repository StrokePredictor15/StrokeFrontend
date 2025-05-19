# StrokeFrontend

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

---

## 1. Install Dependencies

Navigate to the project root and run:

```bash
npm install
```

If you have a separate Node.js backend, navigate to its folder and run:

```bash
cd server
npm install
```

---

## 2. Running the React Frontend

From the project root:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 3. Running the Node.js Server

Navigate to your backend folder (if separate):

```bash
cd server
```

Start the server (adjust the command if you use nodemon or a different entry file):

```bash
node index.js
```

The backend will run on [http://localhost:5000](http://localhost:5000).

---

## 4. Connecting Frontend to Backend

Ensure your frontend API requests point to `http://localhost:5000` (as in the ConsultForm component).

---

## 5. Build for Production

To create a production build of the frontend:

```bash
npm run build
```

The output will be in the `build` directory.

---

## Notes

- Make sure both frontend and backend servers are running for full functionality.
- Update API endpoints in the frontend if your backend runs on a different port or host.
