function SectionHeader({tittle, img}) {
    return (
        <>
            <div
                className="before:content-[''] before:border before:border-[1px_solid_#d5d5d5] before:m-[0_20px_0_0] before:flex-[1_0_20px]  after:content-[''] after:border after:border-[1px_solid_#d5d5d5] after:m-[0_0_0_20px] after:flex-[1_0_20px] text-center flex justify-center items-center w-full mt-[10px] mb-[65px]">
                <span
                    className="uppercase text-[2.3rem] tracking-[.6px] text-[#4b4b4b] flex items-center justify-center space-x-3.5"> {
                    img && <img
                        src={img}
                        alt="" className="w-10 h-10 rounded-full mt-1" />
                } <span>{tittle}</span>
                </span>
            </div>
        </>
    )
}

export default SectionHeader;