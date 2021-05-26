import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from '../components/File';

const Home = () => {
  const [name, setName] = useState('');
  const [isClient, setIsClient] = useState(false);
  console.log(name);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="home">
      <input
        placeholder="enter your name and click download"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {isClient && (
        <PDFDownloadLink
          document={<PdfDocument name={name} />}
          fileName="file.pdf"
          style={{
            textDecoration: 'none',
            padding: '10px',
            color: '#4a4a4a',
            backgroundColor: '#f2f2f2',
            border: '1px solid #4a4a4a',
          }}
        >
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Pdf')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default Home;
