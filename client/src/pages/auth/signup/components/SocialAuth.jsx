export function SocialAuth() {
  return (
    <div className="flex flex-col items-center w-full mt-10">
      <div className="flex items-center w-full gap-3 mb-6">
        <div className="h-px flex-1 bg-[#E8E4DA]" />
        <span className="text-sm text-[#6B6B63]">or continue with</span>
        <div className="h-px flex-1 bg-[#E8E4DA]" />
      </div>
      <button className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-[#E8E4DA] bg-white hover:bg-[#F4F1EA] transition-colors">
        <img src="/img/icons/icons8-google-48.png" alt="Google" className="w-5 h-5" />
        <span className="text-[#1C1D1B] font-medium">Google</span>
      </button>
    </div>
  );
}
