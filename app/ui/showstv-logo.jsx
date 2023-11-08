import { TvIcon } from '@heroicons/react/24/outline'

export default function ShowsTvLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none gap-x-3 text-white`}
    >
      <TvIcon className="h-10 w-10"/>
      <p className="text-2xl font-bold">ShowsTV</p>
    </div>
  );
}
