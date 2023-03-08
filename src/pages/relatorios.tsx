import { Box } from "@/components/Box";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ThemeContext } from "@/contexts/ThemeContext";
import { faker } from "@faker-js/faker";
import Head from "next/head";
import { useContext } from "react";
import { Line, Scatter } from "react-chartjs-2";

export default function Relatorios() {
  const { theme } = useContext(ThemeContext);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: theme === "dark" ? "#ffffff" : "#83060E",
        tension: 0.1,
      },
    ],
  };

  const dataScatter = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: theme === "dark" ? "#ffffff" : "#83060E",
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        grid: { display: false },
        border: { color: theme === "dark" ? "#ffffff" : "#83060E" },
        ticks: { color: theme === "dark" ? "#ffffff" : "#83060E" },
      },
      x: {
        grid: {
          display: false,
        },
        border: { color: theme === "dark" ? "#ffffff" : "#83060E" },
        ticks: { color: theme === "dark" ? "#ffffff" : "#83060E" },
      },
    },
  };

  return (
    <>
      <Head>
        <title>Rodap - Relatórios</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <div className="grid grid-cols-2 gap-6">
          <Box>
            <h2 className="text-lg mb-8">Usuários</h2>
            <Line data={data} options={options} />
          </Box>
          <Box>
            <h2 className="text-lg mb-8">Acessos</h2>
            <Line data={data} options={options} />
          </Box>
          <Box>
            <h2 className="text-lg mb-8">Acessos (por horário)</h2>
            <Scatter options={options} data={dataScatter} />
          </Box>
        </div>
      </Main>
    </>
  );
}
