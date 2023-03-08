export const StakeForm = () => {
    <form onSubmit={handleSubmit} className="relative flex flex-col mt-4 px-8 py-8 w-1/2 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200">
        <div className="">
            <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="0" y="56"></rect><rect stroke-width="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
        </div>

        <h1 className="text-2xl text-center font-bold mb-8"> Create Ballot Box</h1>

        <div className="mb-8">
            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm">Ballot Name</label>
                    <input
                        type="text"
                        placeholder="Name of Vote Campaign"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>



                <div className="flex flex-col gap-2">
                    <label
                        className=" text-sm">Contender 1</label>
                    <input
                        type="text"
                        placeholder="Name of Vote Campaign"
                        onChange={(e) => setContenders1(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        className=" text-sm">Contender 2</label>
                    <input
                        type="text"
                        placeholder="Name of Vote Campaign"
                        onChange={(e) => setContenders2(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        className=" text-sm">Contender 3</label>
                    <input
                        type="text"
                        placeholder="Name of Vote Campaign"
                        onChange={(e) => setContenders3(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        className=" text-sm">Vote Period</label>
                    <input
                        type="number"
                        placeholder="Set Vote Period in seconds"
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>
                <div className="">
                    <label
                        className=" text-sm">Token Per Vote</label>
                    <input
                        type="number"
                        placeholder="Set token amount used in voting"
                        onChange={(e) => setTokenPerVote(e.target.value)}
                        className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                    />
                </div>

            </div>
        </div>

        <button type="submit" className="w-full bg-zinc-800 text-white rounded-md p-2 hover:bg-zinc-900">Create Ballot</button>
    </form>
}