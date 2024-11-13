import { Table } from "antd";
import dayjs from "dayjs";
import { DataType, TableUIProps } from '../../../../types'



const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a: DataType, b: DataType) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a: DataType, b: DataType) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: DataType, b: DataType) => dayjs(a.startDate).unix() - dayjs(b.startDate).unix(),
  },
  { 
    title: "Department", 
    dataIndex: "department", 
    key: "department",
    sorter: (a: DataType, b: DataType) => a.department.localeCompare(b.department),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: DataType, b: DataType) => dayjs(a.dateOfBirth).unix() - dayjs(b.dateOfBirth).unix(),
  },
  { 
    title: "Street", 
    dataIndex: "street", 
    key: "street",
    sorter: (a: DataType, b: DataType) => a.street.localeCompare(b.street),
  },
  { 
    title: "City", 
    dataIndex: "city", 
    key: "city",
    sorter: (a: DataType, b: DataType) => a.city.localeCompare(b.city), 
  },
  { 
    title: "State", 
    dataIndex: "state", 
    key: "state",
    sorter: (a: DataType, b: DataType) => a.state.localeCompare(b.state),
  },
  { 
    title: "Zip Code", 
    dataIndex: "zipCode", 
    key: "zipCode", 
    sorter: (a: DataType, b: DataType) => a.zipCode - b.zipCode, 
  },
];

const TableUI: React.FC<TableUIProps> = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) =>
        `${record.zipCode}-${record.firstName}-${record.lastName}`
      }
      showSorterTooltip={{ target: 'sorter-icon' }}
      rowClassName={(_, index) => 
        index % 2 === 0 ? 'table-row' : 'table-row' 
      }
      pagination={false}
    />
  );
};

export default TableUI;
