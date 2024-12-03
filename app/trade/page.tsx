import { getAllTrades } from "@/lib/testdb";
import DataTable from './data-table'
import { columns } from './columns'

const DashboardPage = async () => {
    const allTrades = await getAllTrades()
    console.log(allTrades)
    return (
        <div className="container mx-auto py-10">
            <div className="mx-10 items-center justify-between">
                <DataTable
                    filterValue="outcome"
                    filterName="Outcome"
                    columns={columns}
                    data={allTrades}
                ></DataTable>
            </div>
        </div>
    );
}


export default DashboardPage