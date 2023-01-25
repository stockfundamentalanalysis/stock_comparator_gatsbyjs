import React, { useMemo } from 'react';
import MaterialReactTable, {MRT_ColumnDef, MRT_Cell} from 'material-react-table';
import json from '../data/sfa_easy.json'

//nested data is ok, see accessorKeys in ColumnDef below
const data = Object.values(json)

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        header: "Ticker",
        accessorKey: "Ticker"
      },
      {
        header: "CompanyName",
        accessorKey: "CompanyName"
      },
      {
        header: "Potential",
        accessorKey: "Potential",
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            backgroundColor:
              cell.getValue<number>() > 0.5
                ? 'rgba(22, 184, 44, 0.5)'
                : undefined,
            fontWeight:
              cell.column.id === 'age' && cell.getValue<number>() > 40
                ? '700'
                : '400'
          },
        }),
      },
      {
        header: "TargetPrice",
        accessorKey: "TargetPrice",
      },
      {
        header: "DebtQualityScore",
        accessorKey: "DebtQualityScore"
      },
      {
        header: "EarningsScore",
        accessorKey: "EarningsScore"
      },
      {
        header: "ProfitabilityScore",
        accessorKey: "ProfitabilityScore"
      },
      {
        header: "GrowthScore",
        accessorKey: "GrowthScore"
      },
      {
        header: "Sector",
        accessorKey: "Sector"
      },
    ],
    [],
  );

  return <MaterialReactTable 
    columns={columns} 
    data={data} />;
};

export default Example;

