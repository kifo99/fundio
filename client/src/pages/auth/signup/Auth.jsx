import { AuthCompact } from './components/AuthCompact';

export function Auth() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-dvh w-full sm:w-2/3 md:w-1/2 lg:w-1/2 m-auto">
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full sm:w-2/3 md:w-1/2 lg:w-1/3 overflow-hidden">
          <AuthCompact />
        </div>
      </div>
    </div>
  );
}
