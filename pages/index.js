import AuctionItem from '../components/AuctionItem';

export default function Home() {
  const sampleItems = [
    {
      id: 1,
      title: 'Vintage Watch',
      description: 'A classic stainless‑steel watch from the 1970s.',
      currentBid: 120,
    },
    {
      id: 2,
      title: 'Art Print',
      description: 'Limited edition signed print by a contemporary artist.',
      currentBid: 45,
    },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Auction Derby</h1>
      <p>Live auctions with MCP‑compatible bidding.</p>
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {sampleItems.map(item => (
          <AuctionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}