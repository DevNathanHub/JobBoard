import NavLinks from './nav-links';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 border-r border-black border-solid sm:px-8 border-opacity-20 md:px-2">
     
        {/* <NavLinks /> */}
    <div className="flex grow flex-row  md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
    </div>

    </div>
  );
}







  