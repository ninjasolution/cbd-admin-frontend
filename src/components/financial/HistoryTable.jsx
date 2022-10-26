import { useSelector } from "react-redux"
import { bscScan } from "../../config";
import { RightArrowIcon } from "../../icons";
import { formatDate } from "../../utils/formatHelpers";

export function HistoryTable({ tittle, alert, transactions, order, isData }) {

    const user = useSelector(s => s.auth.user);
    return (
        <div className="my-shadow-1 border-l-4 my-border-1 w-full">
            <div className="table__header flex items-center justify-between">
                <div className="table__header-left">
                    <p className="text-2xl p-3">{tittle}</p>
                </div>

                <div className="table__header-right px-3">
                    {/*select input*/}
                    {
                        transactions && <div className="relative inline-block w-64">
                            <select
                                className="block appearance-none w-full bg-white  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-[#bfc51d]"
                                id="grid-state">
                                <option>All transactions</option>
                            </select>
                        </div>
                    }
                    {/*    arrow icon */}


                </div>
            </div>
            <div className="table__body p-[1rem]">
                {
                    user?.transactions ?
                        <div className="overflow-auto max-h-96">
                            <table className="w-full xl:w-full">
                                <thead>
                                    <tr className="text-left">
                                        <th className="px-4 py-2 border-r-2">Time</th>
                                        <th className="px-4 py-2 border-r-2">Amount</th>
                                        <th className="px-4 py-2 border-r-2">Type</th>
                                        <th className="px-4 py-2 border-r-2">Status</th>
                                        <th className="px-4 py-2 border-r-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.transactions.map((t, id) => (<tr key={id} className="bg-gray-100">
                                            <td className="border px-4 py-2 ">{formatDate(t.createdAt)}</td>
                                            <td className="border px-4 py-2 ">{t.amount} {t.currency}</td>
                                            <td className="border px-4 py-2 ">{t.type}</td>
                                            <td className="border px-4 py-2 ">{t.status}</td>
                                            <td className="border px-4 py-2 ">
                                                <a href={`${bscScan}/tx/${t.hash}`} target="_blank" rel="noreferrer">
                                                    <RightArrowIcon width={30} />
                                                </a>
                                                </td>
                                        </tr>))
                                    }


                                </tbody>
                            </table>
                        </div>
                        :
                        <p className="bg-[#bfc51d] text-white border border-[#bfc51d] p-[0.75rem_1.25rem]">{alert}</p>
                }
            </div>
        </div>
    )
}