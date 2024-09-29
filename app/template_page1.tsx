import { Card, Grid, Text, Title, Block } from '@tremor/react';

export default function TemplatePage1() {
  return (
    <div className="p-10">
      <Title>Welcome to Template Page 1</Title>
      <Text>This page demonstrates the use of Tremor&apos;s Blocks.</Text> {/* Escaped single quote */}
      
      <Grid numCols={2} className="gap-6 mt-6">
        {/* First block */}
        <Block>
          <Card>
            <Title>Block 1</Title>
            <Text>This is the first block using Tremor&apos;s Card component.</Text> {/* Escaped single quote */}
          </Card>
        </Block>

        {/* Second block */}
        <Block>
          <Card>
            <Title>Block 2</Title>
            <Text>This is another block for displaying data.</Text>
          </Card>
        </Block>
      </Grid>
    </div>
  );
}