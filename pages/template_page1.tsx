// TemplatePage1.tsx
import { Card, Grid, Text, Title } from '@tremor/react';
import SalesOverview from './SalesOverview'; // Adjust the path as necessary

export default function TemplatePage1() {
  return (
    <div className="p-10">
      <Title>Welcome to Template Page 1</Title>
      <Text>This page demonstrates the use of Tremor Blocks.</Text>

      <Grid numCols={2} className="gap-6 mt-6">
        {/* First block */}
        <Card>
          <Title>Block 1</Title>
          <Text>This is the first block using Tremor&apos;s Card component.</Text>
        </Card>

        {/* Second block */}
        <Card>
          <Title>Block 2</Title>
          <Text>This is another block for displaying data.</Text>
        </Card>
      </Grid>

      {/* Add the SalesOverview component here */}
      <SalesOverview />
    </div>
  );
}
