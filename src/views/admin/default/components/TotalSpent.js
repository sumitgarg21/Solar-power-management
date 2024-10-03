// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

export default function EnergyProduction(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const iconColor = useColorModeValue("green.500", "white");

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      {/* Heading */}
      <Flex justify="center" w="100%" pt="5px">
        <Text
          color={textColor}
          fontSize="2xl"
          fontWeight="700"
          textAlign="center"
        >
          Energy Production
        </Text>
      </Flex>

      {/* Production Metrics */}
      <Flex w="100%" flexDirection="row" justify="space-evenly" align="center" mt="20px" mb="10px">
        <Flex align="center" flexDirection="column">
          <Text
            color={textColorSecondary}
            fontSize="sm"
            fontWeight="500"
            mt="4px"
            opacity="0.7"  // Reduced opacity
          >
            Total Generated Energy
          </Text>
          <Text color={textColor} fontSize="l" fontWeight="700">
            701 kWh
          </Text>
        </Flex>
        <Flex align="center" flexDirection="column">
          <Text
            color={textColorSecondary}
            fontSize="sm"
            fontWeight="500"
            mt="4px"
            opacity="0.7"  // Reduced opacity
          >
            Total Capacity
          </Text>
          <Text color={textColor} fontSize="l" fontWeight="700">
            4,500 kWh
          </Text>
        </Flex>
        <Flex align="center" flexDirection="column">
          <Text
            color={textColorSecondary}
            fontSize="sm"
            fontWeight="500"
            mt="4px"
            opacity="0.7"  // Reduced opacity
          >
            Avg. Efficiency
          </Text>
          <Text color={textColor} fontSize="l" fontWeight="700">
            32.8%
          </Text>
        </Flex>
        <Flex align="center" flexDirection="column">
          <Text
            color={textColorSecondary}
            fontSize="sm"
            fontWeight="500"
            mt="4px"
            opacity="0.7"  // Reduced opacity
          >
            CO₂ Reduced
          </Text>
          <Text color={textColor} fontSize="l" fontWeight="700">
            0.79 kt
          </Text>
        </Flex>
      </Flex>

      {/* Chart */}
      <Box minH="260px" w="100%">
        <LineChart
          chartData={lineChartDataTotalSpent}
          chartOptions={lineChartOptionsTotalSpent}
        />
      </Box>
    </Card>
  );
}
