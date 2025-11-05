"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useState } from "react";

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

const BasicComboCode = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Person | null>(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="mt-4 relative w-64">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full border border-gray-300 rounded-md px-3 py-2",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            displayValue={(person: Person | null) => person?.name || ""}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center px-2">
            <Icon icon="solar:alt-arrow-down-outline" height={20} />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          className={clsx(
            "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white",
            "py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          )}
        >
          {filteredPeople.length === 0 && query !== "" ? (
            <div className="cursor-default select-none px-4 py-2 text-gray-500">
              Nothing found.
            </div>
          ) : (
            filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className={({ active, selected }) =>
                  clsx(
                    "relative cursor-pointer select-none py-2 pl-8 pr-4",
                    active ? "bg-gray-100 text-primary" : "text-gray-900",
                    selected && "font-medium"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block truncate",
                        selected ? "font-medium" : "font-normal"
                      )}
                    >
                      {person.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-2 flex items-center text-primary">
                        <Icon icon="solar:check-read-linear" height={18} />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default BasicComboCode;
