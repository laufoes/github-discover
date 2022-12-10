function Loading() {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-2xl pb-4">Loading...</p>
      <progress className="progress progress-neutral-content w-56"></progress>
    </div>
  )
}

export default Loading