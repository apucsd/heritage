"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";

import { DollarSign, HomeIcon, MapPin, SearchIcon } from "lucide-react";
import Link from "next/link";
import SearchFiled from "./SearchFiled";
export default function TabComponent() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [searchText, setSearchText] = useState("");
  const locations = [
    { id: "1", label: "Maplewood, NJ" },
    { id: "2", label: "Malibu, CA" },
    { id: "3", label: "Asheville, NC" },
    { id: "4", label: "Aspen, CO" },
    { id: "5", label: "Santa Monica, CA" },
  ];

  const types = [
    { id: "1", label: "House" },
    { id: "2", label: "Villa" },
    { id: "3", label: "Apartment" },
    { id: "4", label: "Condo" },
    { id: "5", label: "Townhouse" },
  ];

  const budgets = [
    { id: "1", label: "$0 - $1,000", value: 1000 },
    { id: "2", label: "$1,001 - $2,000", value: 2000 },
    { id: "3", label: "$2,001 - $3,000", value: 3000 },
    { id: "4", label: "$3,001 - $4,000", value: 4000 },
    { id: "5", label: "$4,001 - $5,000", value: 5000 },
    { id: "6", label: "$5,001 - $6,000", value: 6000 },
    { id: "7", label: "$6,001 - $7,000", value: 7000 },
    { id: "8", label: "$7,001 - $8,000", value: 8000 },
    { id: "9", label: "$8,001 - $9,000", value: 9000 },
    { id: "10", label: "$9,001 - $10,000", value: 10000 },
  ];
  const query = {
    ...(location && { location }),
    ...(propertyType && { propertyType }),
    ...(budget && { budget }),
    ...(searchText && { searchText }),
  };
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
            <SearchFiled setSearchText={setSearchText} />
            <div className="grid grid-cols-3 gap-3 my-5">
              <div>
                <h2 className="flex items-center gap-2 my-4 font-semibold text-lg">
                  <span>
                    <MapPin className="text-orange-500" />
                  </span>
                  Your Location
                </h2>
                <Select
                  onChange={(e) => setLocation(e.target.value)}
                  radius="sm"
                  size="md"
                  className="max-w-xs rounded-none"
                  label="Select Location"
                >
                  {locations.map((location) => (
                    <SelectItem key={location.label}>
                      {location.label}
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
                <Select
                  onChange={(e) => setPropertyType(e.target.value)}
                  radius="sm"
                  size="md"
                  className="max-w-xs rounded-none"
                  label="Select Type"
                >
                  {types.map((type) => (
                    <SelectItem key={type.label}>{type.label}</SelectItem>
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
                <Select
                  onChange={(e) => setBudget(e.target.value)}
                  radius="sm"
                  size="md"
                  className="max-w-xs rounded-none"
                  label="Select Budget"
                >
                  {budgets.map((budget) => (
                    <SelectItem key={budget.value}>{budget.label}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div>
            <Link
              className=" w-full"
              href={{
                pathname: "/buy/find-property",
                query,
              }}
            >
              <Button
                size="md"
                className="w-full py-2"
                radius="sm"
                color="primary"
              >
                <SearchIcon className="size-6" /> Find Property
              </Button>
            </Link>
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
