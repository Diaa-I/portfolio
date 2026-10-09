export default function SpiningLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111] text-white font-sans">
      <div className="mb-5 h-[50px] w-[50px] animate-spin rounded-full border-[5px] border-[#333] border-t-white" />
      <p className="text-base font-normal">Loading the Experience...</p>
    </div>
  );
}
