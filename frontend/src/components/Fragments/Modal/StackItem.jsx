const StackItemModal = (props) => {

    const { stackModal } = props

    return (
        <div className="flex justify-center">
            <div className="w-2/3 border-2 border-slate-300 rounded-xl shadow bg-primary text-muted text-white lg:text-sm m:text-m text-center ">
                <h3 className="text-xl text-white mt-2 mb-2 font-bold">Back End Stacks</h3>
                <div className="w-full h-0.5 bg-slate-300 my-2" />
                <div className="inline-flex flex-wrap text-sm text-muted justify-center text-gray-600 mb-2">
                    <div className="border rounded-xl shadow w-24 border-white p-1 bg-gray-200 m-2">
                        PHP Laravel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackItemModal