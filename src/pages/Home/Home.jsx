import { useState } from "react";
import CardsLayout from "../../components/CardsLayout/CardsLayout";
import { ReactComponent as DashboardIcon } from "../../assets/icons/isu.svg";
import { ReactComponent as LaboratoryIcon } from "../../assets/icons/laboratory.svg";
import { ReactComponent as ReportsIcon } from "../../assets/icons/reports.svg";
import { ReactComponent as ElectricityIcon } from "../../assets/icons/electricity.svg";

const Home = () => {
  const [sites] = useState([
    {
      label: "Рабочие области",
      icon: (props) => <DashboardIcon {...props} />,
      link: "/MES/ILM/UI/Insight/browse",
    },
    {
      label: "Лаборатория",
      icon: (props) => <LaboratoryIcon {...props} />,
      link: "/laboratory",
    },
    {
      label: "Просмотр отчетов",
      link: "/ReportS_mes/browse/SKK",
      icon: (props) => <ReportsIcon {...props} />,
    },
    {
      label: "Выработка / потребление электроэнергии",
      link: "/electricity",
      icon: (props) => <ElectricityIcon {...props} />,
    },
  ]);

  return (
    <div>
      <h2>Выберите приложение</h2>
      <CardsLayout items={sites} />
      <br />
    </div>
  );
};

export default Home;
