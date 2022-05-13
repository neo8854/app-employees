import "./app-info.css";

const AppInfo = ({ employees, increaseD }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Domus</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increaseD}</h2>
    </div>
  );
};

export default AppInfo;
