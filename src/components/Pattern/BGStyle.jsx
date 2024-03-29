const BGStyle = () => {
    return (
        <div
            className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden"
        >
            <div
                className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0c90fcc0] to-[#4635df] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"
                >

                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"
                    >
                        <defs>
                            <pattern id=":rdj:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:rdj:)"></rect><svg x="-12" y="4" class="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect><rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect><rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect><rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect></svg></svg></div><svg viewBox="0 0 1113 440" aria-hidden="true" class="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px]"><path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default BGStyle