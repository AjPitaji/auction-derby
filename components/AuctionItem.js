export default function AuctionItem({ item }) {
  const [bid, setBid] = useState('');
  const [status, setStatus] = useState('');

  const handleBid = async () => {
    const bidAmount = parseFloat(bid);
    if (isNaN(bidAmount) || bidAmount <= item.currentBid) {
      setStatus('Bid must be higher than current bid.');
      return;
    }
    // TODO: Replace with real MCP/WebSocket call
    setStatus(`Placing bid of $${bidAmount}…`);
    // Simulate async
    setTimeout(() => {
      setStatus(`Bid of $${bidAmount} placed!`);
      setBid('');
    }, 1000);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', background: '#fafafa' }}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Current bid:</strong> ${item.currentBid}</p>
      <div style={{ marginTop: '1rem' }}>
        <input
          type=\"number\"
          placeholder=\"Your bid\"
          value={bid}
          onChange={e => setBid(e.target.value)}
          style={{ marginRight: '0.5rem', padding: '0.3rem' }}
        />
        <button onClick={handleBid} disabled={!bid}>Place Bid</button>
      </div>
      {status && <p style={{ marginTop: '0.5rem', color: status.includes('placed') ? 'green' : 'red' }}>{status}</p>}
    </div>
  );
}

import { useState } from 'react';