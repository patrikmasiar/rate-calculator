import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Button, Stack, Text, Heading } from '@chakra-ui/react';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [total, setTotal] = useState(0);

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(parseInt(event.target.value));
  };

  const handleHourlyRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(parseInt(event.target.value));
  };

  const calculateTotal = () => {
    const totalMinutes = hours * 60 + minutes;
    setTotal((totalMinutes / 60) * hourlyRate);
  };

  return (
    <ChakraProvider>
    <Stack p={5}>
      <Heading as="h1" size="xl">Price Calculator</Heading>
      <Stack direction="row">
        <FormControl>
          <FormLabel htmlFor="hours">Hours</FormLabel>
          <Input
            type="number"
            id="hours"
            value={hours}
            onChange={handleHoursChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="minutes">Minutes</FormLabel>
          <Input
            type="number"
            id="minutes"
            value={minutes}
            onChange={handleMinutesChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="hourlyRate">Hourly Rate</FormLabel>
          <Input
            type="number"
            id="hourlyRate"
            value={hourlyRate}
            onChange={handleHourlyRateChange}
          />
        </FormControl>
      </Stack>
      <Button onClick={calculateTotal}>Calculate Total</Button>
      <Text>
        Total: €{total.toFixed(2)}
      </Text>
    </Stack>
    </ChakraProvider>
  );
}

export default App;
