import { ethers } from 'ethers'
import governanceTokenJson from '../../contracts/GovernanceToken.json'
import governanceContractJson from '../../contracts/GovernorContract.json'
import postingJson from '../../contracts/Posting.json'

const useContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    console.log(process.env.NEXT_PUBLIC_GOERLI_GOVERNANCE_TOKEN)
    const governanceToken = new ethers.Contract(
        process.env.NEXT_PUBLIC_GOERLI_GOVERNANCE_TOKEN as any,
        governanceTokenJson.abi,
        signer,
    )

    const governor = new ethers.Contract(
        process.env.NEXT_PUBLIC_GOERLI_GOVERNOR as string,
        governanceContractJson.abi,
        signer,
    )
    const posting = new ethers.Contract(process.env.NEXT_PUBLIC_GOERLI_POSTING as string, postingJson.abi, signer)
    return { governanceToken, governor, posting }
}

export { useContract }
