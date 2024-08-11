"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import SearchFiled from "./SearchFiled";
import {
  DollarSign,
  HomeIcon,
  Map,
  MapIcon,
  MapPin,
  SearchIcon,
} from "lucide-react";
export default function TabComponent() {
  const locations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
    },
    {
      id: 2,
      name: "Kyoto",
      country: "Japan",
    },
    {
      id: 3,
      name: "Machu Picchu",
      country: "Peru",
    },
    {
      id: 4,
      name: "Petra",
      country: "Jordan",
    },
    {
      id: 5,
      name: "Rome",
      country: "Italy",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        className="bg-white"
        variant="underlined"
        color="primary"
        aria-label="Options"
      >
        <Tab key="Buy" title="Buy">
          <div>
            <SearchFiled />
            <div className="grid grid-cols-3 gap-3 my-5">
              <div>
                <h2 className="flex items-center gap-2 my-4 font-semibold text-lg">
                  <span>
                    <MapPin className="text-orange-500" />
                  </span>
                  Your Location
                </h2>
                <Select radius="sm" size="md" className="max-w-xs rounded-none">
                  {locations.map((location) => (
                    <SelectItem key={location.id}>
                      {location.country}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <h2 className="flex items-center gap-2 my-4 font-semibold text-lg">
                  <span>
                    <HomeIcon className="text-orange-500" />
                  </span>
                  Property Type
                </h2>
                <Select radius="sm" size="md" className="max-w-xs rounded-none">
                  {locations.map((location) => (
                    <SelectItem key={location.id}>
                      {location.country}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <h2 className="flex items-center gap-2 my-4 font-semibold text-lg">
                  <span>
                    <DollarSign className="text-orange-500" />
                  </span>
                  Budget
                </h2>
                <Select radius="sm" size="md" className="max-w-xs rounded-none">
                  {locations.map((location) => (
                    <SelectItem key={location.id}>
                      {location.country}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div>
            <Button
              size="md"
              className="w-full py-2"
              radius="sm"
              color="primary"
            >
              <SearchIcon className="size-6" /> Find Property
            </Button>
          </div>
        </Tab>
        <Tab key="Rent" title="Rent">
          <Card>
            <CardBody>Not Implemented</CardBody>
          </Card>
        </Tab>
        <Tab key="PG" title="PG">
          <Card>
            <CardBody>Not Implemented</CardBody>
          </Card>
        </Tab>
        <Tab key="Commercial" title="Commercial">
          <Card>
            <CardBody>Not Implemented</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
