import React, { useEffect, useMemo, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from '../components/File';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
};

const Home = () => {
  const [name, setName] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setName(data.name);
  };
  const renderDownloadButton = useMemo(
    () => (
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
        className="btn"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Your pdf is ready. Download!'
        }
      </PDFDownloadLink>
    ),
    [name]
  );

  return (
    <div className="home">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" style={{ display: 'block' }}>
          Name
        </label>
        <input
          {...register('name', {
            required: 'This field is required',
            maxLength: { value: 200, message: 'You exceeded the length' },
          })}
          type="text"
          id="name"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'submitting' : 'Save changes to pdf'}
        </button>
      </form>

      {isClient && name !== '' && renderDownloadButton}
    </div>
  );
};

export default Home;
