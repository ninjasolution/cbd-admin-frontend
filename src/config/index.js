export const defaultChainId = "0x13881";

export const chain = "polygon";

export const decimals = 18;

export const CBDTAddr = "0xd2F9cdC59Ea053c0b8119432778b6C1D482D74D3";

export const USDTAddr = "0xe3FfFe75c3f986Fa0447C4E597838ddF06EBa3f3";//GHERO

export const CBDNFTMarketplaceAddr = "0xF19c4DdCcf2AF05DC52d2B1b32f1a134B745D2c3";

export const CBDNFTFactoryAddr = "0xe454995b634DCe1195dA014032F6aF86D8D95904";

export const ReferralAddr = "0x36aD9b485a51dF9c0eb829d88Dec3231576938cd";

export const commonCBDNFTAddr = "0x9caDbD595AACe8D38B436765436e798BeA13E86B";

export const seedPackCBDNFTAddr = "0x0a74821Cfe82dD0246992A18C1fB070e3eC324c9";

// export const backendLink = "https://backend.fintecbull.com:27017"
export const backendLink = "http://127.0.0.1:8545"

export const bscScan = "https://bscscan.com"

export const RPCProvider = "https://avalanche-fuji.infura.io/v3/5c34343809f04bcb96e9a4aeaf19aeca";

export const frontendLink = "https://cbd-admin-frontend.vercel.app"

export const INFRA_ID = "5c34343809f04bcb96e9a4aeaf19aeca"

export const ownerAddress = "0x45FC64417AA1D30933dA7f93C156B502aee4c320"

export const categories = [
    {
        collection: commonCBDNFTAddr,
        image: "https://grow.greenovation.ch/wp-content/uploads/2022/08/nft5-e1661287506322.webp",
        title: "Common",
        discountAmount: 0,
        mainPrice: 998.00,
        shortDescription: "",
        payTokenAddress: USDTAddr,
        payTokenSymbol: "USDT", 
        totalSupply: 1000,
        description: "25 Pflanzenplätze Empfehlungsbonus: 15% Level 1 / 10% Level 2 EXCLUSIV nur 15-mal",
        name: "Common CBD NFT"
    },
    // {
    //     collection: "",
    //     img: "https://grow.greenovation.ch/wp-content/uploads/2022/08/nft6-e1661287165303.webp",
    //     title: "Standard",
    //     discount: true,
    //     discountAmount: 25,
    //     mainPrice: "25'000.00",
    //     afterDiscountPrice: "19'800.00",
    // },
    {
        collection: seedPackCBDNFTAddr,
        image: "https://grow.greenovation.ch/wp-content/uploads/2022/08/nft6-e1661287165303.webp",
        title: "Seed-Package",
        discountAmount: 25,
        mainPrice: 998,
        shortDescription: "",
        payTokenAddress: USDTAddr,
        payTokenSymbol: "USDT", 
        totalSupply: 1000,
        description: "25 Pflanzenplätze Empfehlungsbonus: 15% Level 1 / 10% Level 2 EXCLUSIV nur 15-mal",
        name: "Seed Package CBD NFT"
    },

];

export const categoriesByAddress = {
    [commonCBDNFTAddr]: {
        image: "https://grow.greenovation.ch/wp-content/uploads/2022/08/nft5-e1661287506322.webp",
        title: "Common",
        name: "Common CBD NFT"

    },
    [seedPackCBDNFTAddr]: {
        image: "https://grow.greenovation.ch/wp-content/uploads/2022/08/nft6-e1661287165303.webp",
        title: "Seed Package",
        name: "Seed Package CBD NFT"
    }
}

export const marketplaceLabel = "marketplace"