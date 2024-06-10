const StackItem = (props) => {
    const { name } = props

    return (
        <div className="border rounded-xl shadow w-28 border-slate-400 p-1 bg-gray-200 m-2">
            {name}
        </div>
    )
}

export default StackItem