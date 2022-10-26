import SingleLineChart from "./SingleChart";

export function GraphCard() {
  return (
    <div className="graph__card w-full pb-10 md:pb-0 my-shadow-1 border-l-4 my-border-1 ">
      <div className="graph__card-header">
        <h3 className="text-2xl p-3">Balance History</h3>
      </div>
      <div className="graph__card-body p-[1rem] overflow-auto">
        <SingleLineChart title="ACTIVE WALLETS" />
      </div>
    </div>
  );
}
