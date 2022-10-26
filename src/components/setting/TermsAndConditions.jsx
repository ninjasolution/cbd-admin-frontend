import {FormHeading} from "./FormHeading";

export const TermsAndConditionsTittle = [
	{
		id: 1,
		title: 'Terms of Service',
	}  ,
	{
		id: 2,
		title: 'Privacy Policy',
	} ,
	{
		id: 3,
		title: 'Purchase and agency agreement (Draft)',
		subTitle: 'You can find the contracts for your plants in the order-history section. Click on the file icon to open the contract.'
	},
	{
		id: 4,
		title: 'Affiliate-program agreement',
	} ,
	{
		id: 5,
		title: 'Terms and Conditions',
	}
]


export function TermsAndConditions() {
	return(
		<div className="w-full h-full my-border-1 border-l-4 my-shadow-1">
			<FormHeading heading="Terms and Conditions" />
			<div className="card__body p-4 ">
				<div className="flex flex-col border border-b-0">
					{TermsAndConditionsTittle.map((item) => (
							<div key={item.id} className="border-b p-2 cursor-pointer hover:bg-gray-50">
								<p>{item.title}</p>
								{
									item.subTitle && <p className="text-[#bfc51d] hover:underline">{item.subTitle}</p>
								}
							</div>
					))}
							
					</div>
				<hr className='mt-4'/>
			</div>
		</div>
	)
}