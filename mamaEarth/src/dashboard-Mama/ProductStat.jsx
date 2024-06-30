import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export const ProductCategoryStats = ({ products }) => {
  const categoryStats = products.reduce((stats, product) => {
    if (stats[product.category]) {
      stats[product.category].count++;
    } else {
      stats[product.category] = { count: 1 };
    }
    return stats;
  }, {});

  const chartData = {
    labels: Object.keys(categoryStats),
    datasets: [
      {
        data: Object.values(categoryStats).map(({ count }) => count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(148,198,66, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(148,198,66, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="category-stats">
      <Box mb={4}>
        <Heading size="15px" style={{ textAlign: "center", color: "#00aeef" }}>
          Category Statistics (Table)
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Product Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(categoryStats).map(([category, { count }]) => (
              <Tr key={category}>
                <Td>{category}</Td>
                <Td>{count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <div className="stats-chart">
        <Heading size="15px" style={{ textAlign: "center", color: "#00aeef" }}>
          Category Statistics (Pie Chart)
        </Heading>
        <Pie data={chartData} />
      </div>
    </div>
  );
};


