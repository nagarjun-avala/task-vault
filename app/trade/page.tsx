import { getAllTrades } from "@/lib/testdb";

const DashboardPage = async () => {
    const allTrades = await getAllTrades()
    console.log(allTrades)
  return (
    <div className="container mx-auto py-10">
      Trades Page
    </div>
  );
}


export default DashboardPage