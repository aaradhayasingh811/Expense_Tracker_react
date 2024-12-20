import { Menu, MenuButton, MenuItem, MenuItems, Radio } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Filter({ filterOnClick, selectedTag}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Sort By
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
        <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("All")}
            >
              All
            </button>
          <MenuItem>
          <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("Credit")}
            >
              Credit
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("Education")}
            >
              Education
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("Shopping")}
            >
              Shopping
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("Food")}
            >
              Food
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none no-underline"
              onClick={() => filterOnClick("Others")}
            >
              Others
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
