import {FormHeading} from "./FormHeading";

export const tableHeading = [
    {
        id: 1,
        title: ' ',
    },
    {
        id: 2,
        title: 'Level 1'
    },
    {
        id: 3,
        title: 'Level 2'
    }
]

export const tableData = [
    {
        id: 1,
        title: 'Bank transfer deposit',
        level1: 'unlimited',
        level2: 'unlimited'
    }, {
        id: 2,
        title: 'Payout by bank transfer',
        level1: '0€',
        level2: '10.000 EUR / 24h fees: 10 EUR'
    }, {
        id: 1,
        title: 'Deposit via Bitcoin (currently not available)',
        level1: 'unlimited',
        level2: 'unlimited'
    }, {
        id: 1,
        title: 'Withdraw via Bitcoin (currently not available)',
        level1: '250 EUR / 24h',
        level2: '2000 EUR / 24h'
    }
]

export function Verification() {
    return (
        <div className="w-full my-shadow-1 my-border-1 border-l-4">
            <FormHeading heading="Verification" />
            <div className="p-4">
                <div className="verification__status p-3 text-center bg-[#BFC51D]">
                    <p className="text-xl my-2">
                        Your verification status
                    </p>
                    <span className="font-bold text-xl bg-black text-white py-1 px-2 rounded-full"> Unverified</span>
                </div>
                <div className="verification__level pt-10">
                    <p className="font-bold text-xl border-y py-3">Levels</p>
                    <table className="w-full">
                        <thead>
                        <tr>
                            {
                                tableHeading.map((item) => (
                                    <th key={item.id}
                                        className="w-4/12 border-b text-center px-4 py-3">{item.title}</th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>

                        {
                            tableData.map((item) => (
                                <tr key={item.id}>
                                    <td className="border-b text-center px-4 py-3">{item.title}</td>
                                    <td className="border-b text-center px-4 py-3">{item.level1}</td>
                                    <td className="border-b text-center px-4 py-3">{item.level2}</td>
                                </tr>
                            ))
                        }


                        </tbody>
                    </table>
                    <p className="py-3">⚠️ Email not confirmed! Please confirm your e-mail address to activate
                                        verification
                                        level 1.</p>
                    <hr className=" my-3" />
                </div>
            </div>

        </div>
    )
}