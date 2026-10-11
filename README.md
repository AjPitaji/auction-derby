# Auction Derby

A web‑based auction platform compatible with the Model Context Protocol (MCP) that enables autonomous agents to bid on items in real time.

## Features
- List items with description and starting bid
- Place bids via UI or programmatically through MCP endpoints
- Real‑time bid updates over WebSocket
- Simple admin dashboard placeholder
- MCP communication stub for agent framework integration
- Built with Next.js (React) for SSR and API routes

## Getting Started

1. Clone the repository
   ```
   git clone <repo-url>
   cd auction-derby
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the development server
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `pages/` – Next.js pages (UI and API routes)
- `components/` – Reusable React components
- `styles/` – Global CSS

## API Routes

- `pages/api/mcp.js` – Stub endpoint that returns a placeholder JSON response. Replace with real MCP logic.

## WebSocket

Real‑time bid updates are intended to be handled via a WebSocket server (e.g., using `ws` or Socket.io). A minimal example can be added in a custom server file.

## License

MIT