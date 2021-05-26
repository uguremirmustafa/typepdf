import React, { FC } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#333',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    padding: 30,
  },
});

type Props = {
  name: string;
};

const PdfDocument: FC<Props> = ({ name }) => {
  console.log('pdf props', name);
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>
          My name is {name} and this is my perfectly useful pdf document!
        </Text>
      </Page>
    </Document>
  );
};
export default PdfDocument;
