export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0056b3' }}>Welcome to FOCAL ENTERPRISES</h1>
      <img src="/logo.png" alt="Focal Enterprises Logo" style={{ width: '100px', margin: '1rem 0' }} />
      <p>We supply a wide range of industrial products used in manufacturing.</p>
      <ul>
        <li>Metals & Alloys</li>
        <li>Cutting Tools & Accessories</li>
        <li>Welding Consumables</li>
        <li>Adhesives</li>
        <li>Measuring Gauges</li>
        <li>Automotive & Industrial Oils</li>
        <li>Safety Items</li>
        <li>Industrial Cables</li>
      </ul>
      <a href="https://wa.me/917999991327" style={{ color: '#007aff', fontWeight: 'bold' }}>Contact on WhatsApp</a>
    </main>
  );
}