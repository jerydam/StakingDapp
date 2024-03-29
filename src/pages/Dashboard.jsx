import { Link } from 'react-router-dom'
import StakingABI from '../utils/abi/StakingABI.json'
import { erc20ABI, useContractRead, useContractReads } from "wagmi"
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'


export const Dashboard = () => {

    const [stakedTokens, setStakedTokens] = useState(["0xC84a23b8C65d3d7a4c793bb846258123456b7777"]);
    const contractFactory = {
        old: "0x7c9210c291E00c2030116FcC930D071BBEC5C30f",
        new: "0xa8C61a19F84EC4f79D9671A204CD3fF8fA9e28C3                                                                                                                                                                                                                        "
    }
    const CONTRACT = contractFactory.new


    const { data: stakedTokensAddrs, isError, isLoading, isSuccess } = useContractRead({
        address: CONTRACT,
        abi: StakingABI,
        functionName: "getStakeTokens",
    })

    useEffect(() => {
        setStakedTokens(stakedTokensAddrs)
    },[stakedTokensAddrs])

    // console.log(stakedTokensAddrs, isError, isLoading, isSuccess)
    // console.log(stakedTokens);

    const groupName = stakedTokens.map((e) => {
        return {
            address: e,
            abi: erc20ABI,
            functionName: 'name'
        }
    })
    // console.log(stakedTokens)
    const groupSymbol = stakedTokens.map((e) => {
        return {
            address: e,
            abi: erc20ABI,
            functionName: 'symbol'
        }
    })
    const groupAmount = stakedTokens.map((e) => {
        return {
            address: e,
            abi: erc20ABI,
            functionName: 'balanceOf',
            args: [CONTRACT]
        }
    })

    const { data: tokenNames } = useContractReads({
        contracts: groupName
    })
    const { data: tokenSymbols } = useContractReads({
        contracts: groupSymbol
    })
    const { data: tokenBalance } = useContractReads({
        contracts: groupAmount
    })




    // if (holdersAddrsIsLoading) { return <div> Loading ... </div> }
    return (
        // <main>
        //     {stakedTokens}
        // </main>

        <main className=" mt-10 w-5/6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-3 gap-8 mt-10">


                {tokenNames.map((e, i) => {
                    return (
                        <Link to={`/dashboard/${stakedTokens[i]}`}>
                            <div className="p-4 aspect-square group cursor-pointer relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
                                <div>
                                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                                        
                                        <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="0" y="56"></rect><rect stroke-width="0" width="73" height="57" x="72" y="168"></rect></svg></svg>
                                        
                                        </div>
                                </div>
                                <div className='  '>
                                    <p className="text-sm font-semibold leading-7 text-zinc-900 uppercase">{tokenSymbols[i]}</p>
                                    <h1 className="mt-4 text-zinc-900 font-semibold">{e}</h1>
                                    <h1 className=" text-zinc-300 ">{`${stakedTokens[i].slice(0, 4)}...${stakedTokens[i].slice(-4)}`}</h1>
                                    {/* <p>{ tokenBalance[i]}</p> */}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>

    )
}