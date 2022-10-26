export const defaultChainId = "0x13881";

export const chain = "polygon";

export const decimals = 18;

export const CBDTAddr = "0xd2F9cdC59Ea053c0b8119432778b6C1D482D74D3";

export const USDTAddr = "0xe3FfFe75c3f986Fa0447C4E597838ddF06EBa3f3";//GHERO

export const CBDNFTMarketplaceAddr = "0xBE5b1D0C58693aFc2BA26facECa4EE3D906aA428";

export const CBDNFTFactoryAddr = "0xd213e35240d622615d011e4ed5A689D7B8740a92";

export const ReferralAddr = "0xAEe668745b780F90551862Be0a867671ab4013C0";

export const commonCBDNFTAddr = "0x376152909991F8Ce3F4e9E0f77fB82527cAC0FD1";

export const seedPackCBDNFTAddr = "0x3D7fcAed58A6393D68573BFFFEB89a38d87A5121";

export const backendLink = "https://backend.fintecbull.com:27017"

export const bscScan = "https://bscscan.com"

export const RPCProvider = "https://avalanche-fuji.infura.io/v3/5c34343809f04bcb96e9a4aeaf19aeca";

export const frontendLink = "http://localhost:3000"

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